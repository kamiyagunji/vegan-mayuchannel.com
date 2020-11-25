import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import Drawer from '../drawer/drawer';
import { DrawerContext } from '../drawer/drawer-context';
import Menu from './menu';
import {
  MobileMenuWrapper,
  DrawerContentWrapper,
  DrawerHead,
  DrawerLogo,
  DrawerClose,
  HamburgerIcon,
} from './navbar.style';
import { FiX } from 'react-icons/fi';

type MobileMenuProps = {
  items: any;
  logo: string;
};

const MobileMenu: React.FunctionComponent<MobileMenuProps> = ({
  items,
  logo,
  ...props
}) => {
  const { state, dispatch }: any = useContext(DrawerContext);

  // Toggle drawer
  const toggleDrawer = () => {
    dispatch({
      type: 'TOGGLE',
    });
  };

  return (
    <MobileMenuWrapper {...props}>
      <Drawer
        width="285px"
        placement="left"
        drawerHandler={
          <HamburgerIcon>
            <span />
            <span />
            <span />
          </HamburgerIcon>
        }
        open={state.isOpen}
        toggleHandler={toggleDrawer}
      >
        <DrawerContentWrapper>
          <DrawerHead>
            <DrawerLogo>
              <NavLink to="/">
                <img src={logo} alt="logo" />
              </NavLink>
            </DrawerLogo>
            <DrawerClose onClick={toggleDrawer}>
              <FiX />
            </DrawerClose>
          </DrawerHead>
          <Menu items={items} className="mobile-menu" />
        </DrawerContentWrapper>
      </Drawer>
    </MobileMenuWrapper>
  );
};

export default MobileMenu;
