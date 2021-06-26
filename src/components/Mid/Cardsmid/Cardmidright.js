import React from 'react'
import "./Cardmidright.css";
import Brightness1Icon from '@material-ui/icons/Brightness1';
import LinearProgress from '@material-ui/core/LinearProgress';

const Cardmidright = () => {
    return (
        <div className="midright">
            <h4 >Total Applications</h4>
            <div className="layer">
                <Brightness1Icon color="primary" className="icn" fontSize="small" />
                <h4 style={{ color: "blue" }}>Applications</h4>
                <LinearProgress className="bar" variant="determinate" value={40} />
            </div>
            <div className="layer">
                <Brightness1Icon color="action" className="icn" fontSize="small" />
                <h4 style={{ color: "gray" }}>Short Listed</h4>
                <LinearProgress className="bar" variant="determinate" value={60} />
            </div>
            <div className="layer">
                <Brightness1Icon color="secondary" className="icn" fontSize="small" />
                <h4 style={{ color: "red" }}>Rejected</h4>
                <LinearProgress className="bar" variant="determinate" value={30} />
            </div>
            <div className="layer">
                <Brightness1Icon color="disabled" className="icn" fontSize="small" />
                <h4 style={{ color: "lightcoral" }}>On Hold</h4>
                <LinearProgress className="bar" variant="determinate" value={20} />
            </div>
            <div className="layer">
                <Brightness1Icon className="icn" fontSize="small" />
                <h4 style={{ color: "white" }}>Replied</h4>
                <LinearProgress className="bar" variant="determinate" value={80} />
            </div>
        </div>
    )
}

export default Cardmidright;
