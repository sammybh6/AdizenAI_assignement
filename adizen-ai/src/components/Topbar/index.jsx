import {Box, IconButton, useTheme} from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, colorTokens } from "../../theme";

import { LightModeOutlined, DarkModeOutlined, NotificationsOutlined, SettingsOutlined, PersonOutlined} from "@mui/icons-material";

import { Typography } from "@mui/material";
const Topbar = () => {
    const theme = useTheme();
    const colors = colorTokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);
    
    return (
        <Box display="flex" justifyContent="space-between" p={2}>
            {/* Search bar */}
            <Box 
                display="flex" 
                padding="10px"
            >
                <Typography sx={{color: colors.grey[100], fontWeight:"bold", fontSize:"20px"}}>
                    Adizen AI
                </Typography>
            </Box>
            
            {/* Icons  */}
            <Box display="flex">
                <IconButton type="button" sx={{p: 1}} onClick={colorMode.toggleColorMode}>
                    {theme.palette.mode === "dark" ? <DarkModeOutlined /> : <LightModeOutlined />}
                </IconButton>
                <IconButton type="button" sx={{p: 1}}>
                    <NotificationsOutlined />
                </IconButton>
                <IconButton type="button" sx={{p: 1}}>
                    <SettingsOutlined />
                </IconButton>
                <IconButton type="button" sx={{p: 1}}>
                    <PersonOutlined />
                </IconButton>
            </Box>

        </Box>
    )
}

export default Topbar