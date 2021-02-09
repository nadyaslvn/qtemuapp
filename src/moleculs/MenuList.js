import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import FirstGrid from '../moleculs/FirstGrid';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';

import Explore from '../Home/Explore/index';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  bar: {
    display: 'table-row', 
    width:'100%', 
    top: '0'
  },
  typo: {
    marginLeft:'20px',
    marginRight:'20px',
    overflow:'hidden', 
    float:'left'
  },
  typo2: {
    marginLeft: "950px"
  },
  tabs: {
    overflow:'hidden', 
    float:'left'
  }
}));

export default function MenuList() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // render() {
    return (
      <div className={classes.root}>
        
        <AppBar position="absolute" className={classes.bar}>
          <Typography className={classes.typo}>
            <h3>QTemuApp</h3>
          </Typography>
          <Tabs value={value} onChange={handleChange} aria-label="simple tabs example"
            className={classes.tabs}>\
            <Tab label="Create Meetup" />
            <Tab label="Explore" />
            <Typography className={classes.typo2}>
              <h3>Login</h3>
            </Typography>
          </Tabs>
        </AppBar>
        <FirstGrid />
      </div>
    )
  // }
}

// export default MenuList;