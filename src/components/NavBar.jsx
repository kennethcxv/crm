import { AppBar, Toolbar,IconButton, Stack, Button } from "@mui/material";
import { Link, Router, Link as RouterLink } from "react-router-dom";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import ToggleOffOutlinedIcon from "@mui/icons-material/ToggleOffOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import HubSpotLogo from "../assets/HubSpotLogo.png";


const NavBar = () => {
  const utilityButtonSx = {
    fontSize: 11.5,
    fontWeight: 800,
    textTransform: "none",
  };
  const navBarSx = {
    fontSize:15,
    fontWeight:800,
    textTransform:"none"
  }

  return (
    <AppBar
      position="static"  
      sx={{ bgcolor: "background.paper", color: "text.secondary" , boxShadow: "0px 2px 6px rgba(0,0,0,0.10)", "& .MuiSvgIcon-root": { fontSize: 18 },}}
    >
      <Toolbar sx={{ mx: 20 }}>
        <Stack direction="row" spacing={1} sx={{ flexGrow: 1, mb: 2 }}>
          <Button
            sx={utilityButtonSx}
            startIcon={<LanguageOutlinedIcon />}
            endIcon={<KeyboardArrowDownIcon />}
          >
            English
          </Button>
          <Button sx={utilityButtonSx} startIcon={<ToggleOffOutlinedIcon />}>
            High Contrast
          </Button>
          <Button sx={utilityButtonSx} startIcon={<MessageOutlinedIcon />}>
            Customer Support
          </Button>
          <Button
            sx={utilityButtonSx}
            startIcon={<PersonOutlineOutlinedIcon />}
          >
            Contact Sales
          </Button>
        </Stack>
        <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
          <IconButton 
            aria-label="Search"
            sx={{ p: 0.5, mr: 1 }}
          >
            <SearchOutlinedIcon />
          </IconButton>
          <Button sx={utilityButtonSx} component={RouterLink} to="/login" >Log in</Button>
          <Button sx={utilityButtonSx} component={RouterLink} to="/about" endIcon={<KeyboardArrowDownIcon  />}>
            About
          </Button>
        </Stack>
      </Toolbar>

      <Toolbar sx={{ mx: 20 }}>
        <Button component={RouterLink} to="/">
          <img src={HubSpotLogo} alt="HubSpotLogo" className="h-7 ml-1 mr-10 mb-4" />
        </Button>
        
        <Stack direction="row" spacing={1} sx={{ flexGrow: 1, mb: 2 }}>
          <Button
            sx={navBarSx}
            endIcon={<KeyboardArrowDownIcon />}
            to="/products"
            component={RouterLink}
          >
            Products
            
          </Button>
          <Button
            sx={navBarSx}
            endIcon={<KeyboardArrowDownIcon />}
            to="/solutions"
            component={RouterLink}
          >
            Solutions
          </Button>
          <Button sx={navBarSx}
          to="/pricing"
          component={RouterLink}>
            Pricing
          </Button>
          <Button
            sx={navBarSx}
            endIcon={<KeyboardArrowDownIcon />}
            to="/resources"
            component={RouterLink}
            >
            Resources
          </Button>
        </Stack>
        <Stack >
          <Button component={RouterLink} to="/free-crm" sx={{textTransform:"none", mb:2,fontWeight:800, height: 40,borderRadius:2,}} variant="contained" color="primary">
            Get free CRM
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
export default NavBar;
