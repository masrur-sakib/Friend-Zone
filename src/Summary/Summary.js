import React from 'react';
import "./Summary.css"

const Summary = (props) => {
    const friendsAddedFinal = props.friendsAdded; 

    let friendsNumber = 0;
    let totalSalary = 0;
    let friendName = [];
    for(let i=0; i<friendsAddedFinal.length; i++){
        const friend = friendsAddedFinal[i];
        const friendSalary = parseFloat(friend.salary);
        const friend_name = friend.name;
        if (friendName.indexOf(friend_name) == -1){
            friendsNumber = friendsNumber + 1;
            totalSalary = totalSalary + friendSalary;
            friendName = friendName + friend_name + "; ";
        }

    }

    return (
        <div className="summary">
            <h4>Summary:</h4>
            <h6>Total Number of Friends Added: <span className="highlight">{friendsNumber}</span></h6>
            <h6>Friends Info: <span className="highlight">{friendName}</span></h6>
            <h6>Total Salary: {totalSalary}</h6>
        </div>
    );
};

export default Summary;