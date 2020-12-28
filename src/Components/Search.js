import React, { Component } from 'react'

export class Search extends Component {

    state={
        text:""
    }

    onChange=(e)=>{
        this.setState({
            text:e.target.value
        })
    }

    onSubmit=(e) =>{
        e.preventDefault();

        if(this.state.text===""){
            this.props.setAlert('Please Enter Something','light');
        }else{
            this.props.searchUsers(this.state.text);
            this.setState({text:""});
        }

    }

    render() {
        return ( 
            <div>
                <form className="form" onSubmit={this.onSubmit}>
                    <input
                     type="text"
                      name="text" 
                      placeholder="Search Users.."
                      value={this.state.text}
                      onChange={this.onChange}
                      />
                    <input type="submit" 
                    value="Search" 
                    className="btn btn-dark btn-block"/>
                </form>
                {this.props.showClear && <button className="btn btn-light btn-block" onClick={this.props.clearUsers}>Clear All</button>}
                
            </div>
        )
    }
}

export default Search;