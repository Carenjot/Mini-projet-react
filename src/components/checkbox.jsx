import React from "react";
import { useState } from "react";

const Checkbox = () => {
    const [checkedOne, setCheckedOne] = useState(false);
    const [checkedTwo, setCheckedTwo] = useState(false);
  
    const handleChangeOne = () => {
      setCheckedOne(!checkedOne);
    };
  
    const handleChangeTwo = () => {
      setCheckedTwo(!checkedTwo);
    };
  
    return (
      <div>
        <Checkbox
          label="Musée 1"
          value={checkedOne}
          onChange={handleChangeOne}
        />
        <Checkbox
          label="Musée 2"
          value={checkedTwo}
          onChange={handleChangeTwo}
        />
      </div>
    );
  };
  

export default Checkbox;