/** @jsxImportSource @emotion/react */
import Dash, { DashType } from './Dash/Dash';
import Horizontal, { HorizontalType } from './Horizontal/Horizontal';
import Vertical, { VerticalType } from './Vertical/Vertical';

const Divider: DashType & VerticalType & HorizontalType = () => {
  return <> </>;
};

Divider.Dash = Dash;
Divider.Vertical = Vertical;
Divider.Horizontal = Horizontal;
export default Divider;
