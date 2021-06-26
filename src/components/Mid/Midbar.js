import React from 'react'
import Card from "./Cardstop/Card";
import "./Midbar.css";
import Cardpie from './Cardsbottom/Cardpie';
import Cardleft from './Cardsbottom/Cardleft';
import Cardmidright from './Cardsmid/Cardmidright';
import Cardmidleft from './Cardsmid/Cardmidleft';



const Midbar = () => {
    const date = new Date();
    return (
        <div className="outermid">
            <div className="dashboard">
                <h1>Dashboard</h1>
                <h3>{date.toDateString()}</h3>
            </div>
            <div className="midtop">
                <Card text="Total Applications" val="7956" per="70" arrowper="+3.59%" />
                <Card text="Shortlisted Candidates" val="4658" per="60" arrowper="+0.6%" />
                <Card text="Total Applications" val="1501" per="40" arrowper="-0.4%" />
            </div>
            <div className="midmid">
                <Cardmidleft />
                <Cardmidright />
            </div>
            <div className="midbot">
                <Cardleft />
                <Cardpie className="piechart" />
            </div>
        </div>
    )
}

export default Midbar
