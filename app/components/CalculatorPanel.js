import React from 'react'
import Button from './controls/Button'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const CalculatorPanel = (props) =>{
    return (
        <MuiThemeProvider>
            <div className="container">

                <div className="">
                    <div className="">
                        <input readOnly="true" pattern="" value={props.value} className="display"/>
                    </div>
                    <div className="row">
                        <Button {...props} className="largebutton">AC</Button>
                        <Button {...props} className="largebutton">+/-</Button>
                        <Button {...props} className="largebutton">%</Button>
                        <Button {...props} val="/" className="largebutton rightbutton">÷</Button>
                    </div>
                    <div className="row">
                        <Button {...props} className="largebutton">7</Button>
                        <Button {...props} className="largebutton">8</Button>
                        <Button {...props} className="largebutton">9</Button>
                        <Button {...props} val="*" className="largebutton rightbutton">x</Button>
                    </div>
                    <div className="row">
                        <Button {...props} className="largebutton">4</Button>
                        <Button {...props} className="largebutton">5</Button>
                        <Button {...props} className="largebutton">6</Button>
                        <Button {...props} className="largebutton rightbutton">-</Button>
                    </div>
                    <div className="row">
                        <Button {...props} className="largebutton">1</Button>
                        <Button {...props} className="largebutton">2</Button>
                        <Button {...props} className="largebutton">3</Button>
                        <Button {...props} className="largebutton rightbutton">+</Button>
                    </div>
                    <div className="row">
                        <Button {...props} className="largebutton doublebutton">0</Button>
                        <Button {...props} val="." className="largebutton">,</Button>
                        <Button {...props} className="largebutton rightbutton">=</Button>
                    </div>
                </div>

            </div>
        </MuiThemeProvider>
    )
}

export default CalculatorPanel