import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import { useLocation } from 'react-router-dom';
// mui imports
import { ListItemIcon, ListItem, styled, ListItemText, Box } from '@mui/material';
import { useSelector } from 'react-redux';
// custom imports
import NavItem from '../NavItem/NavItem';

// plugins
import { IconChevronDown } from '@tabler/icons';

// FC Component For Dropdown Menu
const NavCollapse = ({ menu, level, pathWithoutLastPart, pathDirect, hideMenu }) => {
  const Icon = menu.icon;
  const theme = useTheme();
  const { pathname } = useLocation();
  //const location = pathname.includes(menu.href) ? pathname.substring(0, pathname.indexOf('/')) : '';
  //console.log(location);
  const [open, setOpen] = React.useState(false);
  const customizer = useSelector((state) => state.customizer);
  const menuIcon =
    level > 1 ? <Icon stroke={1.5} size="1rem" /> : <Icon stroke={1.5} size="1.1rem" />;

  const handleOpen = () => {
    setOpen(true);
  };
  React.useEffect(() => {
    setOpen(false);
    menu.children.forEach((item) => {
      if (item.href === pathname) {
        setOpen(true);
      }
    });
  }, [pathname, menu.children]);

  const ListItemStyled = styled(ListItem)(({ theme }) => ({
    position: 'relative',

    display: 'flex',
    alignItems: 'center',

    padding: '10px 14px',

    marginBottom: 6,

    borderRadius: 14,

    cursor: 'pointer',

    transition: 'all .28s ease',

    color:
      open || pathname.includes(menu.href)
        ? theme.palette.primary.main
        : theme.palette.text.primary,

    background:
      open || pathname.includes(menu.href) ? theme.palette.action.selected : 'transparent',

    border: `1px solid ${
      open || pathname.includes(menu.href) ? theme.palette.primary.light : 'transparent'
    }`,

    '&:hover': {
      background: theme.palette.action.hover,

      transform: 'translateX(5px)',

      boxShadow: '0 8px 24px rgba(0,0,0,.08)',
    },

    '&:hover > .SubNav': {
      opacity: 1,
      visibility: 'visible',
      transform: 'translateY(0)',
    },
  }));

  const ListSubMenu = styled(Box, {
    shouldForwardProp: (prop) => prop !== 'level',
  })(({ theme, level }) => ({
    position: 'absolute',

    top: level > 1 ? 0 : 58,

    left: level > 1 ? 250 : 0,

    opacity: 0,
    visibility: 'hidden',

    transform: 'translateX(10px)',

    minWidth: 260,

    padding: 12,

    borderRadius: 18,

    background: theme.palette.background.paper,

    transition: '.25s',
  }));

  // If Menu has Children
  const submenus = menu.children?.map((item) => {
    if (item.children) {
      return (
        <NavCollapse
          key={item.id}
          menu={item}
          level={level + 1}
          pathWithoutLastPart={pathWithoutLastPart}
          pathDirect={pathDirect}
          hideMenu={hideMenu}
        />
      );
    } else {
      return (
        <NavItem
          key={item.id}
          item={item}
          onClick={handleOpen}
          level={level + 1}
          pathDirect={pathDirect}
          hideMenu={hideMenu}
        />
      );
    }
  });

  return (
    <React.Fragment key={menu.id}>
      <ListItemStyled
        button
        component="li"
        selected={pathWithoutLastPart === menu.href}
        className={open ? 'selected' : ''}
      >
        <ListItemIcon
          sx={{
            minWidth: 42,

            color: 'inherit',

            transition: '.3s',

            '& svg': {
              fontSize: 22,
            },
          }}
        >
          {menuIcon}
        </ListItemIcon>
        <ListItemText
          primary={menu.title}
          sx={{
            '& .MuiTypography-root': {
              fontWeight: 600,
              fontSize: 14,
              letterSpacing: 0.2,
            },
          }}
        />
        <ListSubMenu component={'ul'} className="SubNav">
          {submenus}
        </ListSubMenu>
      </ListItemStyled>
    </React.Fragment>
  );
};

NavCollapse.propTypes = {
  menu: PropTypes.object,
  level: PropTypes.number,
  pathDirect: PropTypes.any,
  pathWithoutLastPart: PropTypes.any,
  hideMenu: PropTypes.any,
};

export default NavCollapse;
