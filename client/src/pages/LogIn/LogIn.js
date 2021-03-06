import axios from 'axios';
import { Component } from 'react';
import React from 'react'
import {Link} from 'react-router-dom';
import Input from '../../components/Input/Input'
import Slide from 'react-reveal/Slide';
import './Login.scss';


class LogIn extends Component {
    state = {
        breweryName: '',
        password: '',
        isValid: true

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
        if (!this.state.breweryName)  {
            this.setState({isValid: false})
            return false};
        if (!this.state.password)  {
            this.setState({isValid: false})
            return false};
        return true;
    }

    handleLogIn = (e) => {
        e.preventDefault();
     if(this.validateForm()){

        axios.post('/api/login', {
            breweryName: e.target.breweryName.value,
            password: e.target.password.value,
            breweryInfo: e.target.breweryName.value
        })
        .then(res => {
            let token = res.data.token
            sessionStorage.setItem('authToken', token)
            this.props.history.push('/upload')
        })
        .catch((error) => {
            console.log(error);
          });
    }
    }

    render() {
    return (

        <Slide bottom>
        <div className="login">
            <div class="login__wrapper">
                <h1 className="login__header">Brewery Log In</h1>
                <form onSubmit={this.handleLogIn}>
                    <Input label="Brewery Name" name="breweryName" type="text" onChange={this.handleChange} className={this.state.isValid
                    ? "login__input"
                    : "login__input--error"}/>
                    <p className={this.state.isValid
                    ? "login__warning--none"
                    : "login__warning--error"}>This field is required</p>
                    <Input label="Password" name="password" type="password"  onChange={this.handleChange} className={this.state.isValid
                    ? "login__input"
                    : "login__input--error"}/>
                    <p className={this.state.isValid
                    ? "login__warning--none"
                    : "login__warning--error"}>This field is required</p>
                    <div className="login__button-wrapper">
                    <button className="login__submit" type="submit">Log In</button>
                    <Link className="login__signup" to="/signup">Sign Up</Link>
                    </div>
                </form>
            </div>
           
        </div>
        </Slide>
    )
    }
}

export default LogIn;