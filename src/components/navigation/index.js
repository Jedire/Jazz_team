import React, {Component} from 'react'
import PropTypes from 'prop-types';


import './style.css'
class Navigation extends Component{
    constructor(props){
        super(props);
        this.state = {
            reverted: false
        };
    }

    render(){
        return(
            <div className='NavDiv'>
              <div id="header">
                  <div className="center">
                    <div  id="logo"><a  href="/">Just Logo</a></div>
                    <div id="menu">
                      <ul className='nav'>
                          <li><a href='/'><span>Главная</span></a></li>
                          <li><a href={this.props.login? '/profile':'/login'}><span>{this.props.login?this.props.name :'Мой кабинет'}</span></a></li>
                          <li><a href='/info'><span>Информация</span></a></li>
                          {this.props.login? <li><a href='/calendar'><span>Календарь</span></a></li>:''}
                      </ul>
                    </div>
                  </div>
                </div>
            </div>
        )
    }

}
Navigation.propTypes = {
    login: PropTypes.string,
    name: PropTypes.string
};

export default Navigation
