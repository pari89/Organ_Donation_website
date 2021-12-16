import React, { useState } from "react";
import "./Donate.css";
import Box from "@material-ui/core/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";
import OutlinedInput from "@mui/material/OutlinedInput";

import ListItemText from "@mui/material/ListItemText";

import Checkbox from "@mui/material/Checkbox";

const Donate = () => {
  const standard = "standard",
    filled = "filled",
    outlined = "outlined";

  const [DonArr, setDonArr] = useState([]);
  // const [] =useState('');
  // const [] =useState('');
  // const [] =useState('');
  // const [] =useState('');
  // const [] =useState('');
  // const [] =useState('');
  // const [] =useState('');
  // const [] =useState('');
  // const [] =useState('');
  // const [] =useState('');
  // const [] =useState('');
  // const [] =useState('');
  // const [] =useState('');
  // const [] =useState('');
  // const [] =useState('');
  // const [] =useState('');

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const names = ["Heart", "Liver", "Lungs", "Pancreas", "Kidneys", "Intestine"];

  const [OrganName, setOrganName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setOrganName(
      // On autofill we get a the stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const OnSubmit = async () => {
    await axios
      .post("http://localhost:5000/Donate/add", {
        FirstName: DonArr[1],
        MiddleName: DonArr[2],
        LastName: DonArr[3],
        ParentName: DonArr[4],
        Address: {
          ApartmentName_SocietyName: DonArr[5],
          City: DonArr[6],
          District: DonArr[7],
          State: DonArr[8],
        },
        Pincode: DonArr[9],
        MobileNumber: DonArr[11],
        AadharCardNumber: DonArr[10],
        Occupation: DonArr[12],
        Gender: DonArr[13],
        BloodGroup: BloodGroup,
        EmergencyContactNumber: DonArr[14],
        Organs: OrganName,
        Date: new Date().toLocaleDateString(),
      })
      .then((Response) => {
        const DFR = Response.data;
        console.log(DFR);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  DonArr[0] = "";

  const [BloodGroup, setBloodGroup] = React.useState("");

  return (
    <div className="Donate-Wrapper">
      <Box
        sx={{
          display: "flex",
          flexFlow: "row wrap",
          alignItems: "center",
          justifyContent: "space-around",
          width: "80%",
          position: "relative",
          padding: "30px 30px",
          borderRadius: "10px",
        }}
      >
        <TextField
          autoComplete=""
          inputProps={{style: {fontSize: 18,wordSpacing: 17,lineHeight: 1.5}}} InputLabelProps={{style: {fontSize: 18,wordSpacing: 17,lineHeight: 1.5}}}
          id=""
          label="First Name"
          variant="outlined"
          onChange={(e) => {
            DonArr[1] = e.target.value;
          }}
          sx={{
            width: "100%",
            margin: "20px",
            maxWidth: "300px",
            boxShadow: 4,
          }}
        />
        <TextField
          //autoComplete=""
          id="standard-basic"
          inputProps={{style: {fontSize: 18,wordSpacing: 17,lineHeight: 1.5}}} InputLabelProps={{style: {fontSize: 18,wordSpacing: 17,lineHeight: 1.5}}}
          label="Middle Name"
          variant="outlined"
          onChange={(e) => {
            DonArr[2] = e.target.value;
          }}
          sx={{
            width: "100%",
            
            margin: "20px",
            maxWidth: "300px",
            boxShadow: 4,
          }}
        />
        <TextField
          //autoComplete="new-password"
          id="standard-basic"
          inputProps={{style: {fontSize: 18,wordSpacing: 17,lineHeight: 1.5}}} InputLabelProps={{style: {fontSize: 18,wordSpacing: 17,lineHeight: 1.5}}}
          label="Last Name"
          variant="outlined"
          onChange={(e) => {
            DonArr[3] = e.target.value;
          }}
          sx={{
            width: "100%",
            margin: "20px",
            maxWidth: "300px",
            boxShadow: 4,
          }}
        />
        <TextField
          //autoComplete="new-password"
          id="standard-basic"
          inputProps={{style: {fontSize: 18,wordSpacing: 17,lineHeight: 1.5}}} InputLabelProps={{style: {fontSize: 18,wordSpacing: 17,lineHeight: 1.5}}}
          label="Parent/Guardian Name"
          variant="outlined"
          onChange={(e) => {
            DonArr[4] = e.target.value;
          }}
          sx={{ width: "100%", maxWidth: "300px", boxShadow: 4 }}
        />

        <FormControl
          sx={{
            width: "100%",
            margin: "20px",
            maxWidth: "300px",
            boxShadow: 4,
          }}
        >
          <InputLabel
            id="demo-simple-select-label"
            inputProps={{style: {fontSize: 18,wordSpacing: 17,lineHeight: 1.5}}} InputLabelProps={{style: {fontSize: 18,wordSpacing: 17,lineHeight: 1.5}}}
            sx={{ background: "white" }}
          >
            Blood Group
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            inputProps={{style: {fontSize: 18,wordSpacing: 17,lineHeight: 1.5}}} InputLabelProps={{style: {fontSize: 18,wordSpacing: 17,lineHeight: 1.5}}}
            id="demo-simple-select"
            value={BloodGroup ?? "Undefined BloodGroup"}
            label="Age"
            onChange={(e) => {
              setBloodGroup(e.target.value);
            }}
          >
            <MenuItem value={"O+"}>O+</MenuItem>
            <MenuItem value={"O-"}>O-</MenuItem>
            <MenuItem value={"A+"}>A+</MenuItem>
            <MenuItem value={"A-"}>A-</MenuItem>
            <MenuItem value={"B+"}>B+</MenuItem>
            <MenuItem value={"B-"}>B-</MenuItem>
            <MenuItem value={"AB+"}>AB+</MenuItem>
            <MenuItem value={"AB-"}>AB-</MenuItem>
          </Select>
        </FormControl>

        <span className="Address-Identifier">Address : </span>
        <TextField
          autoComplete="new-password"
          inputProps={{style: {fontSize: 18,wordSpacing: 17,lineHeight: 1.5}}} InputLabelProps={{style: {fontSize: 18,wordSpacing: 17,lineHeight: 1.5}}}
          id="standard-basic"
          label="Apartment Name/Society Name"
          variant="outlined"
          onChange={(e) => {
            DonArr[5] = e.target.value;
          }}
          sx={{
            width: "100%",
            margin: "20px",
            maxWidth: "300px",
            boxShadow: 4,
          }}
        />
        <TextField
          autoComplete="new-password"
          inputProps={{style: {fontSize: 18,wordSpacing: 17,lineHeight: 1.5}}} InputLabelProps={{style: {fontSize: 18,wordSpacing: 17,lineHeight: 1.5}}}
          id="standard-basic"
          label="City"
          variant="outlined"
          onChange={(e) => {
            DonArr[6] = e.target.value;
          }}
          sx={{
            width: "100%",
            margin: "20px",
            maxWidth: "300px",
            boxShadow: 4,
          }}
        />
        <TextField
          //  autoComplete=""
          id="standard-basic"
          label="District"
          variant="outlined"
          onChange={(e) => {
            DonArr[7] = e.target.value;
          }}
          sx={{
            width: "100%",
            margin: "20px",
            maxWidth: "300px",
            boxShadow: 4,
          }}
        />
        <TextField
          autoComplete="new-password"
          id="standard-basic"
          inputProps={{style: {fontSize: 18,wordSpacing: 17,lineHeight: 1.5}}} InputLabelProps={{style: {fontSize: 18,wordSpacing: 17,lineHeight: 1.5}}}
          label="State"
          variant="outlined"
          onChange={(e) => {
            DonArr[8] = e.target.value;
          }}
          sx={{
            width: "100%",
            margin: "20px",
            maxWidth: "300px",
            boxShadow: 4,
          }}
        />

        <TextField
          autoComplete="new-password"
          id="standard-basic"
          inputProps={{style: {fontSize: 18,wordSpacing: 17,lineHeight: 1.5}}} InputLabelProps={{style: {fontSize: 18,wordSpacing: 17,lineHeight: 1.5}}}
          label="Pincode"
          variant="outlined"
          onChange={(e) => {
            DonArr[9] = e.target.value;
          }}
          sx={{
            width: "100%",
            margin: "20px",
            maxWidth: "300px",
            boxShadow: 4,
          }}
        />
        <TextField
          autoComplete="new-password"
          id="standard-basic"
          label="Aadhar Card Number"
          inputProps={{style: {fontSize: 18,wordSpacing: 17,lineHeight: 1.5}}} InputLabelProps={{style: {fontSize: 18,wordSpacing: 17,lineHeight: 1.5}}}
          variant="outlined"
          onChange={(e) => {
            DonArr[10] = e.target.value;
          }}
          sx={{
            width: "100%",
            margin: "20px",
            maxWidth: "300px",
            boxShadow: 4,
          }}
        />
        <TextField
          autoComplete="new-password"
          id="standard-basic"
          inputProps={{style: {fontSize: 18,wordSpacing: 17,lineHeight: 1.5}}} InputLabelProps={{style: {fontSize: 18,wordSpacing: 17,lineHeight: 1.5}}}
          label="Mobile Number"
          variant="outlined"
          onChange={(e) => {
            DonArr[11] = e.target.value;
          }}
          sx={{
            width: "100%",
            margin: "20px",
            maxWidth: "300px",
            boxShadow: 4,
          }}
        />

        <TextField
          autoComplete="new-password"
          inputProps={{style: {fontSize: 18,wordSpacing: 17,lineHeight: 1.5}}} InputLabelProps={{style: {fontSize: 18,wordSpacing: 17,lineHeight: 1.5}}}
          id="standard-basic"
          label="Occupation"
          variant="outlined"
          onChange={(e) => {
            DonArr[12] = e.target.value;
          }}
          sx={{
            width: "100%",
            margin: "20px",
            maxWidth: "300px",
            boxShadow: 4,
          }}
        />

        <FormControl sx={{ width: "100%", margin: "20px", maxWidth: "300px" }}>
          <InputLabel
            id="demo-simple-select-label"
            sx={{ background: "white" }}
          >
            Gender
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            inputProps={{style: {fontSize: 18,wordSpacing: 17,lineHeight: 1.5}}} InputLabelProps={{style: {fontSize: 18,wordSpacing: 17,lineHeight: 1.5}}}
            id="demo-simple-select"
            value={DonArr[13] ?? "Undefined Gender"}
            label="Gender"
            onChange={(e) => {
              DonArr[13] = e.target.value;
            }}
          >
            <MenuItem value={"Male"}>Male</MenuItem>
            <MenuItem value={"Female"}>Female</MenuItem>
            <MenuItem value={"Other"}>Other</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel
            id="demo-multiple-checkbox-label"
            inputProps={{style: {fontSize: 18,wordSpacing: 17,lineHeight: 1.5}}} InputLabelProps={{style: {fontSize: 18,wordSpacing: 17,lineHeight: 1.5}}}
            sx={{ backgroundColor: "white" }}
          >
            Organs you wish to Donate
          </InputLabel>
          <Select
            labelId="demo-multiple-checkbox-label"
            inputProps={{style: {fontSize: 18,wordSpacing: 17,lineHeight: 1.5}}} InputLabelProps={{style: {fontSize: 18,wordSpacing: 17,lineHeight: 1.5}}}
            id="demo-multiple-checkbox"
            multiple
            value={OrganName ?? "Undefined organs"}
            onChange={handleChange}
            input={<OutlinedInput label="Organs" />}
            renderValue={(selected) => selected.join(", ")}
            MenuProps={MenuProps}
          >
            {names.map((name) => (
              <MenuItem key={name} value={name}>
                <Checkbox checked={OrganName.indexOf(name) > -1} />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <TextField
          autoComplete="new-password"
          id="standard-basic"
          inputProps={{style: {fontSize: 18,wordSpacing: 17,lineHeight: 1.5}}} InputLabelProps={{style: {fontSize: 18,wordSpacing: 17,lineHeight: 1.5}}}
          label="Emergency Contact Number"
          variant="outlined"
          onChange={(e) => {
            DonArr[14] = e.target.value;
          }}
          sx={{
            width: "100%",
            margin: "20px",
            maxWidth: "300px",
            boxShadow: 4,
          }}
        />

        <div
          className="SignUp-Button"
          onClick={(e) => {
            OnSubmit(e);
          }}
        >
          Submit Form
        </div>
      </Box>
    </div>
  );
};

export default Donate;
