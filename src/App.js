import React,{Component, Fragment} from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import User from './Components/User';

import axios from 'axios';
import Search from './Components/Search';
import { Alert } from './Components/Alert';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import { About } from './Components/About';

class App extends Component {

  state={
    user:[],
    loading:false,
    alert:null
  }
  
    // async componentDidMount(){
       
    //   this.setState({loading:true});
  
    //   const res=await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
    //   &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
      
    //   this.setState({user:res.data,loading:false});
  
    // }
  
    clearUsers=()=>{
      this.setState({user:[],loading:false});
    }

  
  searchUsers = async text=>{

    this.setState({loading:true})
    const res=await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
    &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    
    this.setState({user:res.data.items,loading:false});
  }

  setAlert=(msg,type)=>{
      this.setState({alert:{msg,type}});

      setTimeout(()=>this.setState({alert:null}),5000);

  }


  render(){


    return (
      <Router>
      <div className="App">
        <NavBar/>
        <div className="container">
          <Alert alert={this.state.alert}/>
          <Switch>
            <Route exact path="/" render={props=>(
              <Fragment>
                <Search searchUsers={this.searchUsers} 
                clearUsers={this.clearUsers}
                showClear={this.state.user.length>0 ? true:false}
                setAlert={this.setAlert}/>
              <User loading={this.state.loading} users={this.state.user}/>

              </Fragment>
            )}/>
          </Switch>
            <Route exact path="/about" component={About} />
      
        </div>
      </div>
      </Router>
    );

  }
}

export default App;


