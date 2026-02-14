import {
  Drawer,
  Box,
  Typography,
  Button,
  Stack,
  TextField,
} from "@mui/material";
import { useState } from "react";

// We make an input state vaiable for each then push it into the array and show it

const CreateContactListForm = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [inputsArr, setInputsArr] = useState([]);
  const initialInputs = { // we set it to initial inputs so we can clear the inputs after being used
    email: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    companyName: "",
    lifeCycleStage: "",
    contactOwner: "",
    notes:"",
  };

  const [inputs, setInputs] = useState(initialInputs);

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
    setInputsArr([...inputsArr, inputs]);
    setInputs(initialInputs);
  };

  return (
    //Anchor is a prop which controls the direction the sidebar opens
    <>
      <Button
        size="large"
        color="primary"
        onClick={() => setIsDrawerOpen(true)}
      >
        Contact List Button
      </Button>
      <Drawer
        PaperProps={{ sx: { width: 700 } }}
        anchor="right"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        {/* We are assigning isDrawerOpen called open */}
        {/* Everything in here is the drawer content */}
        <Box>
          <Box pt={2} pb={2} sx={{ backgroundColor: "primary.main" }}>
            <Typography sx={{ px: 5 }} variant="h6" color="white">
              Create Contact
            </Typography>
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
              <Button sx={{mt:5, mr:3, backgroundColor:"primary.main", color:"primary.contrastText"}} variant="contained" type="submit">Create Contact</Button>
              <Button sx={{mt:5}} variant="outlined">Cancel</Button>
            </form>
            {inputsArr.map((items) => {
              return (
                <>
                  <p>
                    {items.email}
                    {items.firstName}
                    {items.lastName}
                    {items.phoneNumber}
                    {items.companyName}
                    {items.lifeCycleStage}
                    {items.contactOwner}
                  </p>
                </>
              );
            })}
          </Box>
        </Box>
      </Drawer>
    </>
  );
};
export default CreateContactListForm;
