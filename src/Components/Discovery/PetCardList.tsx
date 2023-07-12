import { Box, Button, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import PetCard from "./PetCard";
import { pets } from "../../data";
import { colors } from "../../Constants";
import Axios from "../../API/Axios";
import { useHistory, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/Auth";
const PetCardList = () => {
const [pets, setPets] = useState<any>();
const user:any = useAuth();
const history = useHistory();
const handleContactClick = (id: string) => {
  
  if (user?.role === "ROLE_MEMBER") {
    return history.push(`/breeder/${id}`);
  } else if (user?.role === "ROLE_USER") {
    return history.push(`/user/message/${id}`);
  }else {
    return history.push(`/login`);

  }
};
  useEffect(() => {
    Axios.get("/breeder/pets")
      .then((response) => {
        setPets(response.data.data);
      })
      .catch((error) => console.log(error));
    // const getAllPets = async () => {
    //   const res = await Axios.get("/breeder/pets");
    //   const {
    //     data: { data },
    //   } = await res;
    //   // dispatch(addPets(await items));
    //   setPets(data);
    // };
    // getAllPets();
  }, []);
  return (
    <Grid container spacing={3} sx={{ py: 6 }}>
      {pets && pets.map((item:any) => (
        <PetCard
          key={item.id}
          size={4}
          data={item}
          Action={
            <>
              <Button
                variant="outlined"
                sx={{
                  color: colors.primary,
                  borderColor: colors.primary,
                  mx: 1,
                  borderRadius: "6px",
                  "&:hover": { borderColor: colors.primary },
                }}
                onClick={()=> history.push(`/pet/${item.id}`)}
              >
                View details
              </Button>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: colors.primary,
                  mx: 1,
                  borderRadius: "6px",
                  "&:hover": { backgroundColor: colors.primary },
                }}
                onClick={()=> handleContactClick(item?.member_id)}
              >
                Contact
              </Button>
            </>
          }
        />
      ))}
    </Grid>
  );
};

export default PetCardList;
