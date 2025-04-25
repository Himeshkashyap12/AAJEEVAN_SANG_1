
import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import "./common.css"
const CustomSelect=({handleSelect,option,className})=>{
   
    return(
        <>
        <FormControl variant="standard" className={`w-[350px] ${className} `}>
        <Select
        className='!text-secondary'
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={"vegetarian"}
          defaultValue={"vegetarian"}
          onChange={handleSelect}
          label="Age"
        > 
          {option?.map((item)=>{
            return(
              <>
              <MenuItem className='!text-secondary' value={item?.value}>{item?.name}</MenuItem>
              </>
            )
          })}
          
        </Select>
      </FormControl>
        </>
    )
}
export default CustomSelect;