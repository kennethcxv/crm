import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CreateContactListForm from "./CreateContactListForm";
import { useState } from "react";

// Steps
// We want to make it so when the user clicks on Add Contact
// On the right hand side a panel opens up and shows the form. On the form we can fill out the information
// After that information is filled out then we can grab it and show it on screen

// Step 1: Have a open state variable which checks if the add contact is open
// Step 2: If the open state variable is set to true then we can proceed with showing the form on the right
// Step 3: WE should probably use a drawer for this situiation.

// Steps to make it so that ContactList shows the inputs added instead of the form
// Step 1: We move the inputsArr from the createContactList form and move it to this page. This makes it so we can actually push and loop opver this array to show it here
// Step 2: We delete the loop, inputsArr state varaible, and set inputs arr from createContactlist
// step 3: We make a function that takes in a parameter so that it updates. We spread our inputsArr in there.
// Step 5: we loop over the array and show it on screen here
// Step 6: We pass this function as a prop to be used in the createContact list form
// Step 7: On handleSubmit we pass in the newFunction

const ContactList = () => {
  const [open, setOpen] = useState(false); // State Variable basically saying that the form is open or not

  const [inputsArr, setInputsArr] = useState([]);

  const handleFormOpen = () => {
    setOpen(true);
  };
  const handleFormClose = () => {
    setOpen(false);
  };

  const AddContact = (NewInput) => {
    setInputsArr([...inputsArr, NewInput]);
  };

  return (
    <Box>
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
            onClick={handleFormOpen}
          >
            Add Contact
          </Button>
          <CreateContactListForm
            open={open}
            onAddContact={AddContact}
            onClose={handleFormClose}
          />
        </Stack>
      </Stack>
      {inputsArr.map((items) => {
        return (
          <>
            <p>{items.email}
             {items.firstName}
            {items.lastName} 
            {items.phoneNumber}
            {items.companyName}
            {items.lifeCycleStage}
            {items.contactOwner}</p>
          </>
        );
      })}
    </Box>
  );
};
export default ContactList;
