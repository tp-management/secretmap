import React, {useContext, useState} from 'react';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import styles from './authNavPanel.module.css';
import { AuthContext } from '../../contextAPI/AuthContext';
import { useNavigate } from 'react-router-dom';

// logos
import messages_logo from "../../assets/dropDown/messages.png"
import notification_logo from "../../assets/dropDown/notifications.png"
import Notifications from '../../Pages/PopUpPages/Notifications';
import Master from '../../assets/benefits/master.png';


export default function AuthNavPanel(props) {

    const [anchorEl, setAnchorEl] = useState(null);
    const [showNavModal, setShowNavModal] = useState(false);
    const open = Boolean(anchorEl);
    
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const navigate = useNavigate();
    const User = useContext(AuthContext);
    const ActiveUser = User.authenticatedUser || null;
    const UserData = ActiveUser ? ActiveUser.data : null;
    
    const logoutHandler = () => {
        User.logout();
        navigate("/");
    }

    const getPointHandler = () => {
        handleClose();
        return navigate("/benefits");
    }

    const navigateToProfile = () => {
        handleClose();
        return navigate(`/profile/${UserData._id}`)
    }

    const onNavigationsShowHandler = () => {
        handleClose();
        return setShowNavModal(true);
    }

    // console.log("notifications in authNav: ", props.notifications)

    return (
        <div className={styles.container}>
            <Box sx={{ display: 'flex', justifyContent:"right", alignItems: 'center', textAlign: 'center' }}>
                { UserData &&
                    <>
                        <div onClick={()=>{navigate(`/benefits`)}} className={styles.level_bar}>
                            <p>Level</p>
                            <img src={require(`../../assets/level_${UserData.level}.png`)} alt="" />
                        </div>

                        <div onClick={()=>{navigate(`/benefits`)}} className={styles.bonus_bar}>
                            <img src={require("../../assets/trophy.png")} alt='' style={{ marginRight: "10px" }}/>
                            <p>Bonuses</p>
                            <span style={{ color:"rgba(238, 125, 21, 1)", margin: "0 10px" }}>{UserData.points || 0}</span>
                        </div>

                    </>
                }
                <Tooltip title="Account menu">
                <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{ ml: 2, backgroundColor: "white"}}
                    aria-controls={open ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                >
                    <img className={styles.logo} src={UserData.avatar} alt="logo" />
                    {
                        props.notifications && props.notifications.length > 0 &&
                        <span className={styles.notifications_bell_amount}>{props.notifications.length}</span>
                    }
                </IconButton>
                </Tooltip>
            </Box>

            <Notifications
                show={showNavModal}
                onClose={()=>setShowNavModal(false)}
                notifications={props.notifications}
            />

            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                PaperProps={{
                elevation: 0,
                sx: {
                    overflow: 'visible',
                    bgcolor: "rgba(238, 125, 21, 1)",
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    },
                    '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 20,
                    width: 15,
                    height: 15,
                    bgcolor: 'rgba(238, 125, 21, 1)',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                    },
                },
                
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <div className={styles.dropDownContainer}>
                    <MenuItem onClick={navigateToProfile}>
                        <div className={styles.profile_link}>
                            <a href={false}>Visit your profile</a>
                        </div>
                    </MenuItem>

                    <MenuItem onClick={getPointHandler}>
                        <div className={styles.body}>
                            <div>
                                <img src={require("../../assets/trophy.png")} alt="" />
                                <h1>{UserData.points > 1 ? `${UserData.points} bonus points` : `${UserData.points} bonus point`}</h1>
                            </div>

                            {/* <div>
                                <img src={messages_logo} alt="" />
                                <h1>Get more points</h1>
                            </div> */}
                        </div>
                    </MenuItem>

                    <MenuItem>
                        <div className={styles.body}>
                            <div>
                                <img src={messages_logo} alt="" />
                                <h1>Messages <span>{`(${0})`}</span></h1>
                            </div>
                        </div>
                    </MenuItem>

                    <MenuItem onClick={onNavigationsShowHandler}>
                        <div className={styles.body}>
                            <div>
                                <img src={notification_logo} alt="" />
                                <h1>Notifications <span>{`(${(props.notifications && props.notifications.length) || 0})`}</span></h1>
                            </div>
                        </div>
                    </MenuItem>
                    
                    <MenuItem style={{ backgroundColor: "rgba(238, 125, 21, 1)" }}> 
                        <div onClick={logoutHandler} className={styles.logout_link}>
                            <h1>Logout</h1>
                        </div>
                    </MenuItem>
                </div>

            </Menu>
        </div>
    );
}