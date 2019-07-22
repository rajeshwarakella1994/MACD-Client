import React from 'react';
import { Table } from 'reactstrap';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import att from './att.png';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { Slide } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

Table.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  size: PropTypes.string,
  bordered: PropTypes.bool,
  borderless: PropTypes.bool,
  striped: PropTypes.bool,
  dark: PropTypes.bool,
  hover: PropTypes.bool,
  responsive: PropTypes.bool,
  // Custom ref handler that will be assigned to the "ref" of the inner <table> element
  innerRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.object
  ])
  };
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
        width: 1200,
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
      marginLeft: 'auto',
      marginRight: 'auto'
    },
  
    root: {
      width: '100%',
    },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing.unit,
        width: 'auto',
      },
    },
    searchIcon: {
      width: theme.spacing.unit * 9,
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
      width: '100%',
    },
    inputInput: {
      paddingTop: theme.spacing.unit,
      paddingRight: theme.spacing.unit,
      paddingBottom: theme.spacing.unit,
      paddingLeft: theme.spacing.unit * 10,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: 120,
        '&:focus': {
          width: 200,
        },
      },
    },
  
  });
  
  function Transition(props) {
    return <Slide direction="up" {...props} />;
  }
  

  export class sample extends React.Component {
    state = {
      open: false,
      inboxOpen: false
    }
  
    componentDidMount() {
      // fetch("https://rally1.rallydev.com/slm/webservice/v2.0/hierarchicalrequirement?query=((%20Project.ObjectID%20=%2034860283988%20)%20AND%20(ScheduleState%20=%20Backlog%20))&fetch=FormattedID,Name&pagesize=1000").then(d=>d.json()).then(console.log).catch(console.error)
      fetch("http://localhost:8888/kishore").then(d => d.text()).then(d => console.log(d));
    }
  
    handleOpen = () => {
      this.setState({ open: true });
    }
  
    handleClose = () => {
      this.setState({ open: false });
    }
  
    render(){

    return (
      <div style={{textAlign: 'center'}}>
      <div> 
      <Grid container spacing={24}>
      <Grid item xs={4}>
                    </Grid>
            <Grid item xs={4}>
        <Typography  variant="h8" align="center">
              <b>CUSTOMISED SAMPLES</b>
             
            </Typography>
            
            </Grid>
            <Grid item xs={4}>
                   </Grid>
   </Grid>
   <br/>
      <Card style={{ padding: 10, margin: "auto", maxWidth: 950 }}>
        <CardContent>

      <Table dark>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          
          <tr>
            <th scope="row">2</th>
            <td align='center'><Button style={{ marginRight: 50 }} onClick={this.handleOpen}>Sample1</Button></td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
            </CardContent>
            </Card>
            <Dialog
                  open={this.state.open}
                  TransitionComponent={Transition}
                  keepMounted
                  onClose={this.handleClose}
                  aria-labelledby="alert-dialog-slide-title"
                  aria-describedby="alert-dialog-slide-description"
                  height='400px' width='1000px'
                  fullWidth={true}
                  fullHeight={true}
                  maxWidth = {'md'}
                >
                  <DialogTitle id="alert-dialog-slide-title" >
                    {"Attendance Sample check"}
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                      <div>
                        <table>
                          <row width="1000px" />
                          <col width="1000px" />
                          <tr>
                            
                            <td><img src={att} height={'400px'} width={'1000px'} borderRadius={"50%"} overflow={"hidden"} alt={' '} /></td>
                            
                          </tr>
                                       
                        </table>
                      </div>
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={this.handleClose} color="primary">
                      Close
            </Button>
                  </DialogActions>
                </Dialog>
           
    </div>
    
    </div>
 );
}
}
    
sample.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(sample);