import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CMRF from './CMRF.png';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
        root: {
        flexGrow: 1,
      },
      paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },
      });
      
export class workFlow extends React.Component {
    render(){
            return <Card style={{height: '450px', width: '1050px', alignItems: 'center', marginLeft: 'auto', marginRight: 'auto'}}>
                    <CardContent>
                        <div>
                                <img src={CMRF} alt=' ' height={400} width={1000} />       
                        </div>
                    </CardContent>
                    </Card>
            }
        }

workFlow.propTypes = {
      classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(workFlow);