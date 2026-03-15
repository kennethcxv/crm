import {
  Drawer,
  Box,
  Typography,
  Button,
  Stack,
  TextField,
  IconButton,
} from "@mui/material";
import { useState } from "react";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

// We make an input state vaiable for each then push it into the array and show it

// How to make Cancel button work
// When the user clicks on the cancel button it just props the onClose prop thasts it

// We need to create input validation
// What we need: We need input validation for when the user doesnt fill out a field
// Step 1: We create a state variable since we are changing the UI
// Step 2: We

const CreateContactListForm = ({ open, onClose, onAddContact }) => {
  const initialInputs = {
    // we set it to initial inputs so we can clear the inputs after being used
    email: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    companyName: "",
    lifeCycleStage: "",
    contactOwner: "",
    notes: "",
  };

  const [inputs, setInputs] = useState(initialInputs);
  const [inputValidation, setInputValidation] = useState({
    // State Variable that holds each input with a bool
    email: false,
    firstName: false,
    lastName: false,
    companyName: false,
    contactOwner: false,
  });

  const textStyling = {
    textAlign: "left",
    pb: 1,
    fontWeight: 600,
    pt: 2,
    color: "black",
  };
  const TextFieldStyling = {
    backgroundColor: "secondary.secondary",
    "& .MuiInputBase-input": { color: "black" }, // All inputs while typed are colored black
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = handleInputValidation();
    if (!isValid) return;
    onAddContact(inputs);
    setInputs(initialInputs);
    onClose();
  };

  const handleInputValidation = () => {
    let newErrors = {
      // We create an Object that has the
      email: inputs.email === "",
      firstName: inputs.firstName === "",
      lastName: inputs.lastName === "",
      companyName: inputs.companyName === "",
      contactOwner: inputs.contactOwner === "",
    };

    setInputValidation(newErrors);

    if (
      newErrors.email ||
      newErrors.firstName ||
      newErrors.lastName ||
      newErrors.companyName ||
      newErrors.contactOwner
    ) {
      return false;
    }
    return true;
  };

  return (
    //Anchor is a prop which controls the direction the sidebar opens
    <>
      <Drawer
        PaperProps={{ sx: { width: 700 } }}
        anchor="right"
        open={open}
        onClose={onClose}
      >
        {/* We are assigning isDrawerOpen called open */}
        {/* Everything in here is the drawer content */}
        <Box>
          <Box
            pt={2}
            pb={2}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              backgroundColor: "primary.main",
            }}
          >
            <Typography sx={{ px: 5 }} variant="h6" color="white">
              Create Contact
            </Typography>
            <IconButton sx={{ mr: 4 }} onClick={onClose}>
              <CloseOutlinedIcon />
            </IconButton>
          </Box>
          <Stack
            sx={{
              justifyContent: "flex-end",
              height: 60,
              pr: 2,
            }}
          >
            <Button
              sx={{
                textTransform: "none",
                fontWeight: 600,
                justifyContent: "right",
                direction: "row",
                mr: 3,
              }}
            >
              Edit this form
            </Button>
          </Stack>

          <Box sx={{ px: 5 }}>
            <form onSubmit={(e) => handleSubmit(e)}>
              <Stack>
                <Typography sx={textStyling}>Email *</Typography>
                <TextField
                  sx={TextFieldStyling}
                  label="Please enter your email"
                  variant="outlined"
                  value={inputs.email}
                  type="email"
                  error={inputValidation.email}
                  helperText={inputValidation.email ? "Email is required" : ""}
                  onChange={(e) =>
                    setInputs({ ...inputs, email: e.target.value })
                  }
                />
              </Stack>
              <Stack>
                <Typography sx={textStyling}>First Name *</Typography>
                <TextField
                  label="Please enter your First Name"
                  variant="outlined"
                  sx={TextFieldStyling}
                  value={inputs.firstName}
                  error={inputValidation.firstName}
                  helperText={
                    inputValidation.firstName ? "First Name is required" : ""
                  }
                  onChange={(e) =>
                    setInputs({ ...inputs, firstName: e.target.value })
                  }
                />
              </Stack>
              <Stack>
                <Typography sx={textStyling}>Last Name *</Typography>
                <TextField
                  label="Please enter your Last Name"
                  variant="outlined"
                  sx={TextFieldStyling}
                  value={inputs.lastName}
                  error={inputValidation.lastName}
                  helperText={
                    inputValidation.lastName ? "Last Name is required" : ""
                  }
                  onChange={(e) =>
                    setInputs({ ...inputs, lastName: e.target.value })
                  }
                />
              </Stack>
              <Stack>
                <Typography sx={textStyling}>Phone Number</Typography>
                <TextField
                  label="Please enter your Phone Number"
                  variant="outlined"
                  type="tel"
                  sx={TextFieldStyling}
                  value={inputs.phoneNumber}
                  onChange={(e) =>
                    setInputs({ ...inputs, phoneNumber: e.target.value })
                  }
                />
              </Stack>
              <Stack>
                <Typography sx={textStyling}>Company Name *</Typography>
                <TextField
                  label="Please enter your Company Name"
                  variant="outlined"
                  sx={TextFieldStyling}
                  value={inputs.companyName}
                  error={inputValidation.companyName}
                  helperText={
                    inputValidation.companyName
                      ? "Company Name is required"
                      : ""
                  }
                  onChange={(e) =>
                    setInputs({ ...inputs, companyName: e.target.value })
                  }
                />
              </Stack>
              <Stack>
                <Typography sx={textStyling}>Lifecycle stage</Typography>
                <TextField
                  label="Please enter your Lifecycle stage"
                  variant="outlined"
                  sx={TextFieldStyling}
                  value={inputs.lifeCycleStage}
                  onChange={(e) =>
                    setInputs({ ...inputs, lifeCycleStage: e.target.value })
                  }
                />
              </Stack>
              <Stack>
                <Typography sx={textStyling}>Contact Owner *</Typography>
                <TextField
                  label="Please enter your Contact Owner"
                  variant="outlined"
                  sx={TextFieldStyling}
                  value={inputs.contactOwner}
                  error={inputValidation.contactOwner}
                  helperText={
                    inputValidation.contactOwner
                      ? "Contact Owner is required"
                      : ""
                  }
                  onChange={(e) =>
                    setInputs({ ...inputs, contactOwner: e.target.value })
                  }
                />
              </Stack>
              <Stack>
                <Typography sx={textStyling}>Notes</Typography>
                <TextField
                  label="Please enter your Notes"
                  variant="outlined"
                  sx={TextFieldStyling}
                  value={inputs.notes}
                  onChange={(e) =>
                    setInputs({ ...inputs, notes: e.target.value })
                  }
                />
              </Stack>
              <Button
                sx={{
                  my: 5,
                  mr: 3,
                  backgroundColor: "primary.main",
                  color: "primary.contrastText",
                }}
                variant="contained"
                type="submit"
              >
                Create Contact
              </Button>
              <Button sx={{ my: 5 }} onClick={onClose} variant="outlined">
                Cancel
              </Button>
            </form>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};
export default CreateContactListForm;
