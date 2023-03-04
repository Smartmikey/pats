import {
  Box,
  Button,
  FormControl,
  Grid,
  Rating,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { colors } from "../../Constants";

const WriteReview = () => {
  const [value, setValue] = useState<number | null>();

  return (
    <Box
      sx={{
        width: "80%",
        px: 20,
        my: 6,
        boxShadow: " 0 3px 8px rgb(0 0 0 / 0.15)",
        p: 8,
        mx: "auto",
        borderRadius: "8px",
      }}
    >
      <Grid container>
        <Grid item xs={12}>
            <Typography variant="h5" sx={{color: colors.textHeading, my: 4}}> Write a review</Typography>
        </Grid>
        <Grid item xs={4}>
          <FormControl>
            {/* <InputLabel id='fname'>First Name</InputLabel> */}
            <TextField
              sx={{
                background: colors.gray,
                "& fieldset": { border: "none" },
                borderRadius: "10px",
              }}
              label="First Name"
            />
          </FormControl>
        </Grid>
        <Grid item xs={8} sx={{ textAlign: "end", color: "gold" }}>
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            multiline
            sx={{
              background: colors.gray,
              "& fieldset": { border: "none" },
              borderRadius: "10px",
              mt: 5,
            }}
            rows={8}
            fullWidth
            label="Share your thoughts"
          />
          <Typography
            variant="overline"
            sx={{ display: "block", textAlign: "right" }}
          >
            0/300
          </Typography>
          <Button
            variant="outlined"
            sx={{
              borderColor: colors.primary,
              color: colors.primary,
              "&:hover": { borderColor: colors.primary },
            }}
          >
            {" "}
            <img
              src="camera.svg"
              alt="Camera icon"
              style={{ marginRight: 10 }}
            />{" "}
            Add photo <input hidden type="file" />
          </Button>
          <Box sx={{display: 'flex', justifyContent: 'end', my: 2}}>

          <Button
            variant="contained"
            sx={{
              bgcolor: colors.primary,
              color: colors.white,
              "&:hover": { bgcolor: colors.primary },
            //   display: 'block',
              
            }}
          >Post</Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WriteReview;
