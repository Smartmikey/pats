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
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Axios, { setAuthToken } from "../../API/Axios";
import Title from "../../Common/Title";
import { colors } from "../../Constants";
import { isLoggedIn, setAuthTokens, clearAuthTokens, getAccessToken, getRefreshToken, applyAuthTokenInterceptor } from 'axios-jwt'


const Login = () => {
  const {register, watch, handleSubmit, formState: { errors }} = useForm();

  const onSubmit = async (data: any) => {
    const response = await Axios.post('/login', {
      ...data
    });

    const {data: {data: {token}}} = await response;
    setAuthToken(token);
    setAuthTokens({
      accessToken: token,
      refreshToken: token
    })

    console.log(token)
    
  };



  return (
    <Grid container sx={{ mt: 12, minHeight: { md: "60vh" } }}>
      <Grid item md={4} sx={{position: 'relative'}}>
        <img style={{position: 'absolute', bottom: 0}} width='100%' src='dog-head.png' alt='dog head' />
      </Grid>
      <Grid item md={8} sx={{ alignItems: "center" }}>
       
        <Container>
          <Title
            sx={{ ml: 0 }}
            variation="large"
            m={5}
            text="Log in"
          />
          <Typography>
            {" "}
            Welcome back! Please input your information in the fields below.{" "}
          </Typography>
          <Divider sx={{ my: 3 }} />

          <Grid container spacing={3} component="form" onSubmit={handleSubmit(onSubmit)}>
            <Grid item xs={12} md={6}>
              <Box sx={{ mt: .5 }}>
                <InputLabel sx={{ mb: .2, fontWeight: 700 }}>
                  Email:
                </InputLabel>
                <InputWithoutBorder {...register("email")} size='small' type='email' fullWidth />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ mt: .5 }}>
                <InputLabel sx={{ mb: .2, fontWeight: 700 }}>
                  Password:
                </InputLabel>
                <InputWithoutBorder {...register("password")} size='small' fullWidth type="password" />
              </Box>

            </Grid>
            <Grid item xs={12}>
            <Link
          style={{ textAlign: "right", display: "block", margin: "0 20px" }}
          to="/forgot-password"
        >
          Forgot password
        </Link>
            </Grid>
            
            <Grid item xs={12}>
              <Container maxWidth="sm" sx={{ textAlign: "center" }}>
                <Button
                  sx={{
                    bgcolor: colors.primary,
                    "&:hover": { bgcolor: colors.primary },
                    my: 4,
                  }}
                  type='submit'
                  variant="contained"
                >
                  Login
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
                  Sign in with google
                </Button> */}
              </Container>
            </Grid>
            <Grid xs={12} sx={{mb: 4}}><Typography sx={{textAlign: 'center',}}>
                    Don't have an account? <Link to="/signup" style={{color: colors.primary}}>Sign up</Link>
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

export default Login;
