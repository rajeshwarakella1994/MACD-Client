import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import PropTypes from 'prop-types';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import AliceCarousel from 'react-alice-carousel';
import responsive from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import Banner1 from './Banner1.png';
import Banner2 from './Banner2.jpg';

const styles = theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  cardHeader: {
    backgroundColor: theme.palette.grey[200],
  },
});

const tiers = [
  {
    title: 'What We Do',
    description: [{name: 'Customize Payrolls', link: '/bannerdata'}, {name: 'Payroll Features Support', link: ''}, {name: 'Talent Development', link: '/bannerdata2'}],
  },
  {
    title: 'How We Do',
    description: [{name: 'Request Life Cycle', link: '/workflow'}, {name: 'Defect Life Cycle', link: '/workflow'}, {name: 'Patch / Release Calendar ', link: '/cal'}],
  },
  {
    title: 'Help Needed',
    description: [{name: 'Submit a New Request', link: '/submit'}, {name: 'Submit a Defect', link: 'http://dpopsweb/Main/CA/CreateRequestNoTabs.aspx?pcat=1319AC4', type: 'dynamic'}, {name: 'Track Your Request', link: '/rally'}],
  },
];

export class Home extends React.Component {

  render() {

    const { classes } = this.props;

    return (
      <div style={{ textAlign: "center"}}>
        <main className={classes.layout}>
        {/* <Link style={{ textDecoration: "none" }} to="/bannerdata"> */}
             <link></link>         
                   
          <AliceCarousel fadeOutAnimation={true} autoPlay={true} autoPlayInterval={3000} stopAutoPlayOnHover={true}
            infinite={true} buttonsDisabled={true}  responsive={responsive}> 
             <Link style={{ textDecoration: "none" }} to="/bannerdata">
            <img src={Banner1} alt={' '} width='1000' height='250' />
            </Link>
            <Link style={{ textDecoration: "none" }} to="/bannerdata2">
            <img src={Banner2} alt={' '} width='1000' height='250'/>
            </Link>
            {/* <Link style={{ textDecoration: "none" }} to="/home">
            <img src={Banner3} alt={' '} width='1000' height='250'/>
            </Link> */}
            
            </AliceCarousel>
            {/* </Link> */}
          <div style={{paddingRight: 140, paddingLeft: 140, margin: 'auto', align: 'center',marginTop: 25 }}>
            {/* End hero unit */}
            <Grid container spacing={40} alignItems="flex-end">
              {tiers.map(tier => (
                // Enterprise card is full width at sm breakpoint
                <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={4}>
                  
                  <Card className="hoverable">
                    <CardHeader
                      title={tier.title}
                      subheader={tier.subheader}
                      titleTypographyProps={{ align: 'center' }}
                      subheaderTypographyProps={{ align: 'center' }}
                      className={classes.cardHeader}
                    />

                    <CardContent>                    
                    {tier.description.map((item,i) => {
                        switch (item.type) {
                          default:
                            return <Link to={item.link} style={{textDecoration: "none"}}>
                             <Typography variant="subtitle1" align="center" key={i}>
                                 {item.name}
                             </Typography>
                            </Link>
                          case 'dynamic':
                            return <a key={i} href={item.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                            <Typography variant="subtitle1" align="center" key={i}>
                                 {item.name}
                             </Typography>
                            </a>
                      }
                    })}
                    </CardContent>
                    </Card>
                </Grid>
              ))}
            </Grid>
          </div>
        </main>

      </div>
    )
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);