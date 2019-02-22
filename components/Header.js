import Link from 'next/link';

const linkStyle = {
  marginRight: 15
};

export default () => (
  <nav>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/create">
      <a style={linkStyle}>Create Post</a>
    </Link>
  </nav>
);
