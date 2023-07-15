import {
  Avatar,
  Box,
  Button,
  CardMedia,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  List,
  ListItem,
  ListItemText,
  OutlinedInput,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import { useEffect, useReducer, useRef, useState } from "react";
import { colors } from "../../Constants";
import Title from "../../Common/Title";
import Chip from "@mui/joy/Chip";
import styled from "@emotion/styled";
import { FormControl, Select, Option, Input, Autocomplete } from "@mui/joy";
import { Close } from "@mui/icons-material";
import { Editor } from "@tinymce/tinymce-react";
import { useForm, FieldValues } from "react-hook-form";
import useAuth from "../../Hooks/Auth";
import Axios from "../../API/Axios";
import AutocompleteWithDialog from "../../Common/AutocompleteWithDialog";
import { Field } from "../../interface/Pet";
import { capitalizeFirstLowercaseRest, getIdsAsString } from "../../utility";
const Profile = () => {
  const [state, setState] = useReducer(
    (state: any, newState: any) => ({ ...state, ...newState }),
    {}
  );
  const user: any = useAuth();
  const [value, setValue] = useState(false);
  const [userProfile, setUserProfile] = useState<any>(undefined);
  const { register, handleSubmit } = useForm();

  const editorRef: any = useRef(null);

  const handleEditing = () => {
    setValue(!value);
  };
  console.log(userProfile);

  const locationField: Field[] = [
    { name: "name", type: "string" },
    // { name: "description", type: "string" },
    // { name: "city", type: "string", data: state.cityRes },
    { name: "state", type: "string", data: state.stateRes },
  ];
  const updateUserProfile = async (data: FieldValues) => {
    const { id, ...rest } = userProfile;

    data = {
      company_type: userProfile?.company_type_id,
      breeder_type: userProfile.breeder_type_id,
      city_id: state.city.id,
      ...data,
      about: editorRef.current.getContent(),
      price: 0,
      web_site: "",
      date_information: "",
      business_name: '',
      phone_number: "",
      address: "",
    };
    const response = await Axios.put(`/member/breeder/${id}`, data);
    if (response.status === 200) {
      const res = await Axios.get(`member/breeder/${user?.id}`);
      setUserProfile(await res.data.data[0]);
      setValue(false);
    }
    console.log(response);
  };
  console.log(userProfile, user?.id);

  useEffect(() => {
    if (user?.id) {
      Axios.get(`member/breeder/${user?.id}`).then((res) => {
        Axios.get(`city/${res.data.data[0].city_id}`).then(cityItem => {

          setUserProfile({...res.data.data[0], city: cityItem.data.data[0]});
        })

      });
    }
    const getBreederProfile = async () => {
      const cityRes = Axios.get("city");
      const stateRes = Axios.get("state");
      const sizeRes = Axios.get("pet/size");
      const desiredRes = Axios.get("category/pets");
      const genderRes = Axios.get("/pet/gender");
      const breedRes = Axios.get("/pet/breed");
      setState({
        cityRes: (await cityRes).data.data,
        stateRes: (await stateRes).data.data,
        desiredRes: (await desiredRes).data.data,
        sizeRes: (await sizeRes).data.data,
        genderRes: (await genderRes).data.data,
        breedRes: (await breedRes).data.data,
      });
    };
    getBreederProfile();
  }, [user?.id]);
  return (
    <Box component="form"
        onSubmit={handleSubmit(updateUserProfile)}>
      <Box
        maxHeight="300px"
        
      >
        <CardMedia
          component="img"
          height="200px"
          src="/_placeholderImage.png"
        />
        <Container
          sx={{
            bgcolor: colors.primaryLight,
          }}
          maxWidth="xl"
        >
          <Box
            sx={{
              px: { xs: 1.5, md: 10 },
              py: 3,
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              gap: 4,
            }}
          >
            <Avatar
              src="ladyImage.png"
              sx={{ width: 150, height: 150, mt: -9 }}
            />
            <Box sx={{ flex: 1 }}>
              <Typography variant="h4" sx={{ fontSize: { xs: "24px" } }}>
                {capitalizeFirstLowercaseRest(
                  `${userProfile?.name} ${userProfile?.last_name}`
                )}
              </Typography>
              <Typography variant="subtitle2">
                Breed's{" "}
                {capitalizeFirstLowercaseRest(userProfile?.breeder_type?.name)}
              </Typography>
            </Box>
            <Button
              variant="outlined"
              sx={{
                borderColor: colors.primary,
                color: colors.primary,
                "&:hover": {
                  borderColor: colors.primary,
                  color: colors.primary,
                },
              }}
              onClick={handleEditing}
            >
              {!value ? "Edit my profile" : "Stop editing"}
            </Button>
          </Box>
        </Container>
      </Box>
      <Title text="About me" sx={{ ml: 0 }} variation="small" />
      <Box
        sx={{
          p: 3,
          my: 3,
          borderRadius: 4,
          maxWidth: "90%",
          boxShadow: "6px 9px 29px -8px rgba(0,0,0,0.1)",
        }}
      >
        <Container sx={{ my: 7 }}>
          {value ? (
            <>
              <>
                <Editor
                  apiKey={process.env.REACT_APP_EDITOR_API_KEY}
                  onInit={(evt, editor) => (editorRef.current = editor)}
                  initialValue={userProfile?.about || ""}
                  init={{
                    height: 500,
                    menubar: false,
                    plugins: [
                      "advlist",
                      "autolink",
                      "lists",
                      "link",
                      "image",
                      "charmap",
                      "preview",
                      "anchor",
                      "searchreplace",
                      "visualblocks",
                      "code",
                      "fullscreen",
                      "insertdatetime",
                      "media",
                      "table",
                      "code",
                      "help",
                      "wordcount",
                    ],
                    toolbar:
                      "undo redo | blocks | " +
                      "bold italic forecolor | alignleft aligncenter " +
                      "alignright alignjustify | bullist numlist outdent indent | " +
                      "removeformat | help",
                    content_style:
                      "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                  }}
                />
              </>
            </>
          ) : (
            <>
              <Typography dangerouslySetInnerHTML={{
                  __html: userProfile?.about,
                }} />
            </>
          )}
          <Typography variant="h5" sx={{ my: 4, color: colors.textHeading }}>
            Contact info
          </Typography>
          <Box
            sx={{
              bgcolor: colors.primaryLight,
              p: { xs: 1, md: 5 },
              borderRadius: "8px",
            }}
          >
            <Grid container>
              <Grid item xs={12} sm={6}>
                <List sx={{ width: "100%", maxWidth: 450 }}>
                  <ListItem>
                    <ListItemText sx={{ maxWidth: 100 }} primary="Name" />
                    {value ? (
                      <OutlinedInput
                        {...register("name")}
                        size="small"
                        defaultValue={userProfile?.name}
                      />
                    ) : (
                      <ListItemText>{userProfile?.name} </ListItemText>
                    )}
                  </ListItem>
                  <ListItem>
                    <ListItemText sx={{ maxWidth: 100 }} primary="Last name" />
                    {value ? (
                      <OutlinedInput
                        {...register("last_name")}
                        size="small"
                        defaultValue={userProfile?.last_name}
                      />
                    ) : (
                      <ListItemText>{userProfile?.last_name}</ListItemText>
                    )}
                  </ListItem>
                  <ListItem>
                    <ListItemText sx={{ maxWidth: 100 }} primary="Email" />
                    {value ? (
                      <OutlinedInput
                        {...register("email")}
                        size="small"
                        defaultValue={userProfile?.email}
                      />
                    ) : (
                      <ListItemText>{userProfile?.email}</ListItemText>
                    )}
                  </ListItem>
                </List>
              </Grid>
              <Grid item xs={12} sm={6}>
                <List sx={{ width: "100%", maxWidth: 450 }}>
                  {/* <ListItem>
                    <ListItemText sx={{ maxWidth: 100 }} primary="Phone" />
                    {value ? (
                      <OutlinedInput
                        {...register("phone_number")}
                        size="small"
                        defaultValue={userProfile?.phone_number}
                      />
                    ) : (
                      <ListItemText>{userProfile?.phone_number}</ListItemText>
                    )}
                  </ListItem> */}
                  <ListItem>
                    <ListItemText sx={{ maxWidth: 100 }} primary="Location" />
                    {value ? (
                     <AutocompleteWithDialog
                     getValue={{ state, setState }}
                     data={state?.cityRes || []}
                     field={locationField}
                     endpoint="/city"
                     title="city"
                    //  variant="soft"
                    tone
                   />
                    ) : (
                      <ListItemText>{userProfile?.city?.name}</ListItemText>
                    )}
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
      <Title text="My interest" sx={{ ml: 0, mb: 1 }} variation="small" />
      <Box
        sx={{
          p: 6,
          my: 3,
          borderRadius: 4,
          maxWidth: "85%",
          boxShadow: "6px 9px 29px -8px rgba(0,0,0,0.1)",
        }}
      >
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Typography sx={{ fontWeight: 600, mb: 2 }}>
              {" "}
              Desired Pet
            </Typography>
            {value ? (
              <Autocomplete
                variant="soft"
                multiple
                // {...register("desired_pet", { required: true })}
                onChange={(e, newValue) => {
                  setState({ desired_pet: getIdsAsString(newValue) });
                }}
                getOptionLabel={(option: any) => option.name}
                // placeholder="Combo box"
                options={state?.desiredRes}
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
            ) : (
              ["Territorial", "Anxious", "Joyful", "Lots of energy"].map(
                (name) => {
                  // const checked = selected.includes(name);
                  return (
                    <StyledChip
                      key={name}
                      // variant={"plain"}
                      // color="success"
                    >
                      {name}
                    </StyledChip>
                  );
                }
              )
            )}
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography sx={{ fontWeight: 600, mb: 2 }}> Breed</Typography>
            {value ? (
              <Autocomplete
                variant="soft"
                multiple
                onChange={(e, newValue) => {
                  setState({ breed_id: getIdsAsString(newValue) });
                }}
                getOptionLabel={(option: any) => option.name}
                // placeholder="Combo box"
                options={state?.breedRes}
                renderTags={(tags, getTagProps) =>
                  tags.map((item, index) => (
                    <Chip
                      variant="solid"
                      color="primary"
                      endDecorator={<Close />}
                      {...getTagProps({ index })}
                    >
                      {item.name}
                    </Chip>
                  ))
                }
                // sx={{ width: 300 }}
              />
            ) : (
              ["Territorial", "Anxious", "Joyful", "Lots of energy"].map(
                (name) => {
                  // const checked = selected.includes(name);
                  return (
                    <StyledChip
                      key={name}
                      // variant={"plain"}
                      // color="success"
                    >
                      {name}
                    </StyledChip>
                  );
                }
              )
            )}
          </Grid>
          {/* <Grid item xs={12} md={4}>
            <Typography sx={{ fontWeight: 600, mb: 2 }}>Pet</Typography>
            {value ? (
              <Autocomplete
                variant="soft"
                multiple
                getOptionLabel={(option) => option}
                // placeholder="Combo box"
                options={["Territorial", "Anxious", "Joyful", "Lots of energy"]}
                renderTags={(tags, getTagProps) =>
                  tags.map((item, index) => (
                    <Chip
                      variant="solid"
                      color="primary"
                      endDecorator={<Close />}
                      {...getTagProps({ index })}
                    >
                      {item}
                    </Chip>
                  ))
                }
                // sx={{ width: 300 }}
              />
            ) : (
              ["Territorial", "Anxious", "Joyful", "Lots of energy"].map(
                (name) => {
                  // const checked = selected.includes(name);
                  return (
                    <StyledChip
                      key={name}
                      // variant={"plain"}
                      // color="success"
                    >
                      {name}
                    </StyledChip>
                  );
                }
              )
            )}
          </Grid> */}
          {/* <Grid item xs={12} sx={{ mt: 5 }}></Grid> */}
          <Grid item xs={12} md={4}>
            <Typography sx={{ fontWeight: 600, mb: 2 }}>Size</Typography>
            {value ? (
              <Autocomplete
                variant="soft"
                multiple
                onChange={(e, newValue) => {
                  setState({ size_id: getIdsAsString(newValue) });
                }}
                getOptionLabel={(option: any) => option.name}
                // placeholder="Combo box"
                options={state?.sizeRes}
                renderTags={(tags, getTagProps) =>
                  tags.map((item, index) => (
                    <Chip
                      variant="solid"
                      color="primary"
                      endDecorator={<Close />}
                      {...getTagProps({ index })}
                    >
                      {item.name}
                    </Chip>
                  ))
                }
                // sx={{ width: 300 }}
              />
            ) : (
              ["Small", "Medium"].map((name) => {
                // const checked = selected.includes(name);
                return (
                  <StyledChip
                    key={name}
                    // variant={"plain"}
                    // color="success"
                  >
                    {name}
                  </StyledChip>
                );
              })
            )}
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography sx={{ fontWeight: 600, mb: 2 }}>Color</Typography>
            {value ? (
              <Autocomplete
                variant="soft"
                multiple
                getOptionLabel={(option) => option}
                // placeholder="Combo box"
                options={["Green ", "Red", "Yellow"]}
                renderTags={(tags, getTagProps) =>
                  tags.map((item, index) => (
                    <Chip
                      variant="solid"
                      color="primary"
                      endDecorator={<Close />}
                      {...getTagProps({ index })}
                    >
                      {item}
                    </Chip>
                  ))
                }
                // sx={{ width: 300 }}
              />
            ) : (
              <>
                {" "}
                {["Brown", "Green"].map((name) => {
                  // const checked = selected.includes(name);
                  return (
                    <StyledChip
                      key={name}
                      // variant={"plain"}
                      // color="success"
                    >
                      {name}
                    </StyledChip>
                  );
                })}
              </>
            )}
          </Grid>
          {/* <Grid item xs={12} md={4}></Grid> */}
          {/* <Grid item xs={12} sx={{ mt: 5 }}></Grid> */}
          <Grid item xs={12} md={4}>
            <Typography sx={{ fontWeight: 600, mb: 2 }}>
              Cared for by
            </Typography>
            {value ? (
              <Autocomplete
                variant="soft"
                multiple
                getOptionLabel={(option) => option}
                // placeholder="Combo box"
                options={["Breeder", "Shelter"]}
                renderTags={(tags, getTagProps) =>
                  tags.map((item, index) => (
                    <Chip
                      variant="solid"
                      color="primary"
                      endDecorator={<Close />}
                      {...getTagProps({ index })}
                    >
                      {item}
                    </Chip>
                  ))
                }
                // sx={{ width: 300 }}
              />
            ) : (
              <>
                {["Breeder", "Shelter"].map((name) => {
                  // const checked = selected.includes(name);
                  return (
                    <Typography sx={{ color: colors.primary }}>
                      {name}
                    </Typography>
                  );
                })}
              </>
            )}
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography sx={{ fontWeight: 600, mb: 2 }}>Gender</Typography>
            {value ? (
              <Autocomplete
                variant="soft"
                multiple
                getOptionLabel={(option: any) => option.name}
                // placeholder="Combo box"
                options={state?.genderRes}
                renderTags={(tags, getTagProps) =>
                  tags.map((item, index) => (
                    <Chip
                      variant="solid"
                      color="primary"
                      endDecorator={<Close />}
                      {...getTagProps({ index })}
                    >
                      {item.name}
                    </Chip>
                  ))
                }
                // sx={{ width: 300 }}
              />
            ) : (
              <Typography sx={{ color: colors.primary }}>Any</Typography>
            )}
          </Grid>
          <Grid item xs={12} md={4}></Grid>
        </Grid>
      </Box>
      <Title text="Basic information" sx={{ ml: 0, mb: 1 }} variation="small" />
      <Box
        sx={{
          p: 6,
          my: 3,
          borderRadius: 4,
          maxWidth: "85%",
          boxShadow: "6px 9px 29px -8px rgba(0,0,0,0.1)",
        }}
      >
        <Grid container columnSpacing={4}>
          <Grid item xs={12} md={6}>
            <Typography sx={{ fontWeight: 600, mb: 2 }}>
              What type of home do you live in?
            </Typography>

            {value ? (
              <Select defaultValue="Appartment" variant="soft">
                <Option value="appartment">Appartment</Option>
                <Option value="condominium">Condominium</Option>
                <Option value="duplex">Duplex</Option>
                <Option value="bungalows">Bungalows</Option>
              </Select>
            ) : (
              <>
                {["Appartment"].map((name) => {
                  // const checked = selected.includes(name);
                  return (
                    <StyledChip
                      key={name}
                      // variant={"plain"}
                      // color="success"
                    >
                      {name}
                    </StyledChip>
                  );
                })}
              </>
            )}
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography sx={{ fontWeight: 600, mb: 2 }}>
              Who will be the primary caretaker of your new puppy?
            </Typography>
            {value ? (
              <Select defaultValue="Myself" variant="soft">
                <Option value="Myself">Myself</Option>
                <Option value="Someone else">Someone else</Option>
              </Select>
            ) : (
              <StyledChip>Myself</StyledChip>
            )}
          </Grid>

          <Grid item xs={12} sx={{ mt: 5 }}></Grid>
          <Grid item xs={12} md={6}>
            <Typography sx={{ fontWeight: 600, mb: 2 }}>
              Any other pets?
            </Typography>
            {value ? (
              <FormControl
                sx={{ display: "flex", flexDirection: "row", gap: 3 }}
              >
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
                  label="Yes"
                />
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
                  label="No"
                />
              </FormControl>
            ) : (
              <Typography sx={{ color: colors.primary }}>Yes</Typography>
            )}
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography sx={{ fontWeight: 600, mb: 2 }}>
              Are you at least 18 y/o?
            </Typography>
            {value ? (
              <FormControl
                sx={{ display: "flex", flexDirection: "row", gap: 3 }}
              >
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
                  label="Yes"
                />
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
                  label="No"
                />
              </FormControl>
            ) : (
              <Typography sx={{ color: colors.primary }}>Yes</Typography>
            )}
            
          </Grid>
          {value && (
            <Grid item xs={12} sx={{ textAlign: "center" }}>
              <Button
                variant="outlined"
                sx={{
                  borderColor: colors.primary,
                  color: colors.primary,
                  mx: 0.6,
                  "&:hover": {
                    borderColor: colors.primary,
                    color: colors.dark,
                  },
                }}
                onClick={()=> handleEditing()}
              >
                cancel
              </Button>
              <Button
                variant="contained"
                type="submit"
                sx={{
                  bgcolor: colors.primary,
                  color: colors.white,
                  mx: 0.6,
                  "&:hover": {
                    bgcolor: colors.primary,
                    color: colors.dark,
                  },
                }}
              >
                Save changes
              </Button>
            </Grid>
          )}
        </Grid>
      </Box>
    </Box>
  );
};

const StyledChip = styled(Chip)({
  "&.MuiChip-root": {
    backgroundColor: `${colors.primary}!important`,
    "--Chip-radius": "10px",
    margin: "3px 6px",
  },
});

export default Profile;
