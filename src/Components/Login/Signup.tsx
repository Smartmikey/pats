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
import { useForm } from "react-hook-form";
import Axios from "../../API/Axios";
import Popup from "../../Common/Popup";
import { faker } from "@faker-js/faker";
// import { Axios } from "axios";

const Signup = () => {
  const {register, watch, handleSubmit, formState: { errors }} = useForm();

  const registerUser = async(data: any) => {
    const {accepted, confirmPassword, ...rest} = data;
    
    // rest.location = 'nigeria'
    // if(confirmPassword === rest.password) {

    //   const response = await Axios.post('/user/register', {...rest})
    //   console.log(data, response);
    //   if(response.status === 200 ) window.location.href = "/user"
    // }
    
  }

  return (
    <Grid container sx={{ mt: 12, minHeight: { md: "60vh" } }}>
      <Popup open={false} />
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

          <Grid container component='form' onSubmit={handleSubmit(registerUser)} spacing={3}>
            <Grid item xs={12} md={6}>
              <Box sx={{ mt: .5 }}>
                <InputLabel sx={{ mb: .2, fontWeight: 700 }}>
                  First Name:
                </InputLabel>
                <InputWithoutBorder {...register('firstname', { required: true })} size='small' fullWidth />
                {errors.firstname && <Typography variant="caption" sx={{color: 'red'}}>firstname cannot be blank</Typography>}
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ mt: .5 }}>
                <InputLabel sx={{ mb: .2, fontWeight: 700 }}>
                  Last Name:
                </InputLabel>
                <InputWithoutBorder sx={{borderColor: errors.lastname && "red"}} {...register('lastname', { required: true })} size='small' fullWidth />
                {errors.lastname && <Typography variant="caption" sx={{color: 'red'}}>lastname cannot be blank</Typography>}
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ mt: .5 }}>
                <InputLabel sx={{ mb: .2, fontWeight: 700 }}>
                  Email:
                </InputLabel>
                <InputWithoutBorder  {...register('email',  { required: true })} size='small' fullWidth type="email" />
                {errors.email && <Typography variant="caption" sx={{color: 'red'}}>email cannot be blank</Typography>}
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ mt: .5 }}>
                <InputLabel sx={{ mb: .2, fontWeight: 700 }}>
                  Phone number:
                </InputLabel>
                <InputWithoutBorder  {...register('phonenumber' , { required: true })} size='small' fullWidth type="tel" />
                {errors.phonenumber && <Typography variant="caption" sx={{color: 'red'}}>phone number cannot be blank</Typography>}
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ mt: .5 }}>
                <InputLabel sx={{ mb: .2, fontWeight: 700 }}>
                  Password:
                </InputLabel>
                <InputWithoutBorder  {...register('password', { required: true, min: 8 })} size='small' fullWidth type="password" />
                {errors.password && <Typography variant="caption" sx={{color: 'red'}}>password cannot be blank</Typography>}
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ mt: .5 }}>
                <InputLabel sx={{ mb: .2, fontWeight: 700 }}>
                  Confirm Password:
                </InputLabel>
                <InputWithoutBorder {...register('confirmPassword', {required: true})} size='small' fullWidth type="password" />
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
                    
                    {...register("accepted", { required: true })}
                  />
                }
                label={<>
                  <Typography>
                    I agree with <Link to="#">terms and conditions</Link>
                  </Typography>
                  {errors.accepted && <Typography variant="caption" sx={{color: 'red'}}>Read and agree to our terms and conditions</Typography>}
                </>

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
                  type="submit"
                  variant="contained"
                >
                  Create account
                </Button>
                
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
