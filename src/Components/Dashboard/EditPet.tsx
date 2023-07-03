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
import { useParams } from "react-router-dom";

const EditPet = () => {
  const {
    register,
    watch,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  
  const [state, setState] = useReducer(
    (state: any, newState: any) => ({ ...state, ...newState }),
    {
      refresh: false,
    }
    ); // useState<any>({});
    const [selected, setSelected] = useState<string[]>([]);
  const user: any = useAuth();
  const { id } = useParams<any>();
  // console.log(id);

  const BreederFields: Field[] = [
    { name: "name", type: "string" },
    { name: "description", type: "string" },
  ];

  const locationField: Field[] = [
    { name: "name", type: "string" },
    { name: "description", type: "string" },
    { name: "city", type: "string", data: state.cityRes },
    { name: "state", type: "string", data: state.stateRes },
  ];

  let formData = new FormData();

  const editPet = async (data: FieldValues) => {
    // const headers = formData.getHeaders();
    console.log(state);
    
    const dateStructure = data.born_at.split("T")
    const dataToPost: any = {
      ...data,
      // photos: state.photos,
      category_id: state?.type_of_animal?.id || state.category_id,
      breed_id: state.breed?.id,
      size_id: state.size?.id,
      location_id: state.location?.id,
      pet_characteristic: selected.toLocaleString(),
      member_id: user?.id,
      gender_id: state.gender_id,
      born_at: dateStructure[1] ? data.born_at : data.born_at + "T00:00:00"
    };

    for (const key in dataToPost) {
      if (dataToPost.hasOwnProperty(key)) {
        formData.append(key, dataToPost[key]);
      }
    }
    if(state?.photos){
      
      for (let i = 0; i < state.photos.length; i++) {
        if(state?.photos[i] instanceof Blob) formData.append("photos", state?.photos[i], state?.photos[i].name);
      }
    }
    console.log(dataToPost, state);
    
    const response = await Axios.put(`breeder/pets/${state.petProfile.id}`, dataToPost, {
      // headers: { "Content-Type": "multipart/form-data" },
    });

    if (response) reset();
    setState({ isPetAdded: true });
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setState({ photos: event.target.files });
    }
  };

  useEffect(() => {
    const makeAllCalls = async () => {
      const petProfile = await Axios.get(`/breeder/pets/${id}`);
      const petGender = await Axios.get("pet/gender");
      const petSize = await Axios.get("pet/size");
      const petBreed = await Axios.get("pet/breed");
      const petChar = await Axios.get("pet/pet-characteristic/");
      const petCategory = await Axios.get("category/pets/");
      const petLocation = await Axios.get("location");
      const cityRes = await Axios.get("city");
      const stateRes = await Axios.get("state");
      // const petAge = await Axios.get("pet/age");

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
        petProfile: (await petProfile).data.data[0],
        ...(await petProfile).data.data[0],
      });
      
      setSelected(petProfile.data.data[0].pet_characteristic_pets.map((obj:any) => obj.id))
    };
    makeAllCalls();
  }, [state.refresh, state.gender_id]);
  return (
    <Box>
      <Title text="Edit pet" sx={{ ml: 0 }} />
      {state.petProfile && (
        <Box
          component="form"
          onSubmit={handleSubmit(editPet)}
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
                    defaultValueInput={state?.petProfile.category_pet}
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
                    defaultValue={state?.petProfile.name}
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <FormLabel sx={{ color: colors.textHeading }}>
                    Breed
                  </FormLabel>
                </Grid>
                <Grid item xs={12} md={8}>
                  <AutocompleteWithDialog
                    defaultValueInput={state?.petProfile.breed}
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
                    defaultValueInput={state?.petProfile.size}
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
                  <FormLabel sx={{ color: colors.textHeading }}>
                    Health
                  </FormLabel>
                </Grid>
                <Grid item xs={12} md={8}>
                  <Input
                    {...register("health", { required: true })}
                    variant="soft"
                    placeholder="e.g Vaccines, medication"
                    defaultValue={state?.petProfile.health}
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
                    defaultValue={state?.petProfile.price}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                  <FormLabel sx={{ color: colors.textHeading }}>
                    Gender
                  </FormLabel>
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
                    defaultValue={state.petProfile.gender}
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <FormLabel sx={{ color: colors.textHeading }}>
                    Color
                  </FormLabel>
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
                    defaultValue={[state?.petProfile.color]}
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
                    defaultValue={state?.petProfile.age}
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
                  defaultValue={state?.petProfile.good_in_home}
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
                    defaultValue={state?.petProfile.born_at.split("T")[0]}
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
                    data={state?.locationRes}
                    field={locationField}
                    endpoint="/location"
                    title="location"
                    defaultValueInput={
                      state?.petProfile.location
                    }
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
                {(state?.petChar || selected) &&
                  state?.petChar.map((char: any) => {
                    const checked = selected.includes(char.id);
                    return (
                      <StyledChip
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
                  defaultValue={state?.petProfile.description}
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
                Edit pet
              </Button>
            </Grid>
          </Grid>
          {state.isPetAdded && (
            <Typography color="green" textAlign="center">
              Pet successfully editted
            </Typography>
          )}
        </Box>
      )}
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
export default EditPet;
