import React from 'react';
import { withRouter } from 'next/router';
import { connect } from 'react-redux';

import { getPost } from '../store/actions/posts';
import Layout from '../components/Layout';
import { MainTitle, TextBody } from '../styles/baseLayout';

class Post extends React.Component {
  componentDidMount() {
    const { router, getPost } = this.props;
    const id = router.query.id;
    getPost(id);
  }

  displayPostHandler = () => {
    const { post } = this.props;
    return (
      post && (
        <div>
          <MainTitle>{post.title}</MainTitle>
          <TextBody>{post.body}</TextBody>
        </div>
      )
    );
  };

  render() {
    return (
      <div>
        <Layout />
        {this.displayPostHandler()}
      </div>
    );
  }
}

const mapStateToProps = ({ posts }) => ({ post: posts.currentPost });

export default connect(
  mapStateToProps,
  { getPost }
)(withRouter(Post));
