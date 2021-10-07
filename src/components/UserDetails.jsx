import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

const UserDetails = ({ match }) => {
  console.log(match.params.id);
  const [item, setItem] = useState([]);

  useEffect(() => {
    fetchUserDetails();
  }, []);

  const fetchUserDetails = async () => {
    const res = await fetch(
    `https://api.github.com/users/${match.params.id}`
    ).then((res) => res.json());
    //setItem(res);
    console.log(res);
  };
  return (
    <>
        <div className="header">
            <Link to="/"><h2>Home</h2></Link>
        </div>
    </>
  );
};

export default UserDetails;