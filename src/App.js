import React,{Component} from 'react';
import NavBar from './navbar';
import Players from './players';
import Player from './player';

class App extends Component {

    render(){
        return<React.Fragment>
            <NavBar/>
            <div className="container">
                <Player/>
                <Players/>      
            </div>
        </React.Fragment>
    }
}

export default App;
