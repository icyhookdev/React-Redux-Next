import Header from './Header';

import { HeaderImg, BigTittle } from '../css/components';
const layoutStyle = {
  width: '100%'
};

export default props => (
  <div style={layoutStyle}>
    <HeaderImg>
      <Header />
      <BigTittle>
        Postify Where your post can be read around the world!
      </BigTittle>
    </HeaderImg>
    {props.children}
  </div>
);
