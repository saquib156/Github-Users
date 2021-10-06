import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

    const [searchUser, setSearchUser] = useState("");

    const [storeData, setStoreData] = useState([]);

    let githubUsers = [];

    useEffect(() => {
        const gitUsers = gitUsersList();
        setStoreData(gitUsers);
    }, []);

    const gitUsersList = () => {
        let usersList = localStorage.getItem("data");
        if(usersList !== null){
            githubUsers = JSON.parse(usersList);
        }
        return githubUsers;
    }

    const handleSearchUser = (user) => {
        setSearchUser(user);
    }

    const fetchUserData = async () => {
        const gitUsers = gitUsersList();

        const res = await fetch(
          `https://api.github.com/users/${searchUser}`
        ).then((res) => res.json());
        
        gitUsers.push(res);
        localStorage.setItem("data", JSON.stringify(gitUsers));

        setStoreData(gitUsers);
      };

    return (
        <>  
            <div className="header">
                <input type="text" className="search-input" value={searchUser} onChange={(e) => handleSearchUser(e.target.value)} />
                <button type="button" className="search-btn" onClick={() => fetchUserData()}>Search</button>
            </div>

            <h2 className="user-head">Searched Users</h2>

            <div className="users-div">
                {storeData.map((user) => (
                    <Link to={`/${user.id}`}>
                        <div className="user-block" key={user.id}>
                            <img src={user.avatar_url} width="300" height="300" alt="Profile Pic" />
                            <div className="user-title">{user.name ? user.name : user.login}</div>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    );
};

export default Home;