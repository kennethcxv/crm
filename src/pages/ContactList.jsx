import { Box, Button, Stack, TextField, Typography } from "@mui/material";

const ContactList = () => {
  return (
        <Stack
          direction="row"
          justifyContent="space-between"
          mx={5}
        >
          <Typography>Contacts</Typography>
          <Stack
            display="inline"
            
          >
            <TextField label="Search" variant="outlined" />
            <Button label="Actions" variant="outlined">
              Actions
            </Button>
            <Button label="Add Contact" variant="contained">
              Add Contact
            </Button>
          </Stack>
        </Stack>
  );
};
export default ContactList;
