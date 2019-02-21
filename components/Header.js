import Link from 'next/link';

const linkStyle = {
  marginRight: 15
};

export default () => (
  <nav>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/post">
      <a style={linkStyle}>Posts</a>
    </Link>
  </nav>
);
