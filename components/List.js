import { Link } from '../routes';

import { SubTitle, FlexLi, LinkUX } from '../styles/baseLayout';

const formatTitle = title => {
  if (title.length > 19) {
    return `${title.slice(0, 19)}...`;
  }
  return title;
};

export default ({ lists }) => {
  return lists.map(list => (
    <FlexLi key={list.id}>
      <SubTitle align="left" color="#26eda1">
        {formatTitle(list.title)}
      </SubTitle>
      <Link route={`/post/${list.id}`}>
        <LinkUX>View</LinkUX>
      </Link>
    </FlexLi>
  ));
};
