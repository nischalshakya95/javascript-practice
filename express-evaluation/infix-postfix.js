const ALPHA_NUMERIC_REGEX = /^[a-z0-9]+$/ig;

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

class InfixToPostfix {

    constructor() {
        this.postfixExpression = '';
        this.operatorStack = new Stack();
        this.resultStack = new Stack();
    }

    checkPrecedence(char) {
        if (char === '+' || char === '-') {
            return 1;
        } else if (char === '*' || char === '/') {
            return 2;
        } else if (char === '^') {
            return 3;
        }
        return 0;
    }

    isDigit(digit) {
        return 0 <= digit && digit <= 9;
    }

    pow(number, power) {
        return power === 1 ? number : number * this.pow(number, power - 1);
    }

    generatePostFix(expression) {
        expression = expression.split(' ');
        this.postfixExpression = this.evaluateExpression(expression);
        while (!this.operatorStack.isEmpty()) {
            this.postfixExpression += this.operatorStack.pop();
        }
        return this.postfixExpression;
    }

    applyOperation(numberOne, numberTwo, operator) {
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
            case '^' :
                return this.pow(numberOne, numberTwo);
        }
    }

    evaluateExpression(expression) {
        for (let i = 0; i < expression.length; i++) {
            let e = expression[i];
            if (e.match(ALPHA_NUMERIC_REGEX)) {
                this.postfixExpression += e;
            } else if (e === '(') {
                this.operatorStack.push(e);
            } else if (e === ')') {
                while (!this.operatorStack.isEmpty() && this.operatorStack.peek() !== '(') {
                    this.postfixExpression += this.operatorStack.pop();
                }
                this.operatorStack.pop();
            } else if (e === '^') {
                this.operatorStack.push(e);
            } else {
                while (!this.operatorStack.isEmpty() && this.checkPrecedence(e) <= this.checkPrecedence(this.operatorStack.peek())) {
                    this.postfixExpression += this.operatorStack.pop();
                }
                this.operatorStack.push(e);
            }
        }
        return this.postfixExpression;
    }

    solvePostFixExpresion(expression) {
        let expressionArr = expression.split('');
        for (let i = 0; i < expressionArr.length; i++) {
            let e = expressionArr[i];
            if (this.isDigit(e)) {
                this.resultStack.push(e);
            } else {
                let numberTwo = this.resultStack.pop();
                let numberOne = this.resultStack.pop();
                this.resultStack.push(this.applyOperation(numberOne, numberTwo, e));
            }
        }
        return this.resultStack.pop();
    }
}

let infix = new InfixToPostfix();
let infixExpression = '2 ^ 5 + 2 * 2';
let postfixExpression = infix.generatePostFix(infixExpression);
let result = infix.solvePostFixExpresion(postfixExpression);
console.log('Postfix expression ', postfixExpression);
console.log('Result of postfix expression ', result);
