import {
  Button,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

// Steps
// We want to make it so when the user clicks on Add Contact
// On the right hand side a panel opens up and shows the form. On the form we can fill out the information
// After that information is filled out then we can grab it and show it on screen

// Step 1: Have a open state variable which checks if the add contact is open
// Step 2: If the open state variable is set to true then we can proceed with showing the form on the right
// Step 3: WE should probably use a drawer for this situiation.

const ContactList = () => {
  // const [open,isopen] = useState(false)

  // const handleListForm = () => {
  //     isopen(true)
  //     console.log("This is open", open)

  // }

  return (
    <Stack mt={6} direction="row" justifyContent="space-between" mx={5}>
      <Typography color="secondary" fontSize={32} fontWeight={400}>
        Contacts
      </Typography>
      <Stack direction="row" spacing={1} alignItems="center">
        <TextField
          size="small"
          sx={{ width: 360 }}
          label="Search for a contact"
          variant="outlined"
        />
        <Button
          sx={{ textTransform: "none" }}
          endIcon={<KeyboardArrowDownIcon />}
          variant="outlined"
        >
          Actions
        </Button>
        <Button
          color="primary"
          sx={{ textTransform: "none", bgcolor: "primary.main" }}
          variant="contained"
        >
          Add Contact
        </Button>
      </Stack>
    </Stack>
  );
};
export default ContactList;
