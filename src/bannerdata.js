import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import wedo from './wedo.png';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import att from './att.png';
import pie from './pie.png';
import ern from './ern.png';
import { Slide } from '@material-ui/core';
import { Table } from 'reactstrap';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

export class bannerdata extends React.Component {

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
  handleOpen1 = () => {
    this.setState({ open1: true });
  }
  handleOpen2 = () => {
    this.setState({ open2: true });
  }
  

  handleClose = () => {
    this.setState({ open: false });
    this.setState({ open1: false });
    this.setState({ open2: false });
    
  }
  
    render(){

    return (
      <div style={{textAlign: 'center'}}>
      <div> 
      <Grid container spacing={24}>
      <Grid item xs={4}>
                    </Grid>
            <Grid item xs={4}>
        <Typography  variant="h5" align="center">
             
            </Typography>
            </Grid>
           <Grid item xs={4}>
                   </Grid>
   </Grid>
   <br/>
      <Card style={{ padding: 10, margin: "auto", maxWidth: 1500 }}>
        <CardContent>
      <Grid container spacing={24} height={'300px'}>
        <Grid item xs={3}>
       <img src={wedo} height={'300px'} width={'320px'} borderRadius={"50%"} overflow={"hidden"} alt={' '} />
  </Grid>
  <Grid item xs={1}>
  </Grid>
  <Grid item xs={8} width={'100px'}>
  <Typography  variant="h8" align="left">
              
              <br/>
              Custom Majors Team work on Customization of Payrolls for Major Accounts Clients. 
We understand every business can have specific and special needs for Payroll Customization. We work with Regional Teams, Service Representations, Implementation Specialists to understand the requirements and provide Customized Payrolls. We do customization to:
<br/>
1.  Payroll Register to Sort the register by multiple levels 
<br/>
2.  Pay Statements to bring additional details on the standard Pay Check
<br/>
3.  Payroll Calculations suiting the Business Needs
<br/>
<br/>
<br/>
</Typography>
<Typography align='center' variant='h8'>
<b>Click below Links to view Customised Samples</b>

            </Typography>
            <br/>
            
            
            <Grid container spacing={24}>
              <Grid item xs={4}>
              
            <Table dark>
        <thead>
          <tr>
            <th>CHECKS</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><Button style={{ marginRight: 50 }} onClick={this.handleOpen} backgroundColor={'#008CBA'}>Attendance_Dailywise</Button></td>
          </tr>
          <tr>
            <td><Button style={{ marginRight: 50 }} onClick={this.handleOpen1} backgroundColor={'#008CBA'}>Piece_WorkDetails_img</Button></td>
          </tr>
          <tr>
            <td><Button style={{ marginRight: 50 }} onClick={this.handleOpen2} backgroundColor={'#008CBA'}> Earnings_Sitewise_img</Button></td>
          </tr>
          
          
         
        </tbody>
      </Table>
  </Grid>
  <Grid item xs={4}>
  <Table dark>
        <thead>
          <tr>
            <th>REGISTER</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><Button style={{ marginRight: 50 }} onClick={this.handleOpen} backgroundColor={'#008CBA'}>Attendance_Dailywise</Button></td>
          </tr>
          <tr>
            <td><Button style={{ marginRight: 50 }} onClick={this.handleOpen} backgroundColor={'#008CBA'}>Piece_WorkDetails_img</Button></td>
          </tr>
          <tr>
            <td><Button style={{ marginRight: 50 }} onClick={this.handleOpen} backgroundColor={'#008CBA'}> Earnings_Sitewise_img</Button></td>
          </tr>
          
          
         
        </tbody>
      </Table>
              
  </Grid>
  <Grid item xs={4}>
  <Table dark>
        <thead>
          <tr>
            <th>NET</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><Button style={{ marginRight: 50 }} onClick={this.handleOpen} backgroundColor={'#008CBA'}>Attendance_Dailywise</Button></td>
          </tr>
          <tr>
            <td><Button style={{ marginRight: 50 }} onClick={this.handleOpen} backgroundColor={'#008CBA'}>Piece_WorkDetails_img</Button></td>
          </tr>
          <tr>
            <td><Button style={{ marginRight: 50 }} onClick={this.handleOpen} backgroundColor={'#008CBA'}> Earnings_Sitewise_img</Button></td>
          </tr>
          
          
         
        </tbody>
      </Table>
             
  </Grid>

  </Grid>
     
  
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
                            
                            <td><img src={att} height={'400px'} width={'900px'} borderRadius={"50%"} overflow={"hidden"} alt={' '} /></td>
                            
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
                <Dialog
                  open={this.state.open1}
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
                    {"Piece WorkDetails check"}
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                      <div>
                        <table>
                          <row width="1000px" />
                          <col width="1000px" />
                          <tr>
                            
                            <td><img src={pie} height={'400px'} width={'900px'} borderRadius={"50%"} overflow={"hidden"} alt={' '} /></td>
                            
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
                <Dialog
                  open={this.state.open2}
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
                    {"Earnings Sitewise check"}
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                      <div>
                        <table>
                          <row width="1000px" />
                          <col width="1000px" />
                          <tr>
                            
                            <td><img src={ern} height={'400px'} width={'900px'} borderRadius={"50%"} overflow={"hidden"} alt={' '} /></td>
                            
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
                </Grid>
                </Grid>
                </CardContent>
                </Card>
    </div>
    
    </div>
);
}
}
    
bannerdata.propTypes = {
  classes: PropTypes.object.isRequired,
};
