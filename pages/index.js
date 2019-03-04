import React from 'react';
import { connect } from 'react-redux';

import { getPosts } from '../store/actions/posts';
import Layout from '../components/Layout';
import List from '../components/List';
import { MainTitle, MainContent, Card, SubTitle } from '../styles/baseLayout';

class index extends React.Component {
  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    return (
      <div>
        <Layout />

        <MainContent>
          <MainTitle>Welcome to Postify</MainTitle>
          <Card>
            <SubTitle>Top Postifies!</SubTitle>
            <ul>
              <List lists={this.props.minPosts} />
            </ul>
          </Card>
        </MainContent>
      </div>
    );
  }
}

const mapStateToProps = ({ posts }) => ({ minPosts: posts.posts });

export default connect(
  mapStateToProps,
  { getPosts }
)(index);
