import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Logo from './logo.png';
import { request } from './custom-request';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Home from './home';
import { Album } from './Album';
import { documentation } from './documentation';
import { faq } from './faq';
import { about } from './about';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from 'material-ui-pickers';

const styles = theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  appBar: {
    position: 'relative',
  },
  toolbarTitle: {
    flex: 1,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
      width: 900,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  cardHeader: {
    backgroundColor: theme.palette.grey[200],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing.unit * 2,
  },
  cardActions: {
    [theme.breakpoints.up('sm')]: {
      paddingBottom: theme.spacing.unit * 2,
    },
  },
  footer: {
    marginTop: theme.spacing.unit * 8,
    borderTop: `1px solid ${theme.palette.divider}`,
    padding: `${theme.spacing.unit * 6}px 0`,
  },
});

const tiers = [
  {
    title: 'Free',
    price: '0',
    description: ['10 users included', '2 GB of storage', 'Help center access', 'Email support'],
    buttonText: 'Sign up for free',
    buttonVariant: 'outlined',
  },
  {
    title: 'Pro',
    subheader: 'Most popular',
    price: '15',
    description: [
      '20 users included',
      '10 GB of storage',
      'Help center access',
      'Priority email support',
    ],
    buttonText: 'Get started',
    buttonVariant: 'contained',
  },
  {
    title: 'Enterprise',
    price: '30',
    description: [
      '50 users included',
      '30 GB of storage',
      'Help center access',
      'Phone & email support',
    ],
    buttonText: 'Contact us',
    buttonVariant: 'outlined',
  },
];
const footers = [
  {
    title: 'Company',
    description: ['Team', 'History', 'Contact us', 'Locations'],
  },
  {
    title: 'Features',
    description: ['Cool stuff', 'Random feature', 'Team feature', 'Developer stuff', 'Another one'],
  },
  {
    title: 'Resources',
    description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
  },
  {
    title: 'Legal',
    description: ['Privacy policy', 'Terms of use'],
  },
];

class Pricing extends React.Component {
  componentDidMount() {
    fetch("http://localhost:8888/kishore").then(d=>d.text()).then(d=>console.log(d));
  }
  render(){
  const { classes } = this.props;
  
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <React.Fragment>
      <BrowserRouter>
      <div className={classes.root}>
      <CssBaseline/>
      <AppBar position="static" color="default" className={classes.appBar}>
        <Toolbar>
          <img src={Logo} style={{ marginRight: 20 }} height={30} width={70} />
          <Typography variant="h5" color="inherit" noWrap className={classes.toolbarTitle}>
            Major Accounts Custom Development
          </Typography>
          
          <Link style={{ textDecoration: "none" }} to="/submit">
              <Button style={{marginRight: 10}}>Request a custom</Button>
                </Link>
          <Button style={{marginRight: 10}}>Enterprise</Button>
          <Button style={{marginRight: 10}}>Support</Button>
          <Button color="primary" variant="outlined">
            Login
          </Button>
        </Toolbar>
      </AppBar>
      <main className={classes.layout}>

        <main className={classes.content} style={{ marginTop: 60 }}>
                <Switch>
                  <Route path="/home" component={Home} />
                  <Route path="/submit" component={request} />
                  <Route path="/documentation" component={documentation} />
                  <Route path="/faq" component={faq} />
                  <Route path="/about" component={about} />
                  <Route path="/album" component={Album} />
                  <Route component={Home} />
                </Switch>
          </main>

      </main>

      {/* Footer */}
      <footer className={classNames(classes.footer, classes.layout)}>
        <Grid container spacing={32} justify="space-evenly">
          {footers.map(footer => (
            <Grid item xs key={footer.title}>
              <Typography variant="h6" color="textPrimary" gutterBottom>
                {footer.title}
              </Typography>
              {footer.description.map(item => (
                <Typography key={item} variant="subtitle1" color="textSecondary">
                  {item}
                </Typography>
              ))}
            </Grid>
          ))}
        </Grid>
      </footer>
      {/* End footer */}
      </div>
      </BrowserRouter>
    </React.Fragment>
    </MuiPickersUtilsProvider>
  );
}
}

Pricing.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Pricing);