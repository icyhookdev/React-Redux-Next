import Link from 'next/link';

const linkStyle = {
  marginRight: 15
};

export default () => (
  <nav>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/posts">
      <a style={linkStyle}>Posts</a>
    </Link>
  </nav>
);
