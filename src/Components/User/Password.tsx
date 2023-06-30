import { Box, Button, Container, IconButton, Typography } from "@mui/material";
import Title from "../../Common/Title";
import { FormControl, FormLabel, Input } from "@mui/joy";
import { colors } from "../../Constants";
import {
  RemoveRedEyeOutlined,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import { useForm } from "react-hook-form";
import Axios from "../../API/Axios";
import useAuth from "../../Hooks/Auth";
import { useCookies } from "react-cookie";
import Popup from "../../Common/Popup";
import { useState } from "react";

interface PasswordInterface {
  oldPassword: string;
  newPassword: string;
}

const Password = () => {
  // const [getCookie, setCookie] = useCookies(["token"]);
  const user: any = useAuth();
  const {
    register,
    watch,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [passwordChanged, setPasswordChanged] = useState(false);
  const [visibility, setVisibility] = useState(false);

  const handleFormSubmit = async (data: any) => {
    const checkPassword = {
      id: user?.id.toString(),
      password: data.oldPassword,
    };
    // const isOldPasswordCorrect = await Axios.post(
    //   "/member/user/password/member",
    //   checkPassword
    // );

    // if ((await isOldPasswordCorrect.data.status) === true) {
      const changePassword = await Axios.post("/user/resetpassword", {
        password: data.newPassword,
        token: user.confirmation_token,
      }
      );

      if (changePassword.data.data == "ok") {
        setPasswordChanged(true);
        reset();
        // resetField('newPassword');
      }
      console.log(changePassword);
    // }
  };
  return (
    <Box
      sx={{
        mb: 18,
      }}
    >
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
        <Popup open={false} />
        <Container
          component="form"
          onSubmit={handleSubmit(handleFormSubmit)}
          maxWidth="sm"
          sx={{ textAlign: "center" }}
        >
          <FormControl sx={{ my: 2 }}>
            <FormLabel>Old Password</FormLabel>
            <Input
              {...register("oldPassword")}
              endDecorator={
                <IconButton>
                  {" "}
                  {!visibility ? (
                    <Visibility onClick={() => setVisibility(!visibility)} />
                  ) : (
                    <VisibilityOff onClick={() => setVisibility(!visibility)} />
                  )}{" "}
                </IconButton>
              }
              type={!visibility ? "password" : "text"}
              variant="soft"
            />
          </FormControl>
          <FormControl sx={{ my: 2 }}>
            <FormLabel>New Password</FormLabel>
            <Input
              {...register("newPassword")}
              endDecorator={
                <IconButton>
                  {" "}
                  {!visibility ? (
                    <Visibility onClick={() => setVisibility(!visibility)} />
                  ) : (
                    <VisibilityOff onClick={() => setVisibility(!visibility)} />
                  )}
                </IconButton>
              }
              type={!visibility ? "password" : "text"}
              variant="soft"
            />
          </FormControl>
          <Button
            type="submit"
            sx={{
              color: colors.white,
              bgcolor: colors.primary,
              textTransform: "initial",
              "&:hover": { color: colors.textHeading },
            }}
          >
            Save Changes
          </Button>
          {passwordChanged && (
            <Typography color="green">Password changed successfully</Typography>
          )}
        </Container>
      </Box>
    </Box>
  );
};

export default Password;
