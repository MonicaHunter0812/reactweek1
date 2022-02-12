import React from 'react';

export default class LoginForm extends React.Component{
    render(){
        return (
           <div class="container form-control border border-primary">
                <form class="card-body">
                <h3>Log In</h3>
                <div className="form-group">
                    <label>Username</label>
                    <input type="username" className="form-control" placeholder="Enter username"/>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password"/>
                </div>
                <button type="submit" className="btn btn-primary btn-block">Submit</button>
            </form>
           </div> 
        );
    }
}