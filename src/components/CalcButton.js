import React from 'react';
import {calculator} from '../constants/calculator';
const CalcButton = (props) => {

    return (

         <button  className="col-3 btn btn-primary" onClick = {() => {props.btnClick(calculator[props.value])}} >{calculator[props.value]}</button>
    );
}

export default CalcButton;