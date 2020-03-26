import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import "./Timeline.css"
import fakeData from '../fakeData';
import {useState} from "react";
import User from '../User/User';
import Summary from '../Summary/Summary';


const Timeline = () => {
    const first10 = fakeData;
    const [users, setUsers] = useState(first10);
    const [friendsAdded, setfriendsAdded] = useState([]);
    const handleAddUsers = (user) =>{
        const newFriend = [...friendsAdded, user];
        setfriendsAdded(newFriend);
    }

    return (
        <div>
            <div className="row timeline">
                <div className="col-md-8 user_container">
                    <div>
                        {
                            users.map(usr => <User 
                                handleAddUsers = {handleAddUsers}
                                user={usr}
                                ></User>)
                        }
                    </div>
                </div>
                    <div className="col-md-4">
                        <Summary friendsAdded={friendsAdded}></Summary>
                    
                    </div>
                </div>
            </div>
    );
};
export default Timeline;

