import React from "react";

class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            age: null,
            errormessage: ''
        };
    }
    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        let err = '';
        if (nam === "age") {
            if (val !== "" && !Number(val)) {
                err = <strong>Your age must be a number</strong>;
            }
        }
        this.setState({ errormessage: err });
        this.setState({ [nam]: val });
    }
    render() {
        return (
            <form>
                <img src="/logo192.png" alt="image" />

                <h1>Hello {this.state.username} {this.state.age}</h1>
                <p>Enter your name:</p>
                <input
                    type='text'
                    name='username'
                    onChange={this.myChangeHandler}
                />
                <p>Enter your age:</p>
                <input
                    type='text'
                    name='age'
                    onChange={this.myChangeHandler}
                />
                {this.state.errormessage}
            </form>
        );
    }
}

class SelectForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mycar: 'Volvo'
        };
    }
    render() {
        return (
            <form>
                {/* fixes value to this.state.mycar */}
                <select value={this.state.mycar}>
                    <option value="Ford">Ford</option>
                    <option value="Volvo">Volvo</option>
                    <option value="Fiat">Fiat</option>
                </select>
            </form>
        );
    }
}

class TextareaForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: 'The content of a textarea goes in the value attribute'
        };
    }
    render() {
        return (
            <form>
                <textarea value={this.state.description} />
            </form>
        );
    }
}

export default { MyForm, SelectForm, TextareaForm }