import React, { Component } from "react";

class UserItem extends Component {
    state = {
        id: "id",
        login: "Brian-Holland",
        avatar_url:
            "https://avatars1.githubusercontent.com/u/56670523?s=460&u=f05d30ea9a7fa9c297a34610804d724ff41988db&v=4",
        html_url: "https://github.com/Brian-Holland",
    };

    render() {
        const { avatar_url, login, html_url } = this.state;

        return (
            <div className="card text-center">
                <img
                    src={avatar_url}
                    alt="avatar"
                    className="round-img"
                    style={{ width: "60px" }}
                />
                <h2>{login}</h2>
                <a href={html_url} className="btn btn-dark btn-sm my-1">
                    More
                </a>
            </div>
        );
    }
}

export default UserItem;
