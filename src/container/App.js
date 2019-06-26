import React from 'react';
import './App.css'
import {calculator} from '../constants/calculator';
import {operators} from '../constants/operators';
import {operands} from '../constants/operands';
import DisplayPanel from '../components/DisplayPanel';
import CalcButton from '../components/CalcButton';


class App extends React.Component{

    constructor(props){
        super(props);

        this.state = {

            display:'',
            result : ''
        }
       
    }


     collectOperands = (value) =>{

        let op = this.state.result;
        op = op+value;

        this.setState({

            result:op,
            display:op
        })
        
    }

    Calculate = () => {

        console.log(this.state.result);
        try{
            const res = eval(this.state.result);
            this.setState({
                result : res,
                display:res
            })
        
                }catch(expection){
                    this.setState({
                        res:'',
                        display:'Error'
                                })
                                    }                   

    } 


    btnClick = (value) => {

        if(value === "AC"){
            this.setState({

                result:'',
                display:''
            })
        }

        if(value === "="){

            //console.log(this.state.result);
            //console.log(eval(this.state.result));
            this.Calculate();

        }

        if(operands.includes(value) || operators.includes(value)){

            this.collectOperands(value);
        }


        }

    render(){
        return(<div className="container calc">

        
                <DisplayPanel value ={this.state.display}/>
                <div className="calc-body">
                
                    <div className="row calc-row">
                    <CalcButton value={0} btnClick ={() => this.btnClick(calculator[0])}/>
                    <CalcButton value={1} btnClick ={() => this.btnClick(calculator[1])}/>
                    <CalcButton value={2} btnClick ={() => this.btnClick(calculator[2])}/>
                    <CalcButton value={3} btnClick ={() => this.btnClick(calculator[3])}/>
                    
                    </div>

                    <div className="row calc-row">

                    <CalcButton value={4} btnClick ={() => this.btnClick(calculator[4])}/>
                    <CalcButton value={5} btnClick ={() => this.btnClick(calculator[5])}/>
                    <CalcButton value={6} btnClick ={() => this.btnClick(calculator[6])}/>
                    <CalcButton value={7} btnClick ={() => this.btnClick(calculator[7])}/>

                    </div>

                    <div className="row calc-row">
                    <CalcButton value={8} btnClick ={() => this.btnClick(calculator[8])}/>
                    <CalcButton value={9} btnClick ={() => this.btnClick(calculator[9])}/>
                    <CalcButton value={10} btnClick ={() => this.btnClick(calculator[10])}/>
                    <CalcButton value={11} btnClick ={() => this.btnClick(calculator[11])}/>
                    
                    </div>

                    

                    <div className="row calc-row">
                    <CalcButton value={12} btnClick ={() => this.btnClick(calculator[12])}/>
                    <CalcButton value={13} btnClick ={() => this.btnClick(calculator[13])}/>
                    <CalcButton value={14} btnClick ={() => this.btnClick(calculator[14])}/>
                    <CalcButton value={15} btnClick ={() => this.btnClick(calculator[15])}/>
                    

                    </div>


                    <div className="row calc-row">
                    <CalcButton value={16} btnClick ={() => this.btnClick(calculator[16])}/>
                    <CalcButton value={17} btnClick ={() => this.btnClick(calculator[17])}/>
                    <CalcButton value={18} btnClick ={() => this.btnClick(calculator[18])}/>
                    <CalcButton value={19} btnClick ={() => this.btnClick(calculator[19])}/>

                    </div>

                </div>
               
              </div>);
    }
}

export default App;