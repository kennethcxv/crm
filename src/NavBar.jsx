import { AppBar, Toolbar, Typography, Stack, Button } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import ToggleOffOutlinedIcon from "@mui/icons-material/ToggleOffOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import HubSpotLogo from "./assets/HubSpotLogo.png";

const NavBar = () => {
  const utilityButtonSx = {
    fontSize: 11  ,
    fontWeight: 800,
    textTransform: "none",
  };



  return (
    <AppBar
      position="static"
      sx={{ bgcolor: "background.paper", color: "text.secondary" }}
    >
      <Toolbar sx={{ mx: 20 }}>
        <Stack direction="row" spacing={1} sx={{ flexGrow: 1, mb:2 }}>
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
        <Stack direction="row" spacing={1} sx={{  mb:2 }} >
          <Button startIcon={<SearchOutlinedIcon />}></Button>
          <Button sx={utilityButtonSx}>Log in</Button>
          <Button sx={utilityButtonSx} endIcon={<KeyboardArrowDownIcon />}>
            About{" "}
          </Button>
        </Stack>
      </Toolbar>

      <Toolbar sx={{ mx: 20 }}>
        <img src={HubSpotLogo} alt="HubSpotLogo" className="h-7 mr-10 mb-5" />
        <Stack direction="row" spacing={1} sx={{ flexGrow: 1, mb:2}}>
          <Button sx={{fontWeight: 800, textTransform: "none",}} endIcon={<KeyboardArrowDownIcon />}>Products</Button>
          <Button sx={{fontWeight: 800, textTransform: "none",}} endIcon={<KeyboardArrowDownIcon />}>Solutions</Button>
          <Button sx={{fontWeight: 800, textTransform: "none",}} >Pricing</Button>
          <Button sx={{fontWeight: 800, textTransform: "none",}} endIcon={<KeyboardArrowDownIcon />}>Resources</Button>
        </Stack>
        <Stack>
          <Button variant="contained" color="primary">
            Get Free CRM
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
export default NavBar;
