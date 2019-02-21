import Link from 'next/link';

export default ({ lists }) => {
  return lists.map(list => (
    <li key={list.id}>
      <h2>{list.title}</h2>
      <Link as={`/post/${list.id}`} href={`/post?id=${list.id}`}>
        <a>View</a>
      </Link>
    </li>
  ));
};
