import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Menuitems from '../sidebar/MenuItems';
import { Link, useLocation } from 'react-router-dom';
import { Menu, MenuItem } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import * as TablerIcons from '@tabler/icons';

export default function TabBar() {
  const location = useLocation();
  const menu = Menuitems;
  const [value, setValue] = React.useState(location.pathname);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openMenuIndex, setOpenMenuIndex] = React.useState(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleMenuOpen = (event, index) => {
    setAnchorEl(event.currentTarget);
    setOpenMenuIndex(index);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setOpenMenuIndex(null);
  };

  return (
    <>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="scrollable prevent tabs example"
        variant="scrollable"
        scrollButtons="auto"
      >
        {menu.map((tab, index) => {
          if (tab.children) {
            return (
              <React.Fragment key={tab.title}>
                <Tab
                  icon={<TablerIcons.IconMenu2 />}
                  sx={{ minHeight: '50px' }}
                  onClick={(event) => handleMenuOpen(event, index)}
                  value={tab.href} // Keep track of the tab value
                />
                <Menu anchorEl={anchorEl} open={openMenuIndex === index} onClose={handleMenuClose}>
                  {tab.children.map((child) => (
                    <MenuItem
                      component={Link}
                      to={child.href}
                      key={child.title}
                      onClick={() => {
                        handleChange(null, child.href);
                        handleMenuClose();
                      }}
                    >
                      {child.title}
                    </MenuItem>
                  ))}
                </Menu>
              </React.Fragment>
            );
          } else {
            return (
              <Tab
                icon={tab.icon} // Use the icon directly
                sx={{ minHeight: '50px' }}
                component={Link}
                to={tab.href}
                value={tab.href}
                key={tab.title}
              />
            );
          }
        })}
      </Tabs>
    </>
  );
}
