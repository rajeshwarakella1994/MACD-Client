import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import mission1 from './mission.jpg';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

export class mission extends React.Component {
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
      <Card style={{ padding: 10, margin: "auto", maxWidth: 1000 }}>
        <CardContent>
      <Grid container spacing={24} height={'300px'}>
        <Grid item xs={3}>
       <img src={mission1} height={'300px'} width={'320px'} borderRadius={"50%"} overflow={"hidden"} alt={' '} />
  </Grid>
  <Grid item xs={2}>
  </Grid>
  <Grid item xs={7} width={'100px'}>
  <Typography  variant="h8" align="center">
  <b>VISION</b>
<br/>
</Typography>
<Typography variant="h8" align="left">
  Our Vision is to Cater to Every Specific need of Every Business and Every Client with Complete Accuracy
  <br/> <br/><br/>
  <Typography  variant="h8" align="center">

  <b>MISSION</b><br/> 
  </Typography>
  <Typography  variant="h8" align="left">
  Our Mission is to bring Flexibility in Payroll Customization through our Domain Expertise Enabled with Technology
We are committed to serve every cliet with complete accuracy and On time so that it benefits their business.
We believe in providing a seamless experience to our associates who are facing Clients, so that they help our clients with best payroll solutions

  <br/>
  </Typography>

            </Typography>
  </Grid>
  </Grid>

    </CardContent>
    </Card>
    </div>
    
    </div>
 );
}
}
    
mission.propTypes = {
  classes: PropTypes.object.isRequired,
};
