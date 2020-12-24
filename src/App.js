import {Component} from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import User from './Components/User';
import UserItems from './Components/UserItems';
import axios from 'axios';
import Search from './Components/Search';

class App extends Component {

  state={
    user:[],
    loading:false
  }

  async componentDidMount(){
    this.setState({loading:true});

    const res=await axios.get('https://api.github.com/users');
    this.setState({user:res.data});

  }


  searchUsers=(text)=>{
    console.log(text);
  }

  render(){
    return (
   
      <div className="App">
        <NavBar/>
        <div className="container">
          <Search searchUsers={this.searchUsers}/>
        <User loading={this.state.loading} users={this.state.user}/>

        </div>
      </div>
    );

  }
}

export default App;
