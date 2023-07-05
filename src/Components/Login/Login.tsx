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
import { Link, Redirect, useHistory } from "react-router-dom";
import Axios, { setAuthToken } from "../../API/Axios";
import Title from "../../Common/Title";
import { colors } from "../../Constants";
import {useCookies} from "react-cookie";
import { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import LoadingButton from "@mui/lab/LoadingButton";

const Login = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [userToken, setUserToken, removeToken] = useCookies(['token']);
  const [errorMsg, setErrorMsg] = useState("")
  const [fetching, setFetching] = useState(false);
  const navigate = useHistory();

  // const isUserLoggedIn = async () => {
    

  //   if (await userToken.token) {
  //     return (window.location.href = "/");
  //   }
  //   return null;
  // };

  const onSubmit = async (data: any) => {
    setFetching(true);
    try {
      const response: any = await Axios.post("/login", {
        ...data,
      });

      const {
        data: { token },
      } = await response?.data;

      const decodedToken: any = jwtDecode(token);
      setAuthToken(token);
      removeToken('token');
      setUserToken("token",token);
      if (decodedToken.role === "ROLE_MEMBER") {
        return  navigate.push("/breeder");
      } else if (decodedToken.role === "ROLE_USER") {
  
        return navigate.push("/user");
      } else {
        // setError('Invalid role');
      }
    } catch (error:any) {
      setFetching(false);
      setErrorMsg(error.response.data.detail);
      console.log(error);
    }
  };

  useEffect(() => {
    // isUserLoggedIn()
  }, []);

  return (
    <Grid container sx={{ mt: 12, minHeight: { md: "60vh" } }}>
      <Grid item xs={12} md={4} sx={{ position: "relative" }}>
        <img
          style={{ position: "absolute", bottom: 0 }}
          width="100%"
          src="dog-head.png"
          alt="dog head"
        />
      </Grid>
      <Grid item xs={12} md={8} sx={{ alignItems: "center" }}>
        <Container>
          <Title sx={{ ml: 0 }} variation="large" m={5} text="Log in" />
          <Typography>
            {" "}
            Welcome back! Please input your information in the fields below.{" "}
          </Typography>
          <Divider sx={{ my: 3 }} />

          <Grid
            container
            spacing={3}
            component="form"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Grid item xs={12} md={6}>
              <Box sx={{ mt: 0.5 }}>
                <InputLabel sx={{ mb: 0.2, fontWeight: 700 }}>
                  Email:
                </InputLabel>
                <InputWithoutBorder
                  {...register("email", { required: true })}
                  size="small"
                  type="email"
                  fullWidth
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ mt: 0.5 }}>
                <InputLabel sx={{ mb: 0.2, fontWeight: 700 }}>
                  Password:
                </InputLabel>
                <InputWithoutBorder
                  {...register("password", { required: true })}
                  size="small"
                  fullWidth
                  type="password"
                />
              </Box>
            </Grid>
            {errorMsg && (
              <Grid item xs={12}>
                <Typography variant="caption" color="red">{errorMsg}</Typography>
                </Grid>
            )}
            <Grid item xs={12}>
              <Link
                style={{
                  textAlign: "right",
                  display: "block",
                  margin: "0 20px",
                }}
                to="/forgot-password"
              >
                Forgot password
              </Link>
            </Grid>

            <Grid item xs={12}>
              <Container maxWidth="sm" sx={{ textAlign: "center" }}>
                {fetching ? (
                  <LoadingButton loading variant="outlined">
                    Submit
                  </LoadingButton>
                ) : (
                  <Button
                    sx={{
                      bgcolor: colors.primary,
                      "&:hover": { bgcolor: colors.primary },
                      my: 4,
                    }}
                    type="submit"
                    variant="contained"
                  >
                    Login
                  </Button>
                )}

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
            <Grid item xs={12} sx={{ mb: 4 }}>
              <Typography sx={{ textAlign: "center" }}>
                Don't have an account?{" "}
                <Link to="/signup" style={{ color: colors.primary }}>
                  Sign up
                </Link>
              </Typography>
            </Grid>
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
