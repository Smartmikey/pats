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
import { FieldValues, useForm } from "react-hook-form";

const ForgotPassword = () => {

  const {register, handleSubmit } = useForm();

  const requestPassword = (data: FieldValues) => {

  }
  return (
    <Grid container sx={{ mt: 12, minHeight: { md: "60vh" } }}>
      <Grid item md={4} sx={{position: 'relative'}}>
        <img style={{position: 'absolute', bottom: 0}} width='100%' src='dog-head.png' alt='dog head' />
      </Grid>
      <Grid component='form' onSubmit={handleSubmit(requestPassword)} item md={8} sx={{ alignItems: "center" }}>
       
        <Container>
          <Title
            sx={{ ml: 0 }}
            variation="large"
            m={5}
            text="Forgot password"
          />
          <Typography>
            Don&rsquo;t worry we can help you out! if you still remember your email address you can quickly reset your password. This will send you a new email that will link you to the password change website. 
          </Typography>
          <Divider sx={{ my: 3 }} />

          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Box sx={{ mt: .5 }}>
                <InputLabel sx={{ mb: .2, fontWeight: 700 }}>
                  Email:
                </InputLabel>
                <InputWithoutBorder {...register("email", {required: true})} size='small' type='email' fullWidth />
              </Box>
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
                  Request change
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
            {/* <Grid xs={12} sx={{mb: 4}}><Typography sx={{textAlign: 'center',}}>
                    Don't have an account? <Link to="/signup" style={{color: colors.primary}}>Sign up</Link>
                  </Typography></Grid>*/}
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

export default ForgotPassword;
