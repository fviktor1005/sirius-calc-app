import React from 'react'
import CalculatorPanel from './CalculatorPanel'
import {Link} from 'react-router-dom'
import '../App.css'

class Calculator extends React.Component {
    constructor(){
        super();
        this.state = {
            str: '0',
            total: 0,
            operation: '',
            history: []
        }
        document.addEventListener('keypress', this.handleKeyPress);
        document.addEventListener('keydown', this.handleKeyDown);
    }

    addToStr = (value) => {

        const oldValue = (this.state.str === '0') ? '' : this.state.str;

        if (isFinite(value)) {

            this.setState({
                str: oldValue + this.state.operation + value,
                operation: ''
            })
            return
        }

        switch (value){
            case 'AC':
                this.setState({str: '0', operation: ''})
                break
            case '=':
                this.calculate()
                break
            case '+/-':
                this.calculate(true)
                break
            case '.':
                this.setState({str: this.state.str + value})
                break
            default:
                const operation = ` ${value} `
                this.setState({operation})

        }

    }

    calculate = (changeSign = false) => {
        let total = 0;
        try {
            total = eval(this.state.str);
            total = (parseFloat(total).toPrecision(14)) * 1;
        }
        catch (e){
            alert(e)
        }

        total = changeSign ? total * (-1) : total;

        const date = new Date().toLocaleString();
        this.state.history.push({date, operation: `${this.state.str}${this.state.operation} = ${total}`})

        const body = JSON.stringify({date, operation: `${this.state.str}${this.state.operation} = ${total}`});

        console.log(body);

        fetch('/records', {headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },method: 'POST', body: body })
            .then(res => res.json())
            .then(data => console.log(data));

        this.setState({str: String(total), operation: ''});
    }

    handleKeyDown = (event) => {
        if (event.code === 'Backspace'){
           if (this.state.operation) {
               this.setState({operation: ''})
           } else {
               let str = this.state.str;
               str = str.substring(0, str.length - 1);
               this.setState({str})
           }
        }
    }

    handleKeyPress = (event) => {
        //console.log(event)

        const key = event.key;

        if (isFinite(key)){
            this.addToStr(key)
        } else if(key === '.' || key === '+' || key === '-' || key === '/' || key === '*' || key === '%'){
            this.addToStr(event.key)
        } else if(key === 'Enter'){
            this.calculate()
        }

    }

    render(){
        return (
            <div>
                <CalculatorPanel returnValue={this.addToStr} value={this.state.str + this.state.operation}/>
                <Link target='_blank' to="/history">go to history >>></Link>
            </div>
        )
    }

}

export default Calculator