import React from 'react';
import "./App.css";
import Leftbar from './components/Leftbar/Leftbar';
import Midbar from './components/Mid/Midbar';
import Rightbar from './components/Rightbar/Rightbar';

const App = () => {
    return (
        <div className="outer">
            <Leftbar />
            <Midbar />
            <Rightbar />
        </div>
    )
}

export default App;