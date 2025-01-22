import React, { FC } from 'react';
import { HeaderWrapper } from './Header.styled';
import { Link } from 'react-router-dom';

interface HeaderProps {}

const Header: FC<HeaderProps> = () => (
 <HeaderWrapper data-testid="Header">
    <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
 </HeaderWrapper>
);

export default Header;
