import Header from './Header';

const layoutStyle = {
  width: '100%',
  marginTop: 30
};

export default props => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
  </div>
);
