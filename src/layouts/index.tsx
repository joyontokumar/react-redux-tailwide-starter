import PropTypes from 'prop-types';
import React from 'react';
import Footer from '../layouts/footer/index';
import Header from '../layouts/header/index';
const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <div>
        <Header />
        {children}
        <Footer />
      </div>
    </React.Fragment>
  );
};
Layout.propTypes = {
  children: PropTypes.element,
};
export default Layout;
