import React from 'react';
import "./Card.css";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import CallMadeIcon from '@material-ui/icons/CallMade';
import CircularProgress from '@material-ui/core/CircularProgress';

const Card = (props) => {

    return (
        <div className="card">
            <div className="toptext">
                <h5>{props.text}</h5>
                <MoreHorizIcon className="horicon" />
            </div>
            <div className="bottext">
                <div className="cont">
                    <h3>{props.val}</h3>
                    <div className="arrowp">
                        <CallMadeIcon className="fa fa-plus-circle" fontSize="small" />
                        <p>{props.arrowper}</p>
                    </div>
                </div>
                <div className="pricn">
                    <CircularProgress variant="determinate" classname="proicon" value={props.per} />
                    <h3>{props.per}%</h3>
                </div>
            </div>


        </div>
    )
}

export default Card
