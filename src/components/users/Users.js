import React, { Component } from "react";
import UserItem from "./UserItem";

class Users extends Component {
    state = {
        users: [
            {
                id: "1",
                login: "Brian-Holland",
                avatar_url:
                    "https://avatars1.githubusercontent.com/u/56670523?s=460&u=f05d30ea9a7fa9c297a34610804d724ff41988db&v=4",
                html_url: "https://github.com/Brian-Holland",
            },
            {
                id: "2",
                login: "Doug-Holland",
                avatar_url:
                    "https://avatars1.githubusercontent.com/u/56670523?s=460&u=f05d30ea9a7fa9c297a34610804d724ff41988db&v=4",
                html_url: "https://github.com/Brian-Holland",
            },
            {
                id: "3",
                login: "Chase-Holland",
                avatar_url:
                    "https://avatars1.githubusercontent.com/u/56670523?s=460&u=f05d30ea9a7fa9c297a34610804d724ff41988db&v=4",
                html_url: "https://github.com/Brian-Holland",
            },
        ],
    };

    render() {
        return (
            <div>
                {this.state.users.map(user => (
                    <UserItem key={user.id} user={user} />
                ))}
            </div>
        );
    }
}

export default Users;
