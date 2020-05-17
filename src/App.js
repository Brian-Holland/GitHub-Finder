import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import axios from "axios";
import "./App.css";

class App extends Component {
    state = {
        users: [],
        loading: false,
    };

    async componentDidMount() {
        //set loading state while we wait for api request
        this.setState({ loading: true });
        //wait for api request to come back
        const res = await axios.get(
            `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
        );
        //use setState to change state of users and loading status
        this.setState({ users: res.data, loading: false });
    }
    render() {
        return (
            <div className="App">
                <Navbar title="GitHub Finder" icon="fab fa-github" />
                <div className="container">
                    <Search />
                    <Users
                        loading={this.state.loading}
                        users={this.state.users}
                    />
                </div>
            </div>
        );
    }
}

export default App;
