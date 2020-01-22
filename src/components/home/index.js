import React, {Component} from 'react';
import './style.css';
import logo1 from './cats/cat1.jpg'
import logo2 from './cats/cat2.jpg'
import logo3 from './cats/cat3.jpg'
import logo4 from './cats/cat4.jpg'
import logo5 from './cats/cat5.jpg'
import logo6 from './cats/cat6.jpg'
import logo7 from './cats/cat7.jpg'
import logo8 from './cats/cat8.jpg'
import logo9 from './cats/cat9.jpg'


class Home extends Component{

    constructor(props){
        super(props);
        this.state = {
            reverted: false
        }

    }
    render(){

        return(
            <div className="wrapper">
              <div className="center">
                <h1>Здесь должна быть какая-то интересная информация  </h1>
                <h2>Но мы все знаем, что все любят котиков, так что почему бы и нет...</h2>
                <div>
                  <img src={logo1} className="cat1" title="Я и то, чего у меня нет" alt=''/>
                  <img src={logo2} className="cat1" alt=''/>
                  <img src={logo7} className="cat" alt=''/>
                  <img src={logo5} className="cat" alt=''/>
                  <img src={logo3} className="cat" alt=''/>
                  <img src={logo4} className="cat" alt=''/>
                  <img src={logo6} className="cat" alt=''/>
                  <img src={logo8} className="cat" alt=''/>
                  <img src={logo9} className="cat2" alt=''/>
                </div>
              </div>
            </div>
        )
    }

}

export default Home
