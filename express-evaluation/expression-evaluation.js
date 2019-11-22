class Stack {

    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.items.length === 0)
            return 'underflow';
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

class Util {

    static isDigit(token) {
        return token >= '0' && token <= '9';
    }

    static precedence(operator) {
        if (operator === '+' || operator === '-')
            return 1;
        if (operator === '*' || operator === '/' || operator === '%')
            return 2;
        return 0;
    }

    static applyOperation(numberOne, numberTwo, operator) {
        switch (operator) {
            case '+':
                return +numberOne + +numberTwo;
            case '-':
                return numberOne - numberTwo;
            case '*':
                return numberOne * numberTwo;
            case '/':
                return numberOne / numberTwo;
            case '%':
                return numberOne / numberTwo;
        }
    }
}


class ExpressionEvaluation {

    constructor(arithmeticExpression) {
        this.valueStack = new Stack();
        this.operatorStack = new Stack();
        this.tokens = arithmeticExpression;
    }

    evaluate() {
        for (let i = 0; i < this.tokens.length; i++) {
            if (this.tokens[i] === '(') {
                this.operatorStack.push(this.tokens[i]);
            } else if (Util.isDigit(this.tokens[i])) {
               
                this.valueStack.push(this.tokens[i]);
            } else if (this.tokens[i] === ')') {
                while (!this.operatorStack.isEmpty() && this.operatorStack.peek() !== '(') {
                    this.calculate();
                }
                if (!this.operatorStack.isEmpty()) {
                    this.operatorStack.pop();
                }
            } else {
                while (!this.operatorStack.isEmpty() && Util.precedence(this.operatorStack.peek()) >= Util.precedence(this.tokens[i])) {
                    this.calculate();
                }
                this.operatorStack.push(this.tokens[i]);
            }
        }
    }

    calculate() {
        let numberTwo = this.valueStack.peek();
        this.valueStack.pop();

        let numberOne = this.valueStack.peek();
        this.valueStack.pop();

        let operator = this.operatorStack.peek();
        this.operatorStack.pop();

        this.valueStack.push(Util.applyOperation(numberOne, numberTwo, operator));
    }

    getResult() {
        while (!this.operatorStack.isEmpty()) {
            this.calculate();
        }
        return this.valueStack.peek();
    }
}

const ev = new ExpressionEvaluation(['2', '+', '3', '*', '5']);
ev.evaluate();
console.log(ev);
console.log(ev.getResult());