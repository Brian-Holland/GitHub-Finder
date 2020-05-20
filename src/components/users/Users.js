import React, { useContext } from "react";
import UserItem from "./UserItem";
import Spinner from "../layout/Spinner";
import GithubContext from "../../context/github/githubContext";

const Users = () => {
    const githubContext = useContext(GithubContext);

    const { loading, users } = githubContext;
    //if users are still loading...
    if (loading) {
        //show spinner wheel
        return <Spinner />;
        //if not...
    } else {
        //show list of users
        return (
            <div className="grid-3 grid-2">
                {users.map(user => (
                    <UserItem key={user.id} user={user} />
                ))}
            </div>
        );
    }
};

export default Users;
