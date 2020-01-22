import React, {Component} from 'react'
import './style.css'
import User from '../../user'
import logo1 from './cat1.jpg'

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            inputLogin: '',
            inputPassword: ''
        };
    }

    checkAuthorizationPerson(){
        if (this.state.inputLogin===User.name&&this.state.inputPassword===User.pass) {
            return true;
        }
        return false;

    }
    authorizationPerson = () =>{
        if (this.checkAuthorizationPerson()) {
            this.props.setName(User.name);
            localStorage.setItem('PersonState', User.name);
            localStorage.setItem('loginin', 'true');
            document.location.replace("/profile");
        } else {
            alert('Имя пользователя или пароль введены неверно');
        }
    }
    updateInputLogin = (evt) =>{
        this.setState({
            inputLogin: evt.target.value
        });
    }
    updateInputPassword = (evt) =>{
        this.setState({
            inputPassword: evt.target.value
        });
    }


    render(){

        return(
          <div className="wrapper_login">
          <img src={logo1} className="cat_half" />
            <div className='DivLogin'>
                  <h3>Логин</h3>
                  <input value={this.state.inputLogin} onChange={evt => this.updateInputLogin(evt)} type='text'/>
                  <h3>Пароль</h3>
                  <input className="input" value={this.state.inputPassword} onChange={evt => this.updateInputPassword(evt)} type='password'/>
                  <button  onClick={this.authorizationPerson}>Войти</button>
            </div>
          </div>
        )
    }


}

export default Login
