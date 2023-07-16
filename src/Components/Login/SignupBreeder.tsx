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
import Radio, { radioClasses } from "@mui/joy/Radio";
import { styled } from "@mui/styles";
import Avatar from "@mui/joy/Avatar";

import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import RadioGroup from "@mui/joy/RadioGroup";
import FormLabel from "@mui/joy/FormLabel";

import { Link, useHistory } from "react-router-dom";
import Title from "../../Common/Title";
import { colors } from "../../Constants";
import Sheet from "@mui/joy/Sheet";
import { FieldValues, useForm } from "react-hook-form";
import { useEffect, useState, useReducer } from "react";
import Axios from "../../API/Axios";
import AutocompleteWithDialog from "../../Common/AutocompleteWithDialog";
import { Autocomplete, Chip } from "@mui/joy";
import { Close } from "@mui/icons-material";
import { getIdsAsString } from "../../utility";
import { Field } from "../../interface/Pet";
import jwtDecode from "jwt-decode";
import { useCookies } from "react-cookie";
import { LoadingButton } from "@mui/lab";

interface BreederFormInterface {
  breeder_type: string;
  company_type: string;
  confirm_password: string;
  email: string;
  last_name: string;
  location: string;
  name: string;
  password: string;
  phone_number: string;
  terms: boolean;
}

const SignupBreeder = () => {
  const [incorrectPassword, setIncorrectPassword] = useState<Boolean>(false);
  const [fetching, setFetching] = useState<Boolean>(false);
  const [companyType, setCompanyType] = useState<any>();
  const [breederType, setBreederType] = useState<any>([]);
  const [userToken, setUserToken, removeToken] = useCookies(["token"]);
  const [errorMsg, setErrorMsg] = useState("")

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [state, setState] = useReducer(
    (state: any, newState: any) => ({ ...state, ...newState }),
    {}
  );
  const navigate = useHistory();
  const registerBreeder = async (data: FieldValues) => {
    setFetching(true);
    try {
      let { terms, confirm_password, ...rest } = data;
      if (data.confirm_password !== data.password) {
        setIncorrectPassword(true);
        setFetching(false);
        return;
      }
      rest = {
        ...rest,
        member_type: "",
        about: "",
        price: "",
        web_site: "",
        address: "",
        date_information: "",
        breeder_type: state.breeder_type,
        city_id: state.location.id,

      };
      setIncorrectPassword(false);
      const response = await Axios.post("/member/register", { ...rest });
      if (response.status === 200) {
        // const verify = await Axios.get(
        //   `/s/member-activate/${response.data.token}`
        // );
        // console.log(verify);

        const logginRes: any = await Axios.post("/login", {
          email: response.data.data.email,
          password: data.password,
        });

        const {
          data: { token },
        } = await logginRes?.data;

        const decodedToken: any = jwtDecode(token);
        removeToken("token");
        setUserToken("token", token);
        if (decodedToken.role === "ROLE_MEMBER") {
          return navigate.push("/breeder");
        } else if (decodedToken.role === "ROLE_USER") {
          return navigate.push("/user");
        } else {
          // setError('Invalid role');
        }
        setFetching(false);
      } else {
        console.log("got here");

        setFetching(false);
      }
    } catch (error: any) {

      setFetching(false);
      setErrorMsg("All fields are required");
      console.log("we have some error", error);
    }
  };

  if(errorMsg){
    setTimeout(()=> setErrorMsg(""), 5000);
  }

  const locationField: Field[] = [
    { name: "name", type: "string" },
    // { name: "description", type: "string" },
    // { name: "city", type: "string", data: state.cityRes },
    { name: "state", type: "string", data: state.stateRes },
  ];

  useEffect(() => {
    Axios.get("/company_type").then((res) => {
      setCompanyType(res.data.data);
    });
    Axios.get("/category/pets/").then((res) => {
      setBreederType(res.data.data);
    });
    Axios.get("/city").then((res) => {
      setState({ locationRes: res.data.data });
    });
  }, []);

  return (
    <Grid
      container
      component="form"
      onSubmit={handleSubmit(registerBreeder)}
      sx={{ mt: 12, minHeight: { md: "60vh" } }}
    >
      <Grid item md={4} sx={{ position: "relative" }}>
        <img
          style={{ position: "absolute", bottom: 0 }}
          width="100%"
          src="dog-head.png"
          alt="dog head"
        />
      </Grid>
      <Grid item md={8} sx={{ alignItems: "center" }}>
        <Link
          style={{ textAlign: "right", display: "block", margin: "0 20px" }}
          to="/signup"
        >
          Sign up as a member
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
              <Box sx={{ mt: 0.5 }}>
                <InputLabel sx={{ mb: 0.2, fontWeight: 700 }}>
                  First Name:
                </InputLabel>
                <InputWithoutBorder
                  sx={{ borderColor: errors.name && "red !important" }}
                  {...register("name", { required: true })}
                  size="small"
                  type="text"
                  fullWidth
                />
                {errors.name && (
                  <Typography variant="caption" sx={{ color: "red" }}>
                    first name cannot be blank
                  </Typography>
                )}
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ mt: 0.5 }}>
                <InputLabel sx={{ mb: 0.2, fontWeight: 700 }}>
                  Last Name:
                </InputLabel>
                <InputWithoutBorder
                  sx={{ borderColor: errors.last_name && "red" }}
                  {...register("last_name", { required: true })}
                  size="small"
                  type="text"
                  fullWidth
                />
                {errors.last_name && (
                  <Typography variant="caption" sx={{ color: "red" }}>
                    last name cannot be blank
                  </Typography>
                )}
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ mt: 0.5 }}>
                <InputLabel sx={{ mb: 0.2, fontWeight: 700 }}>
                  Email:
                </InputLabel>
                <InputWithoutBorder
                  sx={{ borderColor: errors.email && "red" }}
                  {...register("email", { required: true })}
                  size="small"
                  fullWidth
                  type="email"
                />
                {errors.email && (
                  <Typography variant="caption" sx={{ color: "red" }}>
                    email cannot be blank
                  </Typography>
                )}
              </Box>
            </Grid>
            {/* <Grid item xs={12} md={6}>
              <Box sx={{ mt: 0.5 }}>
                <InputLabel sx={{ mb: 0.2, fontWeight: 700 }}>
                  Phone number:
                </InputLabel>
                <InputWithoutBorder
                  sx={{ borderColor: errors.phone_number && "red" }}
                  {...register("phone_number", { required: true })}
                  size="small"
                  fullWidth
                  type="tel"
                />
                {errors.phone_number && (
                  <Typography variant="caption" sx={{ color: "red" }}>
                    phone number cannot be blank
                  </Typography>
                )}
              </Box>
            </Grid> */}
            <Grid item xs={12} md={6}>
              <Box sx={{ mt: 0.5 }}>
                <InputLabel sx={{ mb: 0.2, fontWeight: 700 }}>
                  Location:
                </InputLabel>
                <AutocompleteWithDialog
                  getValue={{ state, setState }}
                  data={state?.locationRes}
                  field={locationField}
                  endpoint="/city"
                  title="city"
                  sx={{ borderRadius: 0 }}
                />
                {/* <InputWithoutBorder
                  sx={{ borderColor: errors.location_id && "red" }}
                  {...register("location_id", { required: true })}
                  size="small"
                  fullWidth
                  type="address"
                /> */}
                {/* <AutocompleteWithDialog
                  getValue={{ state, setState }}
                  data={state?.petLocation}
                  field={BreederFields}
                  endpoint="/location/create"
                  title="location"
                  /> */}
                {errors.city_id && (
                  <Typography variant="caption" sx={{ color: "red" }}>
                    location cannot be blank
                  </Typography>
                )}
              </Box>
            </Grid>
            <Grid item xs={12} md={12}>
              <Box sx={{ mt: 0.5 }}>
                {/* <InputLabel sx={{ mb: 0.2, fontWeight: 700 }}>
                  Company Type:
                </InputLabel> */}
                <RadioGroup
                  aria-label="company_type"
                  // onChange={(e) => console.log(e)}
                  defaultValue="Shelter"
                  overlay
                  // orientation={{xs: "horizontal", }}
                  name="company_type"
                  sx={{
                    flexDirection: { xs: "column", md: "row" },
                    flex: 2,
                    flexWrap: "wrap",
                    gap: 2,
                    [`& .${radioClasses.checked}`]: {
                      [`& .${radioClasses.action}`]: {
                        inset: -1,
                        border: "3px solid",
                        borderColor: "primary.500",
                      },
                    },
                    [`& .${radioClasses.radio}`]: {
                      display: "contents",
                      "& > svg": {
                        zIndex: 2,
                        position: "absolute",
                        top: "-8px",
                        right: "-8px",
                        bgcolor: "background.body",
                        borderRadius: "50%",
                      },
                    },
                  }}
                >
                  {companyType &&
                    companyType.map((value: any) => (
                      <Sheet
                        {...register("company_type", { required: true })}
                        key={value.id}
                        variant="outlined"
                        sx={{
                          borderRadius: "md",
                          bgcolor: colors.primary,
                          boxShadow: "sm",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          gap: 1.5,
                          p: 2,
                          minWidth: 120,
                        }}
                      >
                        <Radio
                          id={value.id}
                          value={value.id}
                          checkedIcon={<CheckCircleRoundedIcon />}
                        />
                        <img src={`${value.name}.svg`} width="50px" />
                        <FormLabel htmlFor={value.id}>{value.name}</FormLabel>
                      </Sheet>
                    ))}
                </RadioGroup>
                {errors.company_type && (
                  <Typography variant="caption" sx={{ color: "red" }}>
                    company type cannot be blank
                  </Typography>
                )}
              </Box>
            </Grid>
            {/* <Grid item xs={12} md={6}>
              <Box sx={{ mt: 0.5 }}>
                <InputLabel sx={{ mb: 0.2, fontWeight: 700 }}>
                  Type of breeder:
                </InputLabel>
                <Autocomplete
                  variant="soft"
                  // multiple
                  // {...register("desired_pet", { required: true })}
                  onChange={(e, newValue) => {
                    setState({ breeder_type: newValue.id });
                  }}
                  getOptionLabel={(option: any) => option.name}
                  // placeholder="Combo box"
                  options={breederType}
                  sx={{ borderRadius: 0 }}
                  renderTags={(tags, getTagProps) =>
                    tags.map((item, index) => (
                      <Chip
                        variant="solid"
                        // color=""
                        endDecorator={<Close />}
                        {...getTagProps({ index })}
                      >
                        {item.name}
                      </Chip>
                    ))
                  }
                  // sx={{ width: 300 }}
                />
                {/* <InputWithoutBorder
                  sx={{ borderColor: errors.breeder_type && "red" }}
                  {...register("breeder_type", { required: true })}
                  size="small"
                  fullWidth
                /> 
                {errors.breeder_type && (
                  <Typography variant="caption" sx={{ color: "red" }}>
                    breeder type cannot be blank
                  </Typography>
                )}
              </Box>
            </Grid>
            <Grid item xs={12} md={6}></Grid> */}
            <Grid item xs={12} md={6}>
              <Box sx={{ mt: 0.5 }}>
                <InputLabel sx={{ mb: 0.2, fontWeight: 700 }}>
                  Password:
                </InputLabel>
                <InputWithoutBorder
                  sx={{ borderColor: errors.password && "red" }}
                  {...register("password", { required: true })}
                  size="small"
                  fullWidth
                  type="password"
                />
                {errors.password && (
                  <Typography variant="caption" sx={{ color: "red" }}>
                    password cannot be blank
                  </Typography>
                )}
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ mt: 0.5 }}>
                <InputLabel sx={{ mb: 0.2, fontWeight: 700 }}>
                  Confirm Password:
                </InputLabel>
                <InputWithoutBorder
                  {...register("confirm_password", { required: true })}
                  size="small"
                  fullWidth
                  type="password"
                />
                {errors.confirm_password && (
                  <Typography variant="caption" sx={{ color: "red" }}>
                    Confirm password cannot be blank
                  </Typography>
                )}
                {incorrectPassword && (
                  <Typography variant="caption" sx={{ color: "red" }}>
                    Confirm password must be equal to password
                  </Typography>
                )}
              </Box>
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    {...register("terms", { required: true })}
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
              {errors.terms && (
                <Typography variant="caption" sx={{ color: "red" }}>
                  Read and agree to our terms and conditions
                </Typography>
              )}
            </Grid>
            <Grid item xs={12}>
            {errorMsg && (
                  <Typography variant="caption" sx={{ color: "red" }}>
                    {errorMsg}
                  </Typography>
                )}
              <Container maxWidth="sm" sx={{ textAlign: "center" }}>
                {fetching ? (
                  <LoadingButton loading variant="outlined">
                    Submit
                  </LoadingButton>
                ) : (
                  <Button
                    // disabled={errors}
                    sx={{
                      bgcolor: colors.primary,
                      "&:hover": { bgcolor: colors.primary },
                      my: 4,
                    }}
                    variant="contained"
                    type="submit"
                  >
                    Create account
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
                  Sign up with google
                </Button> */}
              </Container>
            </Grid>
            <Grid xs={12} sx={{ mb: 4 }}>
              <Typography sx={{ textAlign: "center" }}>
                Already have an account?{" "}
                <Link to="/login" style={{ color: colors.primary }}>
                  Login
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

export default SignupBreeder;
