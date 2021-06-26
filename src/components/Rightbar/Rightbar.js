import React from 'react';
import "./Rightbar.css";
import Message from "../images/Message.png";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import AddIcCallIcon from '@material-ui/icons/AddIcCall';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';


const Rightbar = () => {
    return (
        <div className="right">
            <div className="topright">
                <NotificationsIcon />
                <h4 className="name">Shivam Goel</h4>
                <AccountCircleIcon />
            </div>

            <div className="btn-search">
                <Button className="btn" variant="contained" color="primary" >
                    + Add
                </Button>
                <SearchIcon className="searchicon" />
                <input type="text" className="search" placeholder="Search your application here" />
            </div>

            <div className="messagebox">
                <h5 className="text">
                    Hello Shivam Goel,<br />
                    Heyy, You have 6 new messages!</h5>
                <img className="img" src={Message} alt="Logo" />;
                <div className="inside">
                    <h4>New Applicants</h4>
                    <ArrowForwardIosIcon className="righticon" />
                </div>
                <div className="applicant">
                    <AccountCircleIcon />
                    <h5 className="nametext">Ratik Tiwari </h5>
                    <ChatBubbleIcon className="ricon" />
                    <AddIcCallIcon />
                </div>
                <div className="applicant">
                    <AccountCircleIcon />
                    <h5 className="nametext">Kartik Arora </h5>
                    <ChatBubbleIcon className="ricon" />
                    <AddIcCallIcon />
                </div>
                <div className="applicant">
                    <AccountCircleIcon />
                    <h5 className="nametext">Palak Sahani </h5>
                    <ChatBubbleIcon className="ricon" />
                    <AddIcCallIcon />
                </div>
                <div className="applicant">
                    <AccountCircleIcon />
                    <h5 className="nametext">Sanket Batra </h5>
                    <ChatBubbleIcon className="ricon" />
                    <AddIcCallIcon />
                </div>
                <div className="applicant">
                    <AccountCircleIcon />
                    <h5 className="nametext">Hardik Singh </h5>
                    <ChatBubbleIcon className="ricon" />
                    <AddIcCallIcon />
                </div>
                <div className="applicant">
                    <AccountCircleIcon />
                    <h5 className="nametext">Vaibhav Seth </h5>
                    <ChatBubbleIcon className="ricon" />
                    <AddIcCallIcon />
                </div>

            </div>
        </div>
    )
}

export default Rightbar
