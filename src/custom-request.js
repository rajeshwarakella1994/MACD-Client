import React from 'react';
import Typography from '@material-ui/core/Typography';
import { TextField, Divider, Select, MenuItem } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { DatePicker } from 'material-ui-pickers';
import { format } from 'date-fns';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

export class request extends React.Component {
    state = {
        // The first commit of Material-UI
        selectedDate: new Date(),
        option: "   ",
        values: { date: new Date() }
    };

    handleDateChange = name => date => {
        this.setState({
            values: {
                ...this.state.values,
                [name]: date
            }
        });
    };

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };
    submit = (e) => {
        e.preventDefault();
        const json = {
            ...this.state.values
        };
        let formData = new FormData();
        for (let key in json) {
            formData.append(key, json[key]);
        }
        // Add files to formData
        const files = this.filesRef.files;
        for (let i = 0; i < files.length; i++) {
            formData.append("files", files[i]);
        }
        // this.filesRef.files.forEach(file=>formData("files", file));
        // formData.append("files", this.filesRef.files);
        // formData.
        fetch("http://localhost:8899/apirequest", {
            method: "POST",
            body: formData,
            headers: {
                // 'Content-Type': 'multipart/form-data'
            },
        }).then(d => d.text()).then(d => console.log("RESPONSE : ", d))
    };
    onChange = (name) => e => {
        this.setState({
            values: {
                ...this.state.values,
                [name]: e.target.value
            }
        })
    }
    render() {

        const requestor = [
            { label: "Requestor Name", name: "requestor_name" },
            { label: "Requestor Dept", name: "requestor_dept" },
            { label: "Requestor Email Id", name: "requestor_email" },
            { label: "Requestor Phone #", name: "requestor_phone" },
        ]

        const client = [
            { label: "Client Name", name: "company_name" },
            { label: "Company Code(s) List for this Client", name: "company_codes1" },
            { label: "Company Code(s) needing this change", name: "company_codes2" },
            { label: "Processing Region(s)", name: "processing_regions" },
        ]

        const payroll_info = [
            { label: "Payroll Version", name: "payroll_version" },
            { label: "Approx. # of Pays", name: "approx_pays" },
            { label: "Annual Revenue $ ", name: "annual_revenue" }
        ]

        return <Card style={{ padding: 10, margin: "auto", maxWidth: 650 }}>
            <CardContent>
              
                <Typography variant='h5' style={{ marginBottom: 5 }}>
                    <b>CUSTOM REQUEST FORM</b>
                </Typography>

                <Typography variant='h5' style={{ marginTop: 30, marginBottom: 5 }}>
                    <b>Requestor Details</b>
                </Typography>

                <Divider style={{ marginBottom: 20 }} />

                <ValidatorForm style={{ maxWidth: 800, margin: "auto" }} enctype="multipart/form-data" onSubmit={this.submit}>
                    {requestor.map((el, i) => {
                        switch (el.type) {
                            case "date":
                                return <DatePicker
                                    key={i}
                                    margin="normal"
                                    label={el.label}
                                    autoOk
                                    style={{ display: "flex", marginBottom: 20 }}
                                    labelFunc={(val) => {
                                        console.log(val);
                                        return format(val, "MMMM do yyyy")
                                    }}
                                    value={this.state.values[el.name]}
                                    onChange={this.handleDateChange(el.name)}
                                />
                            default:
                                return <TextValidator key={i}
                                    style={{ display: "flex", marginBottom: 20 }}
                                    label={el.label}
                                    name={el.name}
                                    value={this.state.values[el.name]}
                                    validators={['required', 'minStringLength:3']}
                                    errorMessages={["Value is required.", "Mandatory Field"]}
                                    onChange={this.onChange(el.name)}
                                    type={el.type ? el.type : "text"}
                                />;
                        }
                    })}

                <Typography variant='h5' style={{ marginTop: 55, marginBottom: 5 }}>
                    <b>Client Details</b>
                </Typography>

                <Divider style={{ marginBottom: 20 }} />

                    {client.map((el, i) => {
                        return <TextField key={i}
                            style={{ display: "flex", marginBottom: 20 }}
                            label={el.label}
                            name={el.name}
                            type={el.type ? el.type : "text"}
                            autoComplete="off"
                            value={this.state.values[el.name]}
                            onChange={this.onChange(el.name)}
                        />;
                    })}
                    
                    <FormControl style={{ marginTop: 15, marginBottom: 10, marginRight: 50 }} autoComplete='Choose an Option' >
                        <FormLabel component="legend" shrink htmlFor="client_risk">Client Risk Status</FormLabel>
                        <Select
                            value={this.state.values["client_risk"]}
                            onChange={this.onChange("client_risk")}
                        >
                            <MenuItem value={'Prospect Critical'}>Prospect Critical (Will not onboard if this custom is not done)</MenuItem>
                            <MenuItem value={'Prospect'}>Prospect</MenuItem>
                            <MenuItem value={'Client Critical'}>Client Critical (Will leave ADP if this custom is not done)</MenuItem>
                            <MenuItem value={'Client Medium Risk'}>Client Medium Risk</MenuItem>
                            <MenuItem value={'Client Low Risk'}>Client Low Risk</MenuItem>
                        </Select>
                    </FormControl>

                    <Typography variant='h5' style={{ marginTop: 40, marginBottom: 5 }}>
                        <b>Payroll Details</b>
                    </Typography>

                    <Divider style={{ marginBottom: 20 }} />

                    <FormControl style={{ marginTop: 5, marginBottom: 10, marginRight: 50 }} autoComplete='off' >
                        <FormLabel component="legend" shrink htmlFor="pay_frequency">Payroll Frequency</FormLabel>
                        <Select
                            value={this.state.values["pay_frequency"]}
                            onChange={this.onChange("pay_frequency")}
                        >
                            <MenuItem value={'Weekly'}>Weekly</MenuItem>
                            <MenuItem value={'Bi-Weekly'}>Bi-Weekly</MenuItem>
                            <MenuItem value={'Semi-Monthly'}>Semi-Monthly</MenuItem>
                            <MenuItem value={'Monthly'}>Monthly</MenuItem>
                            <MenuItem value={'Other'}>Other</MenuItem>
                        </Select>
                    </FormControl>

                    {payroll_info.map((el, i) => {
                        return <TextField key={i}
                            id="company-name"
                            style={{ display: "flex", marginBottom: 20 }}
                            label={el.label}
                            name={el.name}
                            type={el.type ? el.type : "text"}
                            autoComplete="off"
                            value={this.state.values[el.name]}
                            onChange={this.onChange(el.name)}
                        />;
                    })}

                    <Typography variant='h5' style={{ marginTop: 40, marginBottom: 5 }}>
                        <b>Requirement Details</b>
                    </Typography>

                    <Divider style={{ marginBottom: 20 }} />

                    <FormControl component="fieldset">
                        <FormLabel component="legend">Select One Option:</FormLabel>
                        <RadioGroup
                            value={this.state.values["request_type"]}
                            onChange={this.onChange("request_type")}
                            aria-label="request_type"
                            row>
                            <FormControlLabel value="Custom Check" control={<Radio />} label="Custom Check" />
                            <FormControlLabel value="Custom Net" control={<Radio />} label="Custom Net" />
                            <FormControlLabel value="Custom Register" control={<Radio />} label="Custom Register" />
                        </RadioGroup>
                    </FormControl>

                    <FormControl component="fieldset" style={{marginTop : -10}}>
                        <RadioGroup
                            value={this.state.values["prog_type"]}
                            onChange={this.onChange("prog_type")}
                            aria-label="prog_type"
                            row>
                            <FormControlLabel value="New Program" control={<Radio />} label="New Program" />
                            <FormControlLabel value="Existing Program Modification" control={<Radio />} label="Existing Program Modification" />
                        </RadioGroup>
                    </FormControl>

                    {this.state.values["prog_type"] === "Existing Program Modification" && <div>
                        <TextField
                        style={{ marginTop: -15, marginBottom: 20 }}
                        label="Enter Program Name"
                        name="program_type2"
                        value={this.state.values["existing_prog"]}
                        onChange={this.onChange("existing_prog")}
                    />
                    </div>
                    }

                    <Typography variant='h5' style={{ marginTop: 40, marginBottom: 5 }}>
                        <b>Functional Requirements</b>
                    </Typography>

                    <Divider style={{ marginBottom: 20 }} />

                    <FormControl component="fieldset">
                        <FormLabel component="legend">Special Calcs ?</FormLabel>
                        <RadioGroup
                            value={this.state.values["calcs"]}
                            onChange={this.onChange("calcs")}
                            aria-label="calcs"
                            row>
                            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                            <FormControlLabel value="No" control={<Radio />} label="No" />
                        </RadioGroup>
                    </FormControl>

                    <Typography variant='body4' style={{ marginBottom: 14 }}>
                        If answer is Yes, please list the logic of these Special Calcs in the Functional Requirements section.
                    </Typography>

                    <TextField
                        style={{ display: "flex", marginBottom: 20 }}
                        label="Selection Criteria"
                        name="selection_criteria"
                        value={this.state.values["selection_criteria"]}
                        onChange={this.onChange("selection_criteria")}
                    />

                    <Typography variant='body4' style={{ marginBottom: 14 }}>
                        Functional Requirements (please enumerate and be specific):
                    </Typography>

                    <TextField
                        id="scope"
                        style={{ display: "flex", marginBottom: 20 }}
                        label={""}
                        name={"scope"}
                        type={"text"}
                        autoComplete="off"
                        variant="outlined"
                        multiline={true}
                        rows={5}
                        rowsMax={10}
                        value={this.state.values["scope"]}
                        onChange={this.onChange("scope")}
                    />

                    <Typography variant='body4' style={{ marginBottom: 14 }}>
                        <b>Notes:</b><br />
                        It is the responsibility of regional associates to work with the client to determine requirements. <br />
                        All programs require regional beta testing before "live" production. <br /><br />

                        Your new custom request will be assigned to an Analyst for estimate analysis. The assigned Analyst may contact you to discuss the custom requirements in more detail.
                    </Typography>

                    <Typography variant='h5' style={{ marginTop: 20 }}>
                        <b>Attachments</b>
                    </Typography>

                    <Divider style={{ marginBottom: 20, marginTop: 5 }} />

                    <div>
                    Select Attachments: <input type="file" ref={r => this.filesRef = r} name="files" multiple />
                    </div>

                    <div style={{marginTop: 40}}>
                    <Button type="submit" variant="contained">
                        Submit Request
                    </Button>
                    </div>

                    <Divider style={{ marginBottom: 20, marginTop: 20 }} />

                    <Typography variant='body6' style={{ marginTop: 50 }}>
                        M/A Custom Development<br />
                        Copyright © 2002  ADP, LLC.  All rights reserved.<br />
                        Revised: April 09, 2019<br />
                    </Typography>

                </ValidatorForm>

            </CardContent>
        </Card>
    }
}