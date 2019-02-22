import Link from 'next/link';
import { Card } from '../css/components';

const formatTitle = title => {
  if (title.length > 19) {
    return `${title.slice(0, 19)}...`;
  }
  return title;
};

export default ({ lists }) => {
  return lists.map(list => (
    <Card key={list.id}>
      <li>
        <h2>{formatTitle(list.title)}</h2>
        <Link as={`/post/${list.id}`} href={`/post?id=${list.id}`}>
          <a>View</a>
        </Link>
      </li>
    </Card>
  ));
};
