import Checkbox from '@mui/material/Checkbox';
import React, { useState } from "react";
import FormControlLabel from '@mui/material/FormControlLabel'
import DatePicker from "react-datepicker";

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';

import "react-datepicker/dist/react-datepicker.css";
import './App.css';


function App() {
  const [startDate, setStartDate] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleDateChange = (date) => {
    console.log(date);
    setSelectedDate(date);
  };
    return (
    <>
     <Checkbox style={{color:'red'}} color="secondary" />
     <Checkbox style={{color:'red'}} defaultChecked />
    <Checkbox style={{color:'red'}} />
    <Checkbox style={{color:'red'}} color="error" disabled />
    <Checkbox style={{color:'red'}} disabled checked />
    <br />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Check here" />
  
    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} 

    dateFormat='dd/MM/yyyy' 
    maxDate={new Date()} 
    filterDate = {date => date.getDay()!==6 && date.getDay() !==0}
    isClearable 
    showYearDropdown
    showMonthDropdown
    // showMonthYearDropdown
    />

<MuiPickersUtilsProvider utils={DateFnsUtils}>

        <KeyboardDatePicker
          label="Material Date Picker"
          value={selectedDate}
          onChange={handleDateChange}
        />
        
       
 
        
      </MuiPickersUtilsProvider>
      
      
    </>
    
  );
}

export default App;
