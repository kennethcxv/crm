import { Button, Stack, TextField, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const ContactList = () => {
  return (
    <Stack mt={6} direction="row" justifyContent="space-between" mx={5}>
      <Typography color="secondary" fontSize={32} fontWeight={400}>Contacts</Typography>
      <Stack direction="row" spacing={1} alignItems="center">
        <TextField size="small"   sx={{width:360}} label="Search for a contact" variant="outlined" />
        <Button  sx={{ textTransform:"none",}} endIcon={<KeyboardArrowDownIcon />} variant="outlined">
          Actions
        </Button>
        <Button color="primary"   sx={{ textTransform:"none", bgcolor: "primary.main"}} variant="contained">
          Add Contact
        </Button>
      </Stack>
    </Stack>
  );
};
export default ContactList;
