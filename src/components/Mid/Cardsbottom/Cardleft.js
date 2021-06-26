import React from 'react';
import "./Cardleft.css";
import TelegramIcon from '@material-ui/icons/Telegram';
import CallMadeIcon from '@material-ui/icons/CallMade';
import Button from '@material-ui/core/Button';


const Cardleft = () => {
    return (
        <div className="cardleft">
            <div className="cardhead">
                <h5 className="head">Referals and Campaign Stats</h5>
                <TelegramIcon className="icon" />
                <div className="textright">
                    <h6 className="forty">40 Campaigns sent in total</h6>
                    <h6 className="four">4 Campaigns sent in last month</h6>
                </div>
            </div>
            <div className="content">
                <div className="contentdiv marg">
                    <h4>User's Reached</h4>
                    <div className="arrowper">
                        <CallMadeIcon className="fa fa-plus-circle" fontSize="small" />
                        <p>+3.59%</p>
                    </div>
                    <h3>7956</h3>
                </div>
                <div class="vl"></div>
                <div className="contentdiv">
                    <h4>Referals</h4>
                    <div className="arrowper">
                        <CallMadeIcon className="fa fa-plus-circle" fontSize="small" />
                        <p>+9.01%</p>
                    </div>
                    <h3>0662</h3>
                </div>
                <div class="vl"></div>
                <div className="contentdiv">
                    <h4>Shares</h4>
                    <div className="arrowper">
                        <CallMadeIcon className="fa fa-plus-circle" fontSize="small" />
                        <p>+39.18%</p>
                    </div>
                    <h3>1478</h3>
                </div>
                <div class="vl"></div>
                <div className="contentdiv">
                    <h4>Applications</h4>
                    <div className="arrowper">
                        <CallMadeIcon className="fa fa-plus-circle" fontSize="small" />
                        <p>+12.00%</p>
                    </div>
                    <h3>0564</h3>
                </div>
            </div>
            <div className="buttons">
                <div className="btnleft">
                    <Button variant="contained" color="primary">
                        <p>Start a New Campaign now</p>
                    </Button>
                </div>
                <div className="btnright">
                    <Button variant="contained" color="secondary">
                        <p>Pause All Running Campaigns</p>
                    </Button>
                </div>
            </div>

        </div>
    )
}

export default Cardleft
