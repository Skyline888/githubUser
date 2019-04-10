import React, { Component } from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FetchError from './components/errors';
import UserList from './components/UserList/';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import connect from "react-redux/es/connect/connect";
import { fetchUsers } from './action';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userName: '',
            openError: false,
        };
    }

    componentDidUpdate( prevProps) {
        if ( this.props.gitHubApi.error && this.props.gitHubApi !== prevProps.gitHubApi) { // this.props.gitHubApi !== prevProps.gitHubApi.error
            this.handleToggleAlert();
        }
    };

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };

    validateForm() {
        return this.state.userName.length > 0
    };

    handleSubmitUser = (event) => {
        event.preventDefault();
        // if() {
        //
        // }
        this.setState({
            userName: ''
        });
        this.props.getUserQuery(this.state.userName );
    };

    handleToggleAlert = () => {
        this.setState({
            openError: !this.state.openError
        });
    };

  render() {
    const { gitHubApi } = this.props;
    const { openError, userName } = this.state;
    const errorProps = { error: gitHubApi.error, open: openError };

    return (
        <div className="App">
            <CssBaseline />
            <div className="root">
                <AppBar position="static" color="default">
                    <Toolbar className="text-center">
                        <Typography variant="h6" color="inherit" >
                            User Stared Project
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
            <div className="app-form-section">
                <form className="app-form" noValidate autoComplete="off"
                      onSubmit={this.handleSubmitUser}
                >
                    <FormControl>
                        <InputLabel htmlFor="userName">Add user name</InputLabel>
                        <Input required
                            id="userName"
                            label="Enter user name"
                            className="from_username"
                            type="text"
                            value={userName}
                            onChange={this.handleChange}
                        />
                    </FormControl>
                    <Button type="submit" variant="contained" className="form-button"
                            disabled={!this.validateForm()} //
                    >
                        Add user
                    </Button>
                </form>
            </div>
            <div>

            </div>
            <UserList projectProps={gitHubApi.userProject} userProps={gitHubApi.usersInfo}/>

            {this.props.gitHubApi.error.length > 0 &&  (
                // {this.handleToggleAlert();}
                <FetchError eventAlert={this.handleToggleAlert} errorMessage={errorProps}/>
            )}
        </div>
    )
  }
}

const mapStateToProps = (store) => ({
    gitHubApi: store.gitHubApi,
});

const mapDispatchToProps = ( dispatch ) => ({
    getUserQuery : (userName) => {
        dispatch( fetchUsers(userName));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

