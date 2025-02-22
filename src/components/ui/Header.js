import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Typography } from '@material-ui/core';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 12 : 0,
  });
}

export default function Header(props) {
  return (
    <ElevationScroll>
      <AppBar position='fixed' color='secondary'>
        <Toolbar>
          <Typography variant='h3'>Arc Development</Typography>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
}
