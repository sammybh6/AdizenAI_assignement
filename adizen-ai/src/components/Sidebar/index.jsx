import { useState } from "react"

import {Sidebar as ProSidebar, Menu, MenuItem, useProSidebar, sidebarClasses, menuClasses} from "react-pro-sidebar"

import {Box, IconButton, menuItemClasses, Typography, Divider, useTheme} from "@mui/material"
import {Link} from "react-router-dom"
import { colorTokens } from "../../theme"

import { HomeOutlined, MenuOutlined } from "@mui/icons-material"
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import AnalyticsIcon from '@mui/icons-material/Analytics';

// const Item = ({title, to, icon, selected, setSelected}) => {
//     const theme = useTheme();
//     const colors = colorTokens(theme.palette.mode);

//     return (
//         <>

//             {/* <Link to={to}>
//                 <MenuItem 
//                     active={selected === title} 
//                     style={{ color : colors.grey[100], backgroundColor: "transparent", padding: "10px 0px 10px 0px"}}
//                     onClick={() => setSelected(title)}
//                     icon={icon}
//                     component="div"
//                 > 
//                     <Typography>{title}</Typography>
//                 </MenuItem>
//             </Link> */}
            
//         </>
//     )
// }

const Sidebar = () => {
    const theme = useTheme();
    const colors = colorTokens(theme.palette.mode);

    const { collapseSidebar, collapsed, toggleSidebar } = useProSidebar();

    const [selected, setSelected] = useState("Dashboard");

    return (
        <Box >
            <ProSidebar 
                defaultCollapsed={false}
                rootStyles={{
                    [`.${sidebarClasses.container}`]: {
                        background: `${colors.primary[400]} !important`,
                        height: "100vh",
                    },
                    [`& .${menuClasses.root}`]: {
                        padding: "5px 25px 5px 20px !important",
                    },
                    [`& .${menuClasses.active}`]: {
                        color: "#6870fa !important",
                    },
                    [`.${menuItemClasses.root}:hover`]: {
                        color: "#000000 !important",
                    },
                }}
            >
                <Menu iconShape="square" >
                    <MenuItem
                        onClick={() => collapseSidebar()}
                        icon={collapsed ? <MenuOutlined /> : undefined}
                        style = {{
                            margin: "10px 0 20px 0",
                            color: colors.grey[100],
                            backgroundColor: "transparent",
                            padding: "10px 0px 10px 0px"
                        }}
                    >
                        {!collapsed && (
                            <Box
                                display="flex"
                                justifyContent="space-between"
                                alignItems="center"
                                ml = "15px"
                            >
                                <Typography variant="h3" sx={{color: colors.grey[100]}}>
                                    Menu
                                </Typography>
                                <IconButton type="button" onClick={() => toggleSidebar()}>
                                    <MenuOutlined />
                                </IconButton>
                            </Box>
                        )}
                    </MenuItem>

                <Link to="/" style={{textDecoration:"none"}}>
                    <Box 
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                    >

                    {!collapsed ? (
                        
                            <MenuItem 
                                active={selected === "home"} 
                                style={{ color : colors.grey[100], backgroundColor: "transparent", padding: "10px 0px 10px 0px"}}
                                onClick={() => setSelected("home")}
                                component="div"
                            > 
                                <Typography
                                    sx={{
                                        color: colors.grey[100],
                                        textAlign: "center",
                                    }}
                                >Home</Typography>
                            </MenuItem>
                            ) : <IconButton
                                    sx={{
                                        color: colors.grey[100],
                                        backgroundColor: "transparent",
                                        padding: "10px 0px 10px 0px"

                                    }}
                                    >
                                    <HomeOutlined/>
                                </IconButton>
                    }
                    </Box>
                </Link>
                        <Divider>
                        </Divider> 
                    <Link to="/starred" style={{textDecoration:"none"}}>
                        <Box 
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        >
                    

                        {!collapsed ? (
                        <MenuItem 
                                active={selected === "favorites"} 
                                style={{ color : colors.grey[100], backgroundColor: "transparent", padding: "10px 0px 10px 0px"}}
                                onClick={() => setSelected("favorites")}
                                component="div"
                            > 
                                <Typography
                                sx={{
                                        color: colors.grey[100],
                                        textAlign: "center",
                                    }}>Favorites</Typography>
                            </MenuItem>
                            ) : <IconButton
                                    sx={{
                                        color: colors.grey[100],
                                        backgroundColor: "transparent",
                                        padding: "10px 0px 10px 0px"
                                    }}
                                    >
                                    <StarOutlineIcon/>
                                </IconButton>
                        }
                    </Box>
                    </Link>

                </Menu>
            </ProSidebar>
        </Box>
    )
}

export default Sidebar