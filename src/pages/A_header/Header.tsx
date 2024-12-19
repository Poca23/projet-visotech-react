import React, {FC} from 'react';
import {useNavigate} from 'react-router';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox'; // Exemple d'icône
import MailIcon from '@mui/icons-material/Mail';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

const menu = [
    {name: 'Dashboard', navigation: '/Dashboard'},
    {name: 'Error', navigation: '/Error'},
    {name: 'Favorite', navigation: '/Favorite'},
    {name: 'Login', navigation: '/Login'},
    {name: 'MovieDetails', navigation: '/MovieDetails'},
    {name: 'PeopleDetails', navigation: '/PeopleDetails'},
    {name: 'Research', navigation: '/Research'},
    {name: 'SeenMovie', navigation: '/SeenMovie'},
    {name: 'Setting', navigation: '/Setting'},
];

const Header: FC = () => {
    const navigate = useNavigate();
    const [state, setState] = React.useState<Record<Anchor, boolean>>({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }
                setState({...state, [anchor]: open});
            };

    const list = (anchor: Anchor) => (
        <Box
            sx={{
                width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250,
                color: "#fff",
                backgroundColor: '#1976d2',
                boxShadow: '0 0 10px #1976d2',
                height: '100%',
            }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {menu.map((item, index) => (
                    <ListItem key={item.name} disablePadding>
                        <ListItemButton onClick={() => navigate(item.navigation)}>
                            <ListItemIcon sx={{
                                color: '#fff',
                            }}>
                                {index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}
                            </ListItemIcon>
                            <ListItemText primary={item.name}/>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider/>
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon sx={{
                                color: '#fff',
                            }}>
                                {index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}
                            </ListItemIcon>
                            <ListItemText primary={text}/>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{mr: 2}}
                        onClick={toggleDrawer('left', true)}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        My Application
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            <Drawer
                anchor="left"
                open={state.left}
                onClose={toggleDrawer('left', false)}
            >
                {list('left')}
            </Drawer>
        </Box>
    );
};

export default Header;
