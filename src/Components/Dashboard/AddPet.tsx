import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import React, { FormEvent, useEffect, useReducer, useState } from "react";
import Title from "../../Common/Title";
import CheckIcon from "@mui/icons-material/Check";
import { colors } from "../../Constants";
import {
  Chip,
  FormControl,
  FormLabel,
  Checkbox,
  Input,
  Textarea,
  Autocomplete,
} from "@mui/joy";
import { styled } from "@mui/styles";
import { FieldValue, FieldValues, useForm } from "react-hook-form";
import Axios from "../../API/Axios";
import axios from "axios";
import AutocompleteWithDialog from "../../Common/AutocompleteWithDialog";
import { top100Films } from "../../data";
import { Field } from "../../interface/Pet";
import FormData from "form-data";
import useAuth from "../../Hooks/Auth";
import { AttachMoney } from "@mui/icons-material";

const AddPet = () => {
  const {
    register,
    watch,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [selected, setSelected] = useState<string[]>([]);
const [photoUrl, setPhotoUrl] = useState<any[]>([])
  const [state, setState] = useReducer(
    (state: any, newState: any) => ({ ...state, ...newState }),
    {
      refresh: false,
      photoUrl: [],
    }
  ); // useState<any>({});
  const user: any = useAuth();

  const BreederFields: Field[] = [
    { name: "name", type: "string" },
    { name: "description", type: "string" },
  ];

  const locationField: Field[] = [
    { name: "name", type: "string" },
    // { name: "description", type: "string" },
    // { name: "city", type: "string", data: state.cityRes },
    { name: "state", type: "string", data: state.stateRes },
  ];

  const deleteImage = (index: number) => {
    console.log(index, photoUrl, photoUrl.splice(index, 1));
    
    // setPhotoUrl([...photoUrl.splice(index, 1)])
    // displayImages()
  };
  let formData = new FormData();
  console.log(photoUrl);
  
  const createPet = async (data: FieldValues) => {
    // const headers = formData.getHeaders();
    const dataToPost: any = {
      ...data,
      category_id: state.type_of_animal?.id,
      breed_id: state.breed?.id,
      size_id: state.size?.id,
      city_id: state.city?.id,
      pet_characteristic: selected,
      member_id: user?.id,
      gender_id: state.gender_id,
      location_id: 0,
    };

    for (const key in dataToPost) {
      if (dataToPost.hasOwnProperty(key)) {
        formData.append(key, dataToPost[key]);
      }
    }
    for (let i = 0; i < state.photos.length; i++) {
      formData.append("photos", state.photos[i], state.photos[i].name);
    }

    const response = await Axios.post("breeder/pets/", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    if (response) reset();
    setState({ isPetAdded: true });
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      console.log(state.photos);
      setState({ photos: event.target.files });
      // setPhotoUrl(event.target.files)
      for (let i = 0; i < event.target.files.length; i++) {
        photoUrl.push(event.target.files[i])
        // setPhotoUrl([...photoUrl,URL.createObjectURL(event.target.files[i])]);
      }

      // setState({photoUrl: [...state.photoUrl,URL.createObjectURL(file)]})
      // }
      //  event.target.files?.map((file:any) =>{
      //  })
    }
  };

  useEffect(() => {
    const makeAllCalls = async () => {
      const petGender = Axios.get("pet/gender");
      const petSize = Axios.get("pet/size");
      const petBreed = Axios.get("pet/breed");
      const petChar = Axios.get("pet/pet-characteristic/");
      const petCategory = Axios.get("category/pets/");
      const petLocation = Axios.get("location");
      const cityRes = Axios.get("city");
      const stateRes = Axios.get("state");
      // const petAge = Axios.get("pet/age");

      setState({
        // ...state,
        petGender: (await petGender).data.data,
        petSize: (await petSize).data.data,
        petBreed: (await petBreed).data.data,
        // petAge: (await petAge).data.data,
        petChar: (await petChar).data.data,
        petCategory: (await petCategory).data.data,
        locationRes: (await petLocation).data.data,
        cityRes: (await cityRes).data.data,
        stateRes: (await stateRes).data.data,
      });
    };
    makeAllCalls();
  }, [state.refresh, state.gender_id]);
  return (
    <Box>
      <Title text="Add a pet" sx={{ ml: 0 }} />
      <Box
        component="form"
        onSubmit={handleSubmit(createPet)}
        sx={{
          border: "1px solid rgba(239, 239, 239, 1)",
          p: 4,
          my: 6,
          borderRadius: "15px",
          boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.08)",
        }}
      >
        <Box maxWidth="200px" sx={{ mx: "auto", my: 6 }}>
          <Button
            sx={{
              bgcolor: colors.grayLight,
              height: "150px",
              display: "flex",
              flexDirection: "column",
              boxShadow: "unset",
              "&:hover": { bgcolor: colors.grayLight },
            }}
            variant="contained"
            component="label"
          >
            <img src="/cameraIcon.svg" alt="upload icon" />
            <Typography sx={{ color: colors.textHeading }}>Upload</Typography>
            <input
              // {...register("images")}
              onChange={handleFileChange}
              hidden
              accept="image/*"
              multiple
              type="file"
            />
          </Button>
        </Box>
          <Box
            sx={{
              display: "flex",
              height: "150px",
              // width: "150px",
              borderRadius: "5px",
              // boxShadow: "0 0 5px rgba(0, 0, 0, 0.15)",
              overflow: "hidden",
              position: "relative",
            }}
          >
            {photoUrl &&
              photoUrl?.map((image: any, index: number) => (
                <Box component="span" key={index} sx={{mx:1}}>
                  <Box
                    component="img"
                    src={URL.createObjectURL(image)}
                    sx={{ width: "100%", height: "100%" }}
                    // onClick={() => deleteImage(index)}
                  />
                  <span
                    // component="span"
                    
                    style={{
                      position: "absolute",
                      top: "4px",
                      right: "4px",
                      cursor: "pointer",
                      fontSize: "22px",
                      color: "white",
                    }}
                  >
                    &times;
                  </span>
                </Box>
              ))}
          </Box>
        <Divider />

        <Grid container spacing={8} sx={{ mt: 2 }}>
          <Grid item xs={12} md={6}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={4}>
                <FormLabel sx={{ color: colors.textHeading }}>
                  Type of Animal
                </FormLabel>
              </Grid>
              <Grid item xs={12} md={8}>
                <AutocompleteWithDialog
                  getValue={{ state, setState }}
                  data={state.petCategory}
                  field={BreederFields}
                  endpoint="/category/pets"
                  title="type of animal"
                  placeholder="e.g Dog, cat"
                />
                {/* <Input
                  {...register("type")}
                  variant="soft"
                /> */}
              </Grid>
              <Grid item xs={12} md={4}>
                <FormLabel sx={{ color: colors.textHeading }}>Name</FormLabel>
              </Grid>
              <Grid item xs={12} md={8}>
                {/* <AutocompleteWithDialog
                  getValue={{ state, setState }}
                  data={state?.petBreed}
                  field={BreederFields}
                  endpoint="/pet/breed"
                  title="breed"
               
                /> */}
                <Input
                  {...register("name", { required: true })}
                  variant="soft"
                  placeholder="e.g pet name"
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <FormLabel sx={{ color: colors.textHeading }}>Breed</FormLabel>
              </Grid>
              <Grid item xs={12} md={8}>
                <AutocompleteWithDialog
                  getValue={{ state, setState }}
                  data={state?.petBreed}
                  field={BreederFields}
                  endpoint="/pet/breed"
                  title="breed"
                  placeholder="e.g Akita,  poodle"
                />
                {/* <Input
                  {...register("breed_id")}
                  variant="soft"
                /> */}
              </Grid>
              <Grid item xs={12} md={4}>
                <FormLabel sx={{ color: colors.textHeading }}>Size</FormLabel>
              </Grid>
              <Grid item xs={12} md={8}>
                <AutocompleteWithDialog
                  getValue={{ state, setState }}
                  data={state?.petSize}
                  field={BreederFields}
                  endpoint="/pet/size/create"
                  title="size"
                  placeholder="e.g Small (0-25lbs)"
                />

                {/* <Input
                  {...register("size_id")}
                  variant="soft"
                /> */}
              </Grid>
              <Grid item xs={12} md={4}>
                <FormLabel sx={{ color: colors.textHeading }}>Health</FormLabel>
              </Grid>
              <Grid item xs={12} md={8}>
                <Input
                  {...register("health", { required: true })}
                  variant="soft"
                  placeholder="e.g Vaccines, medication"
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <FormLabel sx={{ color: colors.textHeading }}>
                  Pet Price
                </FormLabel>
              </Grid>
              <Grid item xs={12} md={8}>
                <Input
                  startDecorator={<AttachMoney />}
                  {...register("price", { required: true })}
                  variant="soft"
                  placeholder="e.g $1000"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={4}>
                <FormLabel sx={{ color: colors.textHeading }}>Gender</FormLabel>
              </Grid>
              <Grid item xs={12} md={8}>
                <Autocomplete
                  options={state?.petGender}
                  // {...register("gender_id", { required: true })}
                  onChange={(e, newValue) => {
                    setState({ gender_id: newValue?.id });
                  }}
                  getOptionLabel={(option: any) => option.name}
                  // renderInput={(params) => <TextField {...params} label="Movie" />}
                  // renderOption={(props, option: any) => (<Typography {...props}>{option.name}</Typography>)}
                  variant="soft"
                  placeholder="e.g Male"
                  sx={{ width: "100%" }}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <FormLabel sx={{ color: colors.textHeading }}>Color</FormLabel>
              </Grid>
              <Grid item xs={12} md={8}>
                {/* <AutocompleteWithDialog
                  getValue={{ state, setState }}
                  data={top100Films}
                  field={BreederFields}
                  endpoint="/pet/color"
                  title="Color"
                  /> */}
                <Input
                  {...register("color", { required: true })}
                  placeholder="e.g Tan/Red"
                  variant="soft"
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <FormLabel sx={{ color: colors.textHeading }}>Age</FormLabel>
              </Grid>
              <Grid item xs={12} md={8}>
                {/* <AutocompleteWithDialog
                  getValue={{ state, setState }}
                  data={top100Films}
                  field={BreederFields}
                  endpoint="/pet/age"
                  title="Age"
                  /> */}
                <Input
                  {...register("age", { required: true })}
                  variant="soft"
                  placeholder="e.g 8 months"
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <FormLabel sx={{ color: colors.textHeading }}>
                  Good in a home with
                </FormLabel>
              </Grid>
              <Grid item xs={12} md={8}>
                <Input
                  {...register("good_in_home", { required: true })}
                  variant="soft"
                  placeholder="e.g no other pets, family"
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <FormLabel sx={{ color: colors.textHeading }}>
                  Birth date
                </FormLabel>
              </Grid>
              <Grid item xs={12} md={8}>
                <Input
                  {...register("born_at", { required: true })}
                  variant="soft"
                  type="date"
                  // placeholder="e.g no other pets, family"
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <FormLabel sx={{ color: colors.textHeading }}>
                  Location
                </FormLabel>
              </Grid>
              <Grid item xs={12} md={8}>
                <AutocompleteWithDialog
                  getValue={{ state, setState }}
                  data={state?.cityRes || []}
                  field={locationField}
                  endpoint="/city"
                  title="city"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Divider sx={{ my: 6 }} />
        <Grid container>
          <Grid item xs={12} md={3}>
            <FormLabel sx={{ color: colors.textHeading }}>
              Pet Characteristics
            </FormLabel>
          </Grid>
          <Grid item xs={12} md={9}>
            <Box
              role="group"
              aria-labelledby="fav-movie"
              sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}
            >
              {state?.petChar &&
                state?.petChar.map((char: any) => {
                  const checked = selected.includes(char.id);
                  return (
                    <StyledChip
                      // {...register("pet_characteristic")}
                      key={char.name}
                      variant={checked ? "soft" : "plain"}
                      color="success"
                      startDecorator={
                        checked && (
                          <CheckIcon
                            sx={{ zIndex: 1, pointerEvents: "none" }}
                          />
                        )
                      }
                    >
                      <Checkbox
                        variant="outlined"
                        color={checked ? "primary" : "neutral"}
                        disableIcon
                        overlay
                        label={char.name}
                        checked={checked}
                        onChange={(event) => {
                          setSelected((ids) =>
                            !event.target.checked
                              ? ids.filter((n) => n !== char.id)
                              : [...ids, char.id]
                          );
                        }}
                      />
                    </StyledChip>
                  );
                })}
            </Box>
          </Grid>
          <Grid item xs={12}>
            <FormControl>
              <FormLabel>Describe your pet </FormLabel>
              <Textarea
                {...register("description", { required: true })}
                variant="soft"
                minRows={10}
                maxRows={10}
              />
            </FormControl>
          </Grid>
          <Grid
            sx={{ display: "flex", justifyContent: "center", my: 6 }}
            item
            xs={12}
          >
            <Button
              variant="outlined"
              sx={{
                borderColor: colors.primary,
                color: colors.primary,
                "&:hover": {
                  borderColor: colors.primary,
                  color: colors.primary,
                },
                mx: 4,
              }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              type="submit"
              sx={{
                bgcolor: colors.primary,
                color: colors.white,
                "&:hover": {
                  bgcolor: colors.primary,
                  color: colors.white,
                },
              }}
            >
              Add pets
            </Button>
          </Grid>
        </Grid>
        {state.isPetAdded && (
          <Typography color="green" textAlign="center">
            Pet successfully added
          </Typography>
        )}
      </Box>
    </Box>
  );
};

const StyledChip = styled(Chip)({
  "&.MuiChip-root": {
    // backgroundColor: `${colors.primary}!important`,
    "--Chip-radius": "4px",
    margin: "3px 6px",
  },
});

interface FilmOptionType {
  inputValue?: string;
  name: string;
  description: string;
}
export default AddPet;
