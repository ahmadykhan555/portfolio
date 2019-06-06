import React from 'react';
import './Calculator.css';
import Button from '../button/Button';

class Calculator extends React.Component {
    state = {
        output: 0,
        input: 0,
        operand: null
    }

    symbolsMap = {
        CLEAR: 'C',
        MOD: '%',
        DIVIDE: '',
        MULTIPLY: 'x',
        SUBSTRACT: '-',
        ADD: '+',
        EQUALS: '=',
        PARANTHESIS_OPEN: '(',
        PARANTHESIS_CLOSE: ')',
        DECIMAL: '.'
    }

    buttonClicked = (value) => {
        if(value === this.symbolsMap.CLEAR) {
            this.resetState();
            return;
        }
        if(value === this.symbolsMap.EQUALS) {
            this.performOperation();
            return;
        }

        let stateNow = {};
        if(!this.state.operand) {
            if(value === this.symbolsMap.MOD) {
                stateNow.operand = this.symbolsMap.MOD
            }
            if(value === this.symbolsMap.DIVIDE) {
                stateNow.operand = this.symbolsMap.DIVIDE;
            }
            if(value === this.symbolsMap.ADD) {
                stateNow.operand = this.symbolsMap.ADD;
            }

            if(value === this.symbolsMap.MULTIPLY) {
                stateNow.operand = this.symbolsMap.MULTIPLY
            }
        }
        stateNow.input = this.state.input;
        if(!stateNow.input) stateNow.input = '';
        stateNow.input = stateNow.input + value;
        this.updateState(stateNow);
    }

    updateState(newState) {
        this.setState(newState)
    }

    resetState() {
        this.updateState({
            output: 0,
            input: 0,
            operand: null
        });
    }

    performOperation() {
        const input = this.state.input;
        const operands = input.split(this.state.operand);
        const num1 = Number(operands[0]);
        const num2 = Number(operands[1]);
        let output = 0;
        debugger;

        if(this.state.operand === this.symbolsMap.MOD) {
            output = num1 % num2;
        }

        if(this.state.operand === this.symbolsMap.ADD) {
            debugger;
            output = num1+num2;
        }

        this.updateState({
            output: output,
            operand: null,
            input: 0
        });

    }

    renderButton = (config) => {
        return (
        <Button 
            value={config.value} 
            fillButton={config.fillButton} 
            color={config.color}
            onClick={() => this.buttonClicked(config.value)}>
        </Button>);
    }
    render() {
        return (
            <div className="calculator">
                <div className="screen">
                    <div className="output">{this.state.output}</div>
                    <div className="input">{this.state.input}</div>
                    
                    </div>
                <div className="input-rows">
                    <div className="row row__zero">
                        {this.renderButton({ value: 'C', color: 'orange' })}
                        {this.renderButton({ value: '()', color: 'blue' })}
                        {this.renderButton({ value: '%', color: 'blue' })}
                        {this.renderButton({ value: '÷', color: 'blue' })}
                    </div>
                    <div className="row row__one">
                        {this.renderButton({value: 1})}
                        {this.renderButton({value: 2})}
                        {this.renderButton({value: 3})}
                        {this.renderButton({value: 'x', color: 'blue' })}
                    </div>
                    <div className="row row__two">
                        {this.renderButton({value: 4})}
                        {this.renderButton({value: 5})}
                        {this.renderButton({value: 6})}
                        {this.renderButton({value: '-',  color: 'blue' })}
                    </div>
                    <div className="row row__three">
                        {this.renderButton({value: 7})}
                        {this.renderButton({value: 8})}
                        {this.renderButton({value: 9})}
                        {this.renderButton({value: '+', color: 'blue' })}
                    </div>
                    <div className="row row__three">
                        {this.renderButton({value: '+/-'})}
                        {this.renderButton({value: 0})}
                        {this.renderButton({value: '.'})}
                        {this.renderButton({value: '=', fillButton: true,  color: 'white'  })}
                    </div>
                </div>
            </div>
        );
    }
}
export default Calculator;