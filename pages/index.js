import React from 'react';
import Page from '../components/page';
import Layout from '../components/Layout';
import { connect } from 'react-redux';

import { addPost } from '../store/actions/posts';
import List from '../components/List';

class Default extends Page {
  state = {
    title: '',
    description: ''
  };

  // static getInitialProps({ store, isServer, pathname, query }) {
  //   store.dispatch({ type: 'FOO', payload: 'foo' });
  //   return { custom: 'custom' };
  // }

  onAddPostHandler = () => {
    const { title, description } = this.state;
    this.props.addPost({ title, description });
  };

  onChangeHandler = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { title, description } = this.state;
    console.log(this.props);
    return (
      <Layout>
        <input
          name="title"
          value={title}
          placeholder="Title"
          onChange={this.onChangeHandler}
        />
        <input
          name="description"
          value={description}
          placeholder="Description"
          onChange={this.onChangeHandler}
        />
        <button onClick={this.onAddPostHandler}>Add Post</button>

        <h1>Posts</h1>
        <ul>
          <List lists={this.props.posts} />
        </ul>
      </Layout>
    );
  }
}

const mapStateToProps = ({ posts }) => posts;

export default connect(
  mapStateToProps,
  { addPost }
)(Default);
