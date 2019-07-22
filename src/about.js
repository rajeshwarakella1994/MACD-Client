import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import RAJ from './RAJ.jpg';
import john from './john.jpg';
import Lori from './lori.png';
import Ram from './Ram.jpg';
import sireesha from './sireesha.jpg';
import vari from './Vari.jpg';
import mahesh from './mahesh.jpg';
import chandana from './chandana.jpg';
import Flippy, { FrontSide, BackSide } from 'react-flippy';

export class about extends React.Component {
    render(){

    return (
      <div style={{textAlign: 'center'}}>
      <div> 
      <Grid container spacing={24}>
      <Grid item xs={4}>
                    </Grid>
            <Grid item xs={4}>
        <Typography  variant="h5" align="center">
              <b>     Leadership Team</b>
             
            </Typography>
            
            </Grid>
            <Grid item xs={4}>
                   </Grid>
   </Grid>
   <br/>
      

      <Grid container spacing={24}>
      <Grid item xs={2}>
                   </Grid>
        <Grid item xs={3}>
        <Flippy
    flipOnHover={true} // default false
    flipOnClick={false} // default false
    flipDirection="horizontal" // horizontal or vertical
    ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
    // if you pass isFlipped prop component will be controlled component.
    // and other props, which will go to div
    // style={{ width: '200px', height: '470px'}} /// these are optional style, it is not necessary
  >
    <FrontSide
      style={{backgroundColor: '#FFFFFF', width: '200px', height: '300px' }}
    >
    <img src={john} height={'175px'} width={'170px'} borderRadius={"50%"} overflow={"hidden"} alt={' '} />
           <Typography  variant="h8" align="center">
              <b>John Piazza</b>
            </Typography>
            <Typography  variant="h8" align="center">
            VP-Product Development
            </Typography>
    </FrontSide>
    <BackSide
      style={{ backgroundColor: '#FFFFFF',width: '200px', height: '370px',overflow: 'hidden'}}>
      <Typography  fontSize='14' align="center">
              <b>John Piazza</b>
            </Typography>
            <Typography fontSize='14' align="center">
              <b>VP-Product Development</b>
            </Typography><br/>
            <Typography fontSize='10' align="center">
            AutoPay Development Leader leading awesome teams of very talented people both in the US and India to ensure the AutoPay system remains up-to-date, compliant, and resilient. Areas of responsibility include the Edit, Net/Calc, Statutory, PTCS, Custom Majors, EMP Utilities, and BI Teams.
    </Typography>
    </BackSide>
  </Flippy>
  </Grid>
  <Grid item xs={3}>
        <Flippy
    flipOnHover={true} // default false
    flipOnClick={false} // default false
    flipDirection="horizontal" // horizontal or vertical
    ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
    // if you pass isFlipped prop component will be controlled component.
    // and other props, which will go to div
    // style={{ width: '200px', height: '470px'}} /// these are optional style, it is not necessary
  >
    <FrontSide
      style={{backgroundColor: '#FFFFFF', width: '200px', height: '300px' }}
    >
    <img src={Lori} height={'175px'} width={'170px'} borderRadius={"50%"} overflow={"hidden"} alt={' '} />
           <Typography  variant="h8" align="center">
              <b>Lori Colelli</b>
            </Typography>
            <Typography  variant="h8" align="center">
            Sr. Director
            </Typography>
    </FrontSide>
    <BackSide
      style={{ backgroundColor: '#FFFFFF',width: '200px', height: '370px',overflow: 'hidden'}}>
      <Typography fontSize='14' align="center">
              <b>Lori Colelli</b>
            </Typography>
            <Typography fontSize='14' align="center">
              <b>Sr. Director</b>
            </Typography>
            <br/>
            <Typography fontSize='10' align="center">
            Product Development leader in Shared Products empowering associates who provide development and support services for Audits, Billing, Business Intelligence, Client Customization, Payroll and Statutory Rules.   Team members are across Canada, India and the United States.  
            </Typography>
    </BackSide>
  </Flippy>
  </Grid>
  <Grid item xs={3}>
        <Flippy
    flipOnHover={true} // default false
    flipOnClick={false} // default false
    flipDirection="horizontal" // horizontal or vertical
    ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
    // if you pass isFlipped prop component will be controlled component.
    // and other props, which will go to div
    // style={{ width: '200px', height: '470px'}} /// these are optional style, it is not necessary
  >
    <FrontSide
      style={{backgroundColor: '#FFFFFF', width: '200px', height: '300px' }}
    >
    <img src={Ram} height={'170px'} width={'170px'} borderRadius={"50%"} overflow={"hidden"} alt={' '} />
           <Typography  variant="h8" align="center">
              <b>Ram Anugu</b>
            </Typography>
            <Typography  variant="h8" align="center">
            Director
            </Typography>
    </FrontSide>
    <BackSide
      style={{ backgroundColor: '#FFFFFF',width: '200px', height: '370px',overflow: 'hidden'}}>
      <Typography fontSize='14' align="center">
              <b>Ram Anugu</b>
            </Typography>
            <Typography fontSize='14' align="center">
              <b>Director</b>
            </Typography>
            <br/>
            <Typography fontSize='10' align="center">
            Autopay India Development Leader. Leading India teams and collaborating with US counterparts to ensure Autopay's High availability and Projects Delivery. Areas of responsibility include the Datapool, Keyfast, CCI, PTCS, Edit, Net/Calc, Statutory, Custom Majors, EMP Utilities, and BI Teams 
            </Typography>
    </BackSide>
  </Flippy>
  </Grid>
  <Grid item xs={1}>
                   </Grid>

  </Grid>
  <br/><br/>
  <br/><br/>
  <Grid container spacing={24}>
      <Grid item xs={4}>
                    </Grid>
            <Grid item xs={4}>
        <Typography  variant="h5" align="center">
              <b>Scrum Team</b>
             
            </Typography>
            
            </Grid>
            <Grid item xs={4}>
                   </Grid>
   </Grid>
   <br/>
      

      <Grid container spacing={24}>
      <Grid item xs={2}>
                   </Grid>
        <Grid item xs={3}>
        <Flippy
    flipOnHover={true} // default false
    flipOnClick={false} // default false
    flipDirection="horizontal" // horizontal or vertical
    ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
    // if you pass isFlipped prop component will be controlled component.
    // and other props, which will go to div
    // style={{ width: '200px', height: '470px'}} /// these are optional style, it is not necessary
  >
    <FrontSide
      style={{backgroundColor: '#FFFFFF', width: '200px', height: '300px' }}
    >
    <img src={sireesha} height={'175px'} width={'170px'} borderRadius={"50%"} overflow={"hidden"} alt={' '} />
           <Typography  variant="h8" align="center">
              <b>Sireesha S</b>
            </Typography>
            <Typography  variant="h8" align="center">
            Scrum Master
            </Typography>
    </FrontSide>
    <BackSide
      style={{ backgroundColor: '#FFFFFF',width: '200px', height: '370px',overflow: 'hidden'}}>
      <Typography  fontSize='14' align="center">
              <b>Sireesha S</b>
            </Typography>
            <Typography fontSize='14' align="center">
              <b>Scrum Master</b>
            </Typography><br/>
            <Typography fontSize='10' align="center">
            Scrum Master for Custom Majors Team, works with Sales, Service and Regional Teams to understand the requirements and work with the Development teams to fulfill the requirements. Also works on solutions where Technology enables and drives Business results for our clients.
    </Typography>
    </BackSide>
  </Flippy>
  </Grid>
  <Grid item xs={3}>
        <Flippy
    flipOnHover={true} // default false
    flipOnClick={false} // default false
    flipDirection="horizontal" // horizontal or vertical
    ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
    // if you pass isFlipped prop component will be controlled component.
    // and other props, which will go to div
    // style={{ width: '200px', height: '470px'}} /// these are optional style, it is not necessary
  >
    <FrontSide
      style={{backgroundColor: '#FFFFFF', width: '200px', height: '300px' }}
    >
    <img src={vari} height={'175px'} width={'170px'} borderRadius={"50%"} overflow={"hidden"} alt={' '} />
           <Typography  variant="h8" align="center">
              <b>Srinivas V</b>
            </Typography>
            <Typography  variant="h8" align="center">
            Sr. Developer
            </Typography>
    </FrontSide>
    <BackSide
      style={{ backgroundColor: '#FFFFFF',width: '200px', height: '370px',overflow: 'hidden'}}>
      <Typography fontSize='14' align="center">
              <b>Srinivas V</b>
            </Typography>
            <Typography fontSize='14' align="center">
              <b>Sr. Developer</b>
            </Typography>
            <br/>
            <Typography fontSize='10' align="center">
            As Developer for Custom Majors Team works on requirements gathering, key role in the design, deployments, testing and maintenance of Custom Majors. Plays a key role to help businesses to be more efficient and provide a better service.  
            </Typography>
    </BackSide>
  </Flippy>
  </Grid>
  <Grid item xs={3}>
        <Flippy
    flipOnHover={true} // default false
    flipOnClick={false} // default false
    flipDirection="horizontal" // horizontal or vertical
    ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
    // if you pass isFlipped prop component will be controlled component.
    // and other props, which will go to div
    // style={{ width: '200px', height: '470px'}} /// these are optional style, it is not necessary
  >
    <FrontSide
      style={{backgroundColor: '#FFFFFF', width: '200px', height: '300px' }}
    >
    <img src={chandana} height={'170px'} width={'170px'} borderRadius={"50%"} overflow={"hidden"} alt={' '} />
           <Typography  variant="h8" align="center">
              <b>Chandana P</b>
            </Typography>
            <Typography  variant="h8" align="center">
            Developer
            </Typography>
    </FrontSide>
    <BackSide
      style={{ backgroundColor: '#FFFFFF',width: '200px', height: '370px',overflow: 'hidden'}}>
      <Typography fontSize='14' align="center">
              <b>Chandana P</b>
            </Typography>
            <Typography fontSize='14' align="center">
              <b>Developer</b>
            </Typography>
            <br/>
            <Typography fontSize='10' align="center">
            Being a part of customs, collaborating with the Business to translate the client specific requirements into customized applications to meet their respective payroll needs. Working towards providing the insightful solutions that drive business success.
            </Typography>
    </BackSide>
  </Flippy>
  </Grid>
  <Grid item xs={1}>
                   </Grid>
                   
   </Grid>
   <br/><br/>
  <br/><br/>
   <Grid container spacing={24}>
      <Grid item xs={2}>
                   </Grid>
        <Grid item xs={3}>
        <Flippy
    flipOnHover={true} // default false
    flipOnClick={false} // default false
    flipDirection="horizontal" // horizontal or vertical
    ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
    // if you pass isFlipped prop component will be controlled component.
    // and other props, which will go to div
    // style={{ width: '200px', height: '470px'}} /// these are optional style, it is not necessary
  >
    <FrontSide
      style={{backgroundColor: '#FFFFFF', width: '200px', height: '300px' }}
    >
    <img src={RAJ} height={'175px'} width={'170px'} borderRadius={"50%"} overflow={"hidden"} alt={' '} />
           <Typography  variant="h8" align="center">
              <b>Rajeshwar A</b>
            </Typography>
            <Typography  variant="h8" align="center">
            Developer
            </Typography>
    </FrontSide>
    <BackSide
      style={{ backgroundColor: '#FFFFFF',width: '200px', height: '370px',overflow: 'hidden'}}>
      <Typography  fontSize='14' align="center">
              <b>Rajeshwar A</b>
            </Typography>
            <Typography fontSize='14' align="center">
              <b>Developer</b>
            </Typography><br/>
            <Typography fontSize='10' align="center">
            As Developer for Custom Majors Team works on requirements gathering, key role in the design, deployments, testing and maintenance of Custom Majors. Plays a key role to help businesses to be more efficient and provide a better service.
    </Typography>
    </BackSide>
  </Flippy>
  </Grid>
  <Grid item xs={3}>
        <Flippy
    flipOnHover={true} // default false
    flipOnClick={false} // default false
    flipDirection="horizontal" // horizontal or vertical
    ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
    // if you pass isFlipped prop component will be controlled component.
    // and other props, which will go to div
    // style={{ width: '200px', height: '470px'}} /// these are optional style, it is not necessary
  >
    <FrontSide
      style={{backgroundColor: '#FFFFFF', width: '200px', height: '300px' }}
    >
    <img src={mahesh} height={'175px'} width={'170px'} borderRadius={"50%"} overflow={"hidden"} alt={' '} />
           <Typography  variant="h8" align="center">
              <b>Mahesh G</b>
            </Typography>
            <Typography  variant="h8" align="center">
            Developer
            </Typography>
    </FrontSide>
    <BackSide
      style={{ backgroundColor: '#FFFFFF',width: '200px', height: '370px',overflow: 'hidden'}}>
      <Typography fontSize='14' align="center">
              <b>Mahesh G</b>
            </Typography>
            <Typography fontSize='14' align="center">
              <b>Developer</b>
            </Typography>
            <br/>
            <Typography fontSize='10' align="center">
            As Developer for Custom Majors Team works on requirements gathering, key role in the design, deployments, testing and maintenance of Custom Majors. Plays a key role to help businesses to be more efficient and provide a better service.
            </Typography>
    </BackSide>
  </Flippy>
  </Grid>
  <Grid item xs={3}>
       
  </Grid>
  <Grid item xs={1}>
                   </Grid>
                   
   </Grid>
   
    </div>
    
    </div>
 );
}
}
    
about.propTypes = {
  classes: PropTypes.object.isRequired,
};
