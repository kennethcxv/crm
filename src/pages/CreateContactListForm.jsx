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
    leadSource: "",
    jobTitle: "",
    leadStatus: "",
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
    console.log(inputs);
    setInputsArr([...inputsArr, inputs]);
    setInputs(initialInputs);
    console.log(inputsArr);
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
                  sx={TextFieldStyling}
                  value={inputs.phoneNumber}
                  onChange={(e) =>
                    setInputs({ ...inputs, phoneNumber: e.target.value })
                  }
                />
              </Stack>
              <Stack>
                <Typography sx={textStyling}>Lead Source *</Typography>
                <TextField
                  label="Please enter your Lead Source"
                  variant="outlined"
                  sx={TextFieldStyling}
                  value={inputs.leadSource}
                  onChange={(e) =>
                    setInputs({ ...inputs, leadSource: e.target.value })
                  }
                />
              </Stack>
              <Stack>
                <Typography sx={textStyling}>Job title</Typography>
                <TextField
                  label="Please enter your Job title"
                  variant="outlined"
                  sx={TextFieldStyling}
                  value={inputs.jobTitle}
                  onChange={(e) =>
                    setInputs({ ...inputs, jobTitle: e.target.value })
                  }
                />
              </Stack>
              <Stack>
                <Typography sx={textStyling}>Lead status *</Typography>
                <TextField
                  label="Please enter your Lead status"
                  variant="outlined"
                  sx={TextFieldStyling}
                  value={inputs.leadStatus}
                  onChange={(e) =>
                    setInputs({ ...inputs, leadStatus: e.target.value })
                  }
                />
              </Stack>
              <Button type="submit">Submit</Button>
            </form>
            {inputsArr.map((items) => {
              return (
                <>
                  <p>
                    {items.email}
                    {items.firstName}
                    {items.lastName}
                    {items.phoneNumber}
                    {items.leadSource}
                    {items.jobTitle}
                    {items.leadStatus}
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
