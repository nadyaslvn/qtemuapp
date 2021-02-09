import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Redirect } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginLeft: '80px',
    marginRight: '80px',
    marginTop: '100px',
    textAlign: 'left',
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    display: 'flex',
    paddingTop: '-10px'
  },
  label: {
    float:'left'
  },
  meetup: {
    marginTop: '-20px',
    marginLeft: '30px',
    marginRight: '30px',
    padding: theme.spacing(2),
    color: theme.palette.text.secondary
  },
  homeLabel: {
    float:'left',
    display:'flex'
  },
  homeDesc: {
    float:'right',
    display:'flex'
  },
  highlight: {
    color: '#aca7a7',
    marginTop: '-10px'
  }
}));

export default function FirstGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <div className="row">
              <img src='https://pbs.twimg.com/profile_images/1303645505465974785/BAedfmOT.jpg' style={{height: '135px'}} alt="" />
            </div>
            <div className="row" style={{marginLeft: '20px'}}>
              <h4 style={{marginTop: '-10px', marginBottom: '-10px'}}>Hackativ8 Meetup</h4>
              <div>
                <p style={{marginBottom: '-15px'}}>Location&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;Jakarta</p>
                <p style={{marginBottom: '-15px'}}>Members&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;1,078</p>
                <p>Organizers&ensp;&ensp;&ensp;&ensp;&ensp;Ardhy Wiranata</p>
              </div>
              <Button variant="contained" color="primary" onClick={() => {
                  <Redirect
                    to={{
                      pathname: '/joinus',
                      statue: { name: 'udin' }  
                    }}
                  />
                }}>
                Join Us
              </Button>
            </div>
          </Paper>
        </Grid>
      </Grid>

      <h3 className={classes.label}>Next Meetup</h3>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper className={classes.meetup}>
            <h4>Awesome meetup and event</h4>
            <p className={classes.highlight}>25 January 2019</p>
            <p>
              Hello, JavaScript & Node.js Ninjas!<br />
              Get ready for out montly meetup JakartaJS! This will be our fifth meetup of 2018!<br />
              This meetup format will contain some short stories and technical talks.<br />
              If you have a short announcement you'd like to share with the audience, you may do so during open mic announcements.
            </p>
            <p>
              Remember to bring a photo ID to get through building security.
            </p>
            <p>
              *****
            </p>
            <p>
              See you there!
            </p>
            <p>
              Best, Hengki, Giovanni, Sofian, Riza, Agung The JakartaJS Organizers
            </p>
          </Paper>
        </Grid>
      </Grid>

      <h3 className={classes.label}>About Meetup</h3>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper className={classes.meetup} elevation={0}>
            <p>Come and meet other developers interested in the JavaScript and it's library in the Greater Jakarta area.</p>
            Twitter: @JakartaJS and we use the hashtag #jakartajs
          </Paper>
        </Grid>
      </Grid>

      <h3 className={classes.label}>Members</h3>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <div className="row">
              <img src={logo} className="App-logo" alt="logo" />
            </div>
            <div className="row">
              <h4>Organizer</h4>
              <b><p>Adhy Wiranata &ensp; 4 others.</p></b>
            </div>
          </Paper>
        </Grid>
      </Grid>

      <h3 className={classes.label}>Past Meetups</h3>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Paper className={classes.meetup}>
            <b>
              27 November 2017
              <hr />
              #39 JakartaJS April Meetup with kumparan
            </b>
            <div>
              <p><b>139</b> went</p>
            </div>
            <Button variant="contained" color="primary">
              View
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.meetup}>
            <b>
              27 Oktober 2017
              <hr />
              #38 JakartaJS April Meetup with BliBli
            </b>
            <div>
              <p><b>113</b> went</p>
            </div>
            <Button variant="contained" color="primary">
              View
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.meetup}>
            <b>
              27 September 2017
              <hr />
              #37 JakartaJS April Meetup with Hacktiv8
            </b>
            <div>
              <p><b>110</b> went</p>
            </div>
            <Button variant="contained" color="primary">
              View
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}