import React, {useState} from'react';
import styles from './styles.module.css';

const DisplayColor = props => {
    const {dimension } = props;
    console.log(dimension.width);
    console.log(dimension.height);
    const divStyle ={
        background: props.state,
        width: dimension.width+'px',
        height: dimension.height+'px',
        display: 'inline-block'
    }
    
    return (
       

    <div  style={divStyle} />
       
    
    )
}
export  default DisplayColor