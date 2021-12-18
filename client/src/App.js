import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import useStyles from './styles.js';
import pic from './images/1.jpg';

const App = () => {

  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">PONDY TOURISTS PLACES</Typography>
        <img className={classes.image} src={pic} alt="icon" height="100" width="100" />
      </AppBar>
    </Container>
  );
};

okokok
export default App;
