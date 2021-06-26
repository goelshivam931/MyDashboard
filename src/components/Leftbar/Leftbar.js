import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import ForumIcon from '@material-ui/icons/Forum';
import FolderIcon from '@material-ui/icons/Folder';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import ChatIcon from '@material-ui/icons/Chat';
import SettingsIcon from '@material-ui/icons/Settings';
import TextureIcon from '@material-ui/icons/Texture';
import "./Leftbar.css";


const Leftbar = () => {
    return (
        <div className="nav" >
            <TextureIcon className="martop fa fa-plus-circle" style={{ fontSize: 30 }} />
            <HomeIcon className="mar" />
            <PeopleAltIcon className="mar" />
            <ForumIcon className="mar" />
            <FolderIcon className="mar" />
            <CameraAltIcon className="mar" />
            <ChatIcon className="mar" />

            <SettingsIcon className="mars" />
        </div>
    )
}

export default Leftbar
