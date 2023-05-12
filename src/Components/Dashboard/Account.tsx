import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Title from "../../Common/Title";
import { Container, FormControl, FormLabel, Input } from "@mui/joy";
import { colors } from "../../Constants";

const Account = () => {
  return (
    <Box>
      <Title sx={{ ml: 0 }} text="Account" />
      <Box
        sx={{
          border: "1px solid rgba(239, 239, 239, 1)",
          p: 4,
          my: 6,
          borderRadius: "15px",
          boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.08)",
        }}
      >
        <form>
          <Container maxWidth="sm" sx={{ textAlign: "center" }}>
            <FormControl sx={{ my: 2 }}>
              <FormLabel>Username</FormLabel>
              <Input variant="soft" />
            </FormControl>
            <FormControl sx={{ my: 2 }}>
              <FormLabel>Password</FormLabel>
              <Input variant="soft" />
            </FormControl>
            <Button
              sx={{
                color: colors.white,
                bgcolor: colors.primary,
                "&:hover": { color: colors.textHeading },
              }}
            >
              Save Changes
            </Button>
          </Container>
        </form>
      </Box>

      <Box
        sx={{
          border: "1px solid rgba(239, 239, 239, 1)",
          p: 4,
          my:6,
          borderRadius: "15px",
          boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.08)",
        }}
      >
        <Typography sx={{ color: "red", my:2, fontWeight: 600 }}>Delete Account</Typography>
        <Typography>
          While we would prefer if you choose to stay, you have the option to
          delete your account at any time. It is important to keep in mind that
          once the account is deleted, it cannot be restored.
        </Typography>
        <Button
              sx={{
                color: colors.white,
                bgcolor: colors.danger.text,
                my:2,
                "&:hover": { color: colors.white, bgcolor: colors.danger.text},
              }}
            >
              Save Changes
            </Button>
      </Box>
    </Box>
  );
};

export default Account;
