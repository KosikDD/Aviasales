import React from 'react';

import logo from '../../assets/images/Logo.svg';

import HeaderStyles from './Header.module.scss';

const Header = () => {
  return (
    <header className={HeaderStyles.App_header}>
      <img className={HeaderStyles.App_header_logo} src={logo} alt="Logo" />
    </header>
  );
};

export default Header;
