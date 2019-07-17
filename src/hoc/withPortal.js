import { createPortal } from 'react-dom';

const withPortal = domElement => component => {
  return createPortal(component, domElement);
};
export default withPortal;
