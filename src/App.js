import React,{Component} from 'react';
import axios from "axios";
import NavBar from './navbar';
import Players from './players';
import Player from './player';

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            players: [],
            player:{username:"",firstName:"",lastName:"",number:"",position:""}
        }
    }

    componentDidMount = () => {
        this.fetchData();
    }

    fetchData = async () => {
        this.setState({ loading: true })
        let {data}  = await axios.get(`https://player-nauman.herokuapp.com/`);

        this.setState({ players: data, loading: false });
    }

    onInputChange = (event) => {
        const { name, value } = event.target;
        const { player } = this.state;

        player[name] = value;
        this.setState({ player });
    }

    onPlayerSelect = (player) => {
        this.setState({ player });
    }

    addPlayer = async () =>{
        const { player } = this.state;
        await axios.post(`https://player-nauman.herokuapp.com/`, player);
        this.setState({ player:{username:"",firstName:"",lastName:"",number:"",position:""} });
        this.fetchData();
    }
    
    updatePlayer = (player)=>{}

    deletePlayer = (id)=>{}
    

    render(){
        let {player, players ,loading} = this.state;
        return<React.Fragment>
            <NavBar/>
            <div className="container">
                <Player 
                    player={player} 
                    onInputChange={this.onInputChange} 
                    addPlayer={this.addPlayer}
                />
                <Players 
                    players={players} 
                    loading={loading} 
                    onPlayerSelect={this.onPlayerSelect} 
                    updatePlayer={this.updatePlayer} 
                    deletePlayer={this.deletePlayer}
                />      
            </div>
        </React.Fragment>
    }
}

export default App;
