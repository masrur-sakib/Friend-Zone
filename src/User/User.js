import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import "./User.css"

const User = (props) => {
    // console.log(props);
    return (
        <div>
            <div className="row user">
                <div className="col-md-4 img_container">
                    <img src={props.user.picture} alt="" />
                </div>
                <div className="col-md-8">
                    <h4><a href="">{props.user.name}</a></h4>
                    <h6>Email: {props.user.email}</h6>
                    <h6>Phone: {props.user.phone}</h6>
                    <h6>Website: {props.user.website}</h6>
                    <h6><strong>Salary: {props.user.salary}</strong></h6>
                    <br/>
                    <button className="btn btn-info" onClick={() => props.handleAddUsers(props.user)}><FontAwesomeIcon icon={faUserPlus} />  Add Friend</button>
                </div>
            </div>
        </div>
    );
};

export default User;