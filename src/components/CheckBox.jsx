import React from "react";
import { useState } from "react";
function CheckBox(){
    const [checkedOne, setCheckedOne] = useState(false);
    const handleChangeOne = () => {
        setCheckedOne(!checkedOne);
    };
    return (
        <><input type="checkbox" value={(checkedOne) ? "✅" : "❌" }  onChange={handleChangeOne} /><p>{(checkedOne) ? "✅" : "❌" } </p></>
    );
  };
export default CheckBox;

