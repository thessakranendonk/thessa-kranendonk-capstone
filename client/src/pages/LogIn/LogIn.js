import axios from 'axios';
import { Component } from 'react';
import React from 'react'
import {Link} from 'react-router-dom';
import Input from '../../components/Input/Input'
import './Login.scss';

class LogIn extends Component {
    state = {
        breweryName: '',
        password: ''

    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    validateInput = (input) => {
        if(!input) {
            return false;
        }
        return true;
    }

    validateForm = () => {
        if (!this.state.breweryName) return false;
        if (!this.state.password) return false;
        return true;
    }

    handleLogIn = (e) => {
        e.preventDefault();
     if(this.validateForm()){

        axios.post('/api/login', {
            breweryName: e.target.breweryName.value,
            password: e.target.password.value
        })
        .then(res => {
            console.log(res)
            let token = res.data.token
            sessionStorage.setItem('authToken', token)
            this.props.history.push('/upload')
        })
    }
    }

    render() {
    return (
        <div className="login">
            <h1 className="login__header">Brewery Log In</h1>
            <form onSubmit={this.handleLogIn}>
                <Input label="Brewery Name" name="breweryName" type="text" onChange={this.handleChange} className={this.validateInput(this.state.breweryName)
                ? "login__input"
                : "login__input--error"}/>
                <p className={this.validateInput(this.state.breweryName)
                ? "login__warning--none"
                : "login__warning--error"}>This field is required</p>

                <Input label="Password" name="password" type="password"  onChange={this.handleChange} className={this.validateInput(this.state.password)
                ? "login__input"
                : "login__input--error"}/>
                <p className={this.validateInput(this.state.password)
                ? "login__warning--none"
                : "login__warning--error"}>This field is required</p>
                <div className="login__button-wrapper">
                <button className="login__submit" type="submit">Log In</button>
                <Link className="login__signup" to="/signup">Sign Up</Link>
                </div>
            </form>
           
        </div>
    )
    }
}

export default LogIn;