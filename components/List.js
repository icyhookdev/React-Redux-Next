export default ({ lists }) => {
  return lists.map(list => (
    <li key={list.id}>
      <h2>{list.title}</h2>
      <p>{list.description}</p>
    </li>
  ));
};
