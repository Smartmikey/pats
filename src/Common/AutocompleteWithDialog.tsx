import * as React from "react";
// import  from '@mui/react'
import Autocomplete, { createFilterOptions } from "@mui/joy/Autocomplete";
import AutocompleteOption from "@mui/joy/AutocompleteOption";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import Button from "@mui/joy/Button";
import Input from "@mui/joy/Input";
import Typography from "@mui/joy/Typography";
import Stack from "@mui/joy/Stack";
import { FormEvent, useEffect, useState } from "react";
import { Field } from "../interface/Pet";
import { FieldValues, useForm } from "react-hook-form";
import {
  Box,
  Autocomplete as ReactAutocomplete,
  TextField,
} from "@mui/material";
import Axios from "../API/Axios";
// import {  } from "@mui/joy";

const filter = createFilterOptions<any>();

const AutocompleteWithDialog = ({
  data,
  field,
  title,
  getValue,
  endpoint,
  placeholder,
  sx,
  defaultValueInput,
  tone
}: AutoCompleteProps) => {
  const [value, setValue] = useState<any | null>(defaultValueInput || null);
  const [open, toggleOpen] = useState(false);
  const { register, handleSubmit: handleUseFormSubmit } = useForm();
  let [dialogValue, setDialogValue] = useState<any>({
    name: "",
    description: "",
  });

  
  const handleClose = () => {
    // setDialogValue({
    //   name: '',
    //   description: '',
    // });

    toggleOpen(false);
  };

  const handleSubmit = async (data: FieldValues) => {
    field.map(fields => {
      if(fields.data){
        data[fields.name+ '_id'] = getValue.state[fields.name]
        // fields.data.map((subdata:any) =>{
        // })
      }
    })
    
    const response = await Axios.post(endpoint, data);
    getValue.setState({
      ...getValue.state,
      [title]: { ...response.data.data },
      refresh: !getValue.state.refresh,
    });
    // event.preventDefault();
    setValue({
      ...data,
    });
    
    handleClose();
  };
  useEffect(() => {
  
}, [value])
  return (
    <React.Fragment>
      <FormControl>
        <Autocomplete
          value={value}
          placeholder={placeholder}
          // variant="soft"
          onChange={(event, newValue) => {
            if (typeof newValue === "string") {
              // timeout to avoid instant validation of the dialog's form.
              setTimeout(() => {
                toggleOpen(true);
                setDialogValue({
                  name: newValue,
                  //   year: '',
                });
                getValue.setState({
                  ...getValue.state,
                  [title.toLowerCase().split(" ").join("_")]: newValue,
                  refresh: !getValue.state.refresh,
                });
              });
            } else if (newValue && newValue.inputValue) {
              toggleOpen(true);
              setDialogValue({
                name: newValue.inputValue,
                // year: '',
              });
              getValue.setState({
                ...getValue.state,
                [title.toLowerCase().split(" ").join("_")]: newValue.inputValue,
                refresh: !getValue.state.refresh,
              });
            } else {
              
              setValue(newValue);
              getValue.setState({
                ...getValue.state,
                [title.toLowerCase().split(" ").join("_")]: newValue,
                refresh: !getValue.state.refresh,
              });
            }
          }}
          filterOptions={(options, params) => {
            const filtered = filter(options, params);
            
            if (params.inputValue !== "") {
              filtered.push({
                inputValue: params.inputValue,
                name: `Add "${params.inputValue}"`,
              });
            }
            
            return filtered;
          }}
          options={data}
          getOptionLabel={(option) => {
            // e.g value selected with enter, right from the input
            
            if (typeof option === "string") {
              return option;
            }
            if (option.inputValue) {
              return option.inputValue;
            }
            return option?.name || option?.title;
          }}
          selectOnFocus
          clearOnBlur
          handleHomeEndKeys
          variant={tone ? "outlined" : "soft"}
          renderOption={(props, option) => (
            <AutocompleteOption key={option.name} {...props}>
              {option.name}
            </AutocompleteOption>
          )}
          sx={{...{ width: "100%" }, ...sx}}
          defaultValue={defaultValueInput}
          />
      </FormControl>
      <Modal open={open} onClose={handleClose}>
        <ModalDialog>
          <Box component="form" onSubmit={handleUseFormSubmit(handleSubmit)}>
            <Typography
              id="basic-modal-dialog-title"
              component="h2"
              level="inherit"
              fontSize="1.25em"
              mb="0.25em"
            >
              Add a {title}
            </Typography>
            <Typography
              id="basic-modal-dialog-description"
              mt={0.5}
              mb={2}
              textColor="text.tertiary"
            >
              Did you miss any {title.toLocaleLowerCase()} in our list? Please,
              add it!
            </Typography>
            <Stack spacing={2}>
              {field.map((item, index) => {
                return (
                  <FormControl key={index} id={item.name}>
                    <FormLabel>{item.name.toUpperCase()}</FormLabel>
                    {!item?.data ? (
                      <Input
                        autoFocus
                        type="text"
                        value={dialogValue[item.name]}
                        {...register(item.name)}
                      />
                    ) : (
                      <ReactAutocomplete
                        options={[...item.data]}
                        onChange={(e, newValue) => {
                          getValue.setState({ [item.name]: newValue?.id });
                        }}
                        renderInput={(params) => {
                          const { size, ...rest } = params;
                          return <TextField size="small" {...rest} />;
                        }}
                        // renderOption={(props, option: any) => (
                        //   <Typography {...props}>{option.name}</Typography>
                        // )}
                        // variant="soft"
                        // placeholder="e.g Male"
                        getOptionLabel={(option: any) => option.name}
                        sx={{ width: "100%" }}
                      />
                    )}
                  </FormControl>
                );
              })}

              <Stack direction="row" justifyContent="flex-end" spacing={2}>
                <Button variant="plain" color="neutral" onClick={handleClose}>
                  Cancel
                </Button>
                <Button type="submit">Add</Button>
              </Stack>
            </Stack>
          </Box>
        </ModalDialog>
      </Modal>
    </React.Fragment>
  );
};

interface AutoCompleteProps {
  data: any;
  endpoint: string;
  field: Field[];
  title: string;
  getValue: any;
  placeholder?: string;
  sx?: any,
  defaultValueInput?: any;
  tone?: boolean;
}

interface FilmOptionType {
  inputValue?: string;
  name: string;
  description?: number;
}

export default AutocompleteWithDialog;
