import {
  Divider,
  Container,
  Grid,
  Typography,
  TextField,
  Box,
  InputLabel,
  Checkbox,
  FormControlLabel,
  Button,
} from "@mui/material";
import { styled } from "@mui/styles";
import { Link } from "react-router-dom";
import Title from "../../Common/Title";
import { colors } from "../../Constants";

const Signup = () => {
  return (
    <Grid container sx={{ mt: 12, minHeight: { md: "60vh" } }}>
      <Grid item md={4} sx={{position: 'relative'}}>
        <img style={{position: 'absolute', bottom: 0}} width='100%' src='dog-head.png' alt='dog head' />
      </Grid>
      <Grid item md={8} sx={{ alignItems: "center" }}>
        <Link
          style={{ textAlign: "right", display: "block", margin: "0 20px" }}
          to="/signup-breeder"
        >
          Sign up as a breeder
        </Link>
        <Container>
          <Title
            sx={{ ml: 0 }}
            variation="large"
            m={5}
            text="Create your account"
          />
          <Typography>
            {" "}
            We need you to help us with some basic information before creating
            your account. Here are our terms and conditions.{" "}
          </Typography>
          <Divider sx={{ my: 3 }} />

          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Box sx={{ mt: .5 }}>
                <InputLabel sx={{ mb: .2, fontWeight: 700 }}>
                  First Name:
                </InputLabel>
                <InputWithoutBorder size='small' fullWidth />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ mt: .5 }}>
                <InputLabel sx={{ mb: .2, fontWeight: 700 }}>
                  Last Name:
                </InputLabel>
                <InputWithoutBorder size='small' fullWidth />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ mt: .5 }}>
                <InputLabel sx={{ mb: .2, fontWeight: 700 }}>
                  Email:
                </InputLabel>
                <InputWithoutBorder size='small' fullWidth type="email" />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ mt: .5 }}>
                <InputLabel sx={{ mb: .2, fontWeight: 700 }}>
                  Phone number:
                </InputLabel>
                <InputWithoutBorder size='small' fullWidth type="tel" />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ mt: .5 }}>
                <InputLabel sx={{ mb: .2, fontWeight: 700 }}>
                  Password:
                </InputLabel>
                <InputWithoutBorder size='small' fullWidth type="password" />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ mt: .5 }}>
                <InputLabel sx={{ mb: .2, fontWeight: 700 }}>
                  Confirm Password:
                </InputLabel>
                <InputWithoutBorder size='small' fullWidth type="password" />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{
                      color: colors.primary,
                      "&.Mui-checked": {
                        color: colors.primary,
                      },
                    }}
                  />
                }
                label={
                  <Typography>
                    I agree with <Link to="#">terms and conditions</Link>
                  </Typography>
                }
              />
            </Grid>
            <Grid item xs={12}>
              <Container maxWidth="sm" sx={{ textAlign: "center" }}>
                <Button
                  sx={{
                    bgcolor: colors.primary,
                    "&:hover": { bgcolor: colors.primary },
                    my: 4,
                  }}
                  variant="contained"
                >
                  Create account
                </Button>
                {/* <Divider flexItem>or</Divider>
                <Button
                  startIcon={<img src="google.png" width="20px" />}
                  sx={{
                    color: colors.primary,
                    borderColor: colors.primary,
                    my: 4,
                    "&:hover": { borderColor: colors.primary },
                  }}
                  variant="outlined"
                >
                  Sign up with google
                </Button> */}
              </Container>
            </Grid>
            <Grid xs={12} sx={{mb: 4}}><Typography sx={{textAlign: 'center',}}>
                    Already have an account? <Link to="/login" style={{color: colors.primary}}>Login</Link>
                  </Typography></Grid>
          </Grid>
        </Container>
      </Grid>
    </Grid>
  );
};

const InputWithoutBorder = styled(TextField)({
  "&  .MuiInputBase-input": {
    background: colors.gray,
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "transparent",
  },
});

export default Signup;
