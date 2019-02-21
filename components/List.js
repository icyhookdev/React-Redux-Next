import Link from 'next/link';
import { Card } from '../css/components';

export default ({ lists }) => {
  return lists.map(list => (
    <Card key={list.id}>
      <h2>{list.title}</h2>
      <Link as={`/post/${list.id}`} href={`/post?id=${list.id}`}>
        <a>View</a>
      </Link>
    </Card>
  ));
};
