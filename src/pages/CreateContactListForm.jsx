import {
  Drawer,
  Box,
  Typography,
  Button,
  Stack,
  TextField,
} from "@mui/material";
import { useState } from "react";

const CreateContactListForm = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const textStyling = {
    textAlign: "left",
    pb: 1,
    fontWeight: 600,
    pt: 2,
    color: "black",
  };
  const TextFieldStyling = {
    backgroundColor: "secondary.secondary",
    "& .MuiInputBase-input": { color: "black" } // All inputs while typed are colored black
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
            <Stack>
              <Typography sx={textStyling}>Email *</Typography>
              <TextField
                sx={TextFieldStyling}
                label="Please enter your email"
                variant="outlined"
              />
            </Stack>
            <Stack>
              <Typography sx={textStyling}>First Name *</Typography>
              <TextField
                label="Please enter your First Name"
                variant="outlined"
                sx={TextFieldStyling}
              />
            </Stack>
            <Stack>
              <Typography sx={textStyling}>Last Name *</Typography>
              <TextField
                label="Please enter your Last Name"
                variant="outlined"
                sx={TextFieldStyling}
              />
            </Stack>
            <Stack>
              <Typography sx={textStyling}>Phone Number</Typography>
              <TextField
                label="Please enter your Phone Number"
                variant="outlined"
                sx={TextFieldStyling}
              />
            </Stack>
            <Stack>
              <Typography sx={textStyling}>Lead Source *</Typography>
              <TextField
                label="Please enter your Lead Source"
                variant="outlined"
                sx={TextFieldStyling}
              />
            </Stack>
            <Stack>
              <Typography sx={textStyling}>Job title</Typography>
              <TextField
                label="Please enter your Job title"
                variant="outlined"
                sx={TextFieldStyling}
              />
            </Stack>
            <Stack>
              <Typography sx={textStyling}>Lead status *</Typography>
              <TextField
                label="Please enter your Lead status"
                variant="outlined"
                sx={TextFieldStyling}
              />
            </Stack>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};
export default CreateContactListForm;
