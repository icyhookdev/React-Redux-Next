import { withRouter } from 'next/router';
import React, { Component } from 'react';

import Layout from '../components/Layout';
import { Title, Paragraph } from '../css/components';
import global from '../css/style.scss';
import { connect } from 'react-redux';
import { getPost } from '../store/actions/posts';

const setTextColor = id => {
  const n = (+id * 3) / 2;

  if (n <= 4) {
    return 'rebeccapurple';
  }

  if (n > 4 && n <= 6) {
    return 'palevioletred';
  }

  if (n > id) {
    return '#FBAB7E';
  }
};

const Content = ({ id, body, title }) => {
  return (
    <div className={global.container}>
      <Title TextColor={setTextColor(id)}>{title}</Title>

      <Paragraph TextColor={setTextColor(id)}>{body}</Paragraph>
    </div>
  );
};

class Post extends Component {
  componentDidMount() {
    const id = this.props.router.query.id;
    this.props.getPost(id);
  }

  render() {
    const { currentPost } = this.props.posts;
    return (
      <Layout>
        <Content {...currentPost} />
      </Layout>
    );
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { getPost }
)(withRouter(Post));
