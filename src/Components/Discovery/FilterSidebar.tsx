import {
  Box,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { styled } from "@mui/styles";
import { colors } from "../../Constants/index";

const FilterSidebar = () => {
  return (
    <Box sx={{ pr: 3 }}>
      {/* <FormControl> */}
      <Box sx={{mt:6}}>
        <InputLabel sx={{ mb: 1.2, fontWeight: 700 }}>Animal</InputLabel>
        <SelectWithoutBorder fullWidth size="small" placeholder="Animal">
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </SelectWithoutBorder>
      </Box>
      <Box sx={{ mt: 3 }}>
        <InputLabel sx={{ mb: 1.2, fontWeight: 700 }}>Breeder</InputLabel>
        <SelectWithoutBorder fullWidth size="small" placeholder="Animal">
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </SelectWithoutBorder>
      </Box>
      {/* <Box> */}
      <FormGroup sx={{ mt: 3 }}>
        <InputLabel sx={{ mb: 1.2, fontWeight: 700 }}>Gender</InputLabel>
        <FormControlLabel
          control={<Checkbox sx={{ color: colors.primary, '&.Mui-checked': {
            color: colors.primary,
          }, }} />}
          label="Male"
        />
        <FormControlLabel
          control={<Checkbox sx={{ color: colors.primary, '&.Mui-checked': {
            color: colors.primary,
          }, }} />}
          label="Female"
        />
      </FormGroup>

      <Box sx={{ mt: 3 }}>
        <InputLabel sx={{ mb: 1.2, fontWeight: 700 }}>Age</InputLabel>
        <SelectWithoutBorder fullWidth size="small" placeholder="Animal">
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </SelectWithoutBorder>
      </Box>

      <Box sx={{ mt: 3 }}>
        <InputLabel sx={{ mb: 1.2, fontWeight: 700 }}>Size</InputLabel>
        <SelectWithoutBorder fullWidth size="small" placeholder="Animal">
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </SelectWithoutBorder>
      </Box>

      <Box sx={{ mt: 3 }}>
        <InputLabel sx={{ mb: 1.2, fontWeight: 700 }}>Color</InputLabel>
        <SelectWithoutBorder fullWidth size="small" placeholder="Animal">
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </SelectWithoutBorder>
      </Box>

      <FormGroup sx={{ mt: 3 }}>
        <InputLabel sx={{ mb: 1.2, fontWeight: 700 }}>Cared for by </InputLabel>
        <FormControlLabel
          control={<Checkbox sx={{ color: colors.primary, '&.Mui-checked': {
            color: colors.primary,
          }, }} />}
          label="Breeder"
        />
        <FormControlLabel
          control={<Checkbox sx={{ color: colors.primary, '&.Mui-checked': {
            color: colors.primary,
          }, }} />}
          label="Shelter"
        />
        <FormControlLabel
          control={<Checkbox sx={{ color: colors.primary, '&.Mui-checked': {
            color: colors.primary,
          }, }} />}
          label="Rescue"
        />
        <FormControlLabel
          control={<Checkbox sx={{ color: colors.primary, '&.Mui-checked': {
            color: colors.primary,
          }, }} />}
          label="Livestock"
        />
        
      </FormGroup>

      <Box sx={{mt: 3}} >
        <InputLabel sx={{ mb: 1.2, fontWeight: 700 }}>Location</InputLabel>
        <Stack direction='row' spacing={1.3}>
          <TextField size='small' placeholder="location" />
          <TextField size='small' placeholder="zip"  />
        </Stack>
        <FormControlLabel
          control={<Checkbox sx={{ color: colors.primary, '&.Mui-checked': {
            color: colors.primary,
          }, }} />}
          label="Available Now"
        />
      </Box>
      
    </Box>
  );
};

export default FilterSidebar;

const SelectWithoutBorder = styled(Select)({
  "&  .MuiInputBase-input": {
    background: colors.gray,
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "transparent",
  },
});
