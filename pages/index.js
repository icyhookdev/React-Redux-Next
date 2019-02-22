import React from 'react';
import Page from '../components/page';
import Layout from '../components/Layout';
import { connect } from 'react-redux';
import fetch from 'isomorphic-unfetch';

import { addPost, getPosts } from '../store/actions/posts';
import List from '../components/List';

import { Wrapper } from '../css/components';

class Index extends Page {
  static getInitialProps = async ({ req }) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    const posts = data.slice(1, 7);
    return { data: posts };
  };

  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    console.log(this.props);
    return (
      <Layout>
        <h1 style={{ marginTop: '30px' }}>Posts</h1>
        <Wrapper>
          <List lists={this.props.posts} />
        </Wrapper>
      </Layout>
    );
  }
}

const mapStateToProps = ({ posts }) => posts;

export default connect(
  mapStateToProps,
  { addPost, getPosts }
)(Index);
