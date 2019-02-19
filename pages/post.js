import { withRouter } from 'next/router';
import Layout from '../components/Layout';

const Content = ({ query }) => (
  <div>
    <h1>{query.title}</h1>
    <p>this is a blog post</p>
  </div>
);

export default withRouter(({ router }) => {
  console.log(router);
  return (
    <Layout>
      <Content {...router} />
    </Layout>
  );
});
