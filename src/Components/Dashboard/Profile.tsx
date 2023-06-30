import {
  Avatar,
  Box,
  Button,
  CardMedia,
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  OutlinedInput,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { colors } from "../../Constants";
import Title from "../../Common/Title";
import { FieldValues, useForm } from "react-hook-form";
import Axios from "../../API/Axios";
import useAuth from "../../Hooks/Auth";
import { capitalizeFirstLowercaseRest } from "../../utility";
import { Editor } from "@tinymce/tinymce-react";
import { response } from "express";

const Profile = () => {
  const user: any = useAuth();
  const [value, setValue] = useState(false);
  const [userProfile, setUserProfile] = useState<any>(undefined);
  const { register, handleSubmit } = useForm();

  const editorRef: any = useRef(null);

  const handleEditing = () => {
    setValue(!value);
  };

  const updateBreederProfile = async(data: FieldValues) => {
    const {id, ...rest} = userProfile

    data = {
      company_type: userProfile.company_type_id,
      breeder_type: userProfile.breeder_type_id,
      location_id: userProfile.location_id,
      ...data,
      about: editorRef.current.getContent()
    }
    const response = await Axios.put(`/member/breeder/${id}`, data)
    if(response.status === 200) {
      const res = await Axios.get(`member/breeder/${user?.id}`);
      setUserProfile(await res.data.data[0]);
      setValue(false)
    }
    console.log(response);
  };

  // console.log(user);

  // do {
  //    Axios.get(`member/breeder/${user?.id}`).then(res=> {
  //     setUserProfile( res.data.data[0])
  //    })
  // } while (userProfile === undefined);

  // if(userProfile === undefined) {
  //   const getBreederProfile =async() => {

  //     // console.log(user);
  //     const res = await Axios.get(`member/breeder/${user?.id}`);
  //     setUserProfile(await res.data.data[0])

  //   };
  //   getBreederProfile();

  // }

 

  useEffect(() => {
    const getBreederProfile = async () => {
      const res = await Axios.get(`member/breeder/${user?.id}`);
      setUserProfile(await res.data.data[0]);
    };
    getBreederProfile();
  }, [user]);

  return (
    <Box component="form" onSubmit={handleSubmit(updateBreederProfile)}>
      <Box maxHeight="300px">
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
                  userProfile?.breeder_type.name || ""
                )}{" "}
                Breeder
              </Typography>
              <Typography variant="subtitle2">
                {userProfile?.breeder_type.description || ""}
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
              {!value ? "Edit my profile" : "Stop editting"}
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
                  apiKey="yjlgp2hgqr7zs8y933q2y9hnei13zglvp76unch3m8zgr5cy"
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
              {/* <OutlinedInput
                {...register("display_name")}
                sx={{ my: 4, color: colors.textHeading }}
                value=" Hi! I’m Mac from Little Paws"
                size="small"
              />

              <TextareaAutosize
                {...register("about")}
                minRows={12}
                //     defaultValue="I am a dedicated and passionate breeder with a love for all things
                // canine. My interest in breeding started at a young age and has only
                // grown over the years as I have gained knowledge and experience in
                // the field. I am committed to breeding healthy, happy, and
                // well-tempered dogs. I spend a lot of time researching and studying
                // different breeds, paying close attention to their physical
                // characteristics and temperaments. I also make sure to keep
                // up-to-date with best practices in breeding and genetics to ensure
                // that my dogs are healthy and free of any genetic disorders. My
                // breeding program is focused on producing high-quality dogs that are
                // not only beautiful, but also have great dispositions and
                // temperaments. I am proud of the work that I do and the dogs that I
                // produce, and I enjoy sharing my knowledge and passion for breeding
                // with others."
                style={{ display: "block", width: "100%" }}
              /> */}
            </>
          ) : (
            <>
              
              <Typography dangerouslySetInnerHTML={{
        __html:
          userProfile?.about
      }}/>
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
                        defaultValue={userProfile?.name || ""}
                      />
                    ) : (
                      <ListItemText>
                        {userProfile?.name || ""}
                      </ListItemText>
                    )}
                  </ListItem>
                  <ListItem>
                    <ListItemText sx={{ maxWidth: 100 }} primary="Email" />
                    {value ? (
                      <OutlinedInput
                        {...register("email")}
                        size="small"
                        defaultValue={userProfile?.email || ""}
                      />
                    ) : (
                      <ListItemText>{userProfile?.email || ""}</ListItemText>
                    )}
                  </ListItem>
                  <ListItem>
                    <ListItemText sx={{ maxWidth: 100 }} primary="Website" />{" "}
                    {value ? (
                      <OutlinedInput
                        {...register("web_site")}
                        size="small"
                        defaultValue={userProfile?.web_site || ""}
                      />
                    ) : (
                      <ListItemText>{userProfile?.web_site || ""}</ListItemText>
                    )}
                  </ListItem>
                </List>
              </Grid>
              <Grid item xs={12} sm={6}>
                <List sx={{ width: "100%", maxWidth: 450 }}>
                <ListItem>
                    <ListItemText sx={{ maxWidth: 100 }} primary="Last Name" />
                    {value ? (
                      <OutlinedInput
                        {...register("last_name")}
                        size="small"
                        defaultValue={userProfile?.last_name || ""}
                      />
                    ) : (
                      <ListItemText>
                        {userProfile?.last_name || ""}
                      </ListItemText>
                    )}
                  </ListItem>
                  <ListItem>
                    <ListItemText sx={{ maxWidth: 100 }} primary="Phone" />
                    {value ? (
                      <OutlinedInput
                        {...register("phone_number")}
                        size="small"
                        defaultValue={userProfile?.phone_number || ""}
                      />
                    ) : (
                      <ListItemText>
                        {userProfile?.phone_number || ""}
                      </ListItemText>
                    )}
                  </ListItem>
                  <ListItem>
                    <ListItemText sx={{ maxWidth: 100 }} primary="Address" />
                    {value ? (
                      <OutlinedInput
                        {...register("address")}
                        size="small"
                        defaultValue={userProfile?.address || ""}
                      />
                    ) : (
                      <ListItemText>{userProfile?.address || ""}</ListItemText>
                    )}
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
      <Title
        text="Process for getting a puppy"
        sx={{ ml: 0, mb: 1 }}
        variation="small"
      />
      <Box
        sx={{
          p: 6,
          my: 3,
          borderRadius: 4,
          maxWidth: "85%",
          boxShadow: "6px 9px 29px -8px rgba(0,0,0,0.1)",
        }}
      >
        {/* {value ? (
          <>
            <TextareaAutosize
              minRows={12}
              defaultValue="If you're interested in a puppy from Little Paws, please contact the breeder. You'll be asked to provide information about yourself and what you are looking for so the breeder can help you find the right match. Once you apply, Mac will get back to you about availability, pricing and next steps."
              style={{ display: "block", width: "100%" }}
            />
            {/* <button onClick={() => {}}>Log editor content</button>
          </>
        ) : ( */}
          <Typography>
            If you're interested in a puppy from Little Paws, please contact the
            breeder. You'll be asked to provide information about yourself and
            what you are looking for so the breeder can help you find the right
            match. Once you apply, Mac will get back to you about availability,
            pricing and next steps.
          </Typography>
        {/* )} */}
        <Grid container>
          <Grid item xs={12}>
            <List sx={{ width: "100%", maxWidth: 650 }}>
              <ListItem>
                <ListItemText sx={{ maxWidth: 100 }} primary="Price" />
                {value ? (
                  <OutlinedInput
                    {...register("price")}
                    size="small"
                    defaultValue={userProfile?.price || ""}
                  />
                ) : (
                  <ListItemText>{userProfile?.price}</ListItemText>
                )}
              </ListItem>
              <ListItem>
                <ListItemText sx={{ maxWidth: 100 }} primary="Date" />
                {value ? (
                  <OutlinedInput
                    size="small"
                    {...register("date_information")}
                    defaultValue={userProfile?.date_information || ""}
                  />
                ) : (
                  <ListItemText>
                    {userProfile?.date_information}
                  </ListItemText>
                )}
              </ListItem>
              {/* <ListItem>
                    <ListItemText sx={{ maxWidth: 100 }} primary="Website" />{" "}
                    {value ? <OutlinedInput size="small" value="John@doe.com" /> :<ListItemText>www.jhondow.com</ListItemText>}
                  </ListItem> */}
            </List>
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

export default Profile;
