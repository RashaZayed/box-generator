import React, { useState } from "react";
import styles from "./styles.module.css";
const EnterColor = (props) => {
  const [subMessage, setSubMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [hasBeenSubmitted, setHasBeenSubmitted]=useState(false);
  const {dimension , setDimension} = props;
  
  
  const onChange = (e) => {
    props.setState(e.target.value);
    e.target.value.length < 3
      ? setErrorMessage("It must be more than 3 characters")
      : setErrorMessage("");
  };

  const setSize = e => {
     setDimension ({
          ...dimension,
          [e.target.name]: e.target.value ,
      })
      console.log(dimension);
  }

  const handleSubmit = (e) => {

      
    e.preventDefault();
    setSubMessage("thanks for creating the  "+ props.state+ " Color")
    setHasBeenSubmitted(true);
   
   

    
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter the color for first box:</label>
      <input type="text" name="color" onChange={onChange} /><br />
      <label>Enter width:</label>
      <input type='text' name='width' onChange={setSize} /><br />
      <label>Enter height:</label>
      <input type='text' name='height' onChange={setSize} />

      <p style={{ color: "red" }}>{errorMessage}</p>
      { errorMessage ? <input type="submit" value="Add" disabled/> : <input type="submit" value="Add" /> }
     
      {hasBeenSubmitted ? <p>{subMessage}</p> : <p>Please Enter the required questions</p>}
      
    </form>
  );
};
export default EnterColor;
