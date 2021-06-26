import React from 'react';
import "./Cardmidleft.css";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ArchiveIcon from '@material-ui/icons/Archive';
import Chart from "../../images/Chart.png";

const Cardmidleft = () => {
    return (
        <div className="cardl">
            <div className="texttop">
                <h5>Applications Received</h5>
                <p>This year</p>
                <p>This week</p>
                <p>Today</p>
                <ArchiveIcon fontSize="small" />
                <p>Download report</p>
                <MoreVertIcon fontSize="small" />
            </div>
            <div>
                <img className="im" src={Chart} alt="Logo" />;
            </div>
        </div>
    )
}

export default Cardmidleft
