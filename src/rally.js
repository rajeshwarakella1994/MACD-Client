import React, { Component } from "react";
import axios from 'axios';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Divider, Card, CardContent } from "@material-ui/core";


export class rallyStats extends Component {
  state = {
    error: null,
    isLoaded: false,
    backlog: [],
    sprint: [],
    defects: [],
  };

  componentDidMount() {
    axios.get("https://rally1.rallydev.com/slm/webservice/v2.0/hierarchicalrequirement?query=((%20Project.ObjectID%20=%2034860283988%20)%20AND%20(ScheduleState%20=%20Backlog%20))&fetch=FormattedID,Name&pagesize=50"
      , { headers: { 'zsessionid': '_qXpijp0S96oQ0hLrP2KHjcJrw8xEKIrTULPKrRCsU', 'Content-Type': 'application/json' } }).then(
        result => {
          this.setState({
            isLoaded: true,
            backlog: result.data.QueryResult.Results
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );

    axios.get("https://rally1.rallydev.com/slm/webservice/v2.0/hierarchicalrequirement?query=((%20Project.ObjectID%20=%2034860283988%20)%20AND%20(Iteration.Name%20=%202019-6%20))&fetch=FormattedID,Name,Owner,ScheduleState&pagesize=50"
      , { headers: { 'zsessionid': '_qXpijp0S96oQ0hLrP2KHjcJrw8xEKIrTULPKrRCsU', 'Content-Type': 'application/json' } }).then(
        result => {
          this.setState({
            isLoaded: true,
            sprint: result.data.QueryResult.Results
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );

    axios.get("https://rally1.rallydev.com/slm/webservice/v2.0/defect?query=((%20Project.ObjectID%20=%2034860283988%20)%20AND%20(Iteration.Name%20=%202019-5%20))&fetch=FormattedID,Name,Owner,ScheduleState&pagesize=50"
      , { headers: { 'zsessionid': '_qXpijp0S96oQ0hLrP2KHjcJrw8xEKIrTULPKrRCsU', 'Content-Type': 'application/json' } }).then(
        result => {
          this.setState({
            isLoaded: true,
            defects: result.data.QueryResult.Results
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );

  }

  render() {
    const { error, isLoaded, backlog, sprint, defects } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {

      return (
        <Card style={{maxWidth: 700, margin: "auto"}}>
          <CardContent >
            <h3>Rally : Backlog </h3>
            <table className="table-styled">
            <tr>
              <th>User Story</th>
              <th>Name</th>
            </tr>
            {backlog.map(item => (
              <tr>
                  <td> {item.FormattedID} </td>
                  <td> {item.Name} </td>
                </tr>
            ))}
              </table>
            
            <h3>Rally : Current Sprint Log </h3>
            <table className="table-styled">
            <tr>
              <th>User Story</th>
              <th>Name</th>
            </tr>
            {sprint.map(item => (
                <tr>
                  <td> {item.FormattedID} </td>
                  <td> {item.Name} </td>
                </tr>
            ))}
            </table>


            <h3>Rally : Defects </h3>
            <table className="table-styled">
            <tr>
              <th>User Story</th>
              <th>Name</th>
            </tr>
            {defects.map(item => (
                <tr>
                  <td> {item.FormattedID} </td>
                  <td> {item.Name} </td>
                </tr>
              ))}
            </table>
            
            </CardContent>
        </Card>
      );
    }
  }
}