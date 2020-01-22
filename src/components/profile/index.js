import React, {Component} from 'react'
import PropTypes from 'prop-types';
import User from '../../user'

import './style.css'
class Profile extends Component{
    constructor(props){
        super(props);
        this.state = {
            reverted: false
        }

    }
    render(){
        let norm = JSON.parse(localStorage.getItem('dateInformation'));
        if(norm===null){
            norm=[];
        }
        const listItems = norm.map((d) =>
            <tr className='' key={d.id} >
                <td>{d.date.substr(0,10)}</td>
                <td>{d.text}</td>
            </tr>);
        return(
            <div className="wrapper profile">
              <div className="center">
                <br/>
                <h2>Любая информация об авторизованном пользователе</h2>
                <h3>Итак, пользователь, это все что у меня есть на тебя:</h3>
                <h3>Ты вошел как {User.name}</h3>
                <h3>Твой пароль ********</h3>
                <h3>Тебя зовут {User.firstName}</h3>
                <h3>Твоя фамилия {User.secodName}</h3>
                <h3>Дата твоего рождения {User.dateOfBirthday}</h3>
                <h2>Мои события в календаре:</h2>
                <table className="EventDiv">
                  <tr>
                    <th>Дата</th>
                    <th>Событие</th>
                  </tr>
                    {listItems}
                </table>

              </div>

            </div>
        )
    }

}
Profile.propTypes = {
    name: PropTypes.string
};

export default Profile
