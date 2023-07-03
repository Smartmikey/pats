import { FieldValue, FieldValues, useForm } from "react-hook-form";
import { TextField, Button, Box } from "@mui/material";
import { useState } from "react";
import InputMask from "react-input-mask";
import { createTextMask } from "redux-form-input-masks";
import { colors } from "../Constants";
import Axios from "../API/Axios";

function PaymentForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const [expiration, setExpiration] = useState("");

  //   const validateExpirationFormat = (input: string) => {
  //     const expirationRegex = /^(0[1-9]|1[0-2])\/([0-9]){2}$/;

  //     if (!expirationRegex.test(input)) {
  //       return ""; // Return empty string if the input doesn't match the format
  //     }

  //     const [month, year] = input.split("/");
  //     console.log(input, month);

  //     return `${month.padStart(2, "0")}/${year}`;
  //   };
  //   const handleChange = (event: any) => {
  //     const input = event.target.value;
  //     const formattedExpiration = validateExpirationFormat(input);
  //     // console.log(formattedExpiration, input);

  //     setExpiration(formattedExpiration);
  //   };
  const onSubmit = (data: FieldValues) => {
    data = {
      ...data,
      cardnumber: card.cardno.split("-").join("").split(" ").join(""),
      expmonth: card.expirydt.split("/")[0],
      expyear: card.expirydt.split("/")[1],
      amount: 100,
    };
    Axios.post("/payment/generate-card-token", data).then((res) =>
      Axios.post("/payment/create-payment-charge", {tokenid:res.data, amount: 120}).then((charge) =>
        console.log(charge)
      )
    );
    //   console.log(data);
  };

  //   NEW CHANGES

  const [card, setCard] = useState({
    cardno: "",
    cardtype: "far fa-credit-card",
    expirydt: "",
  });

  const onChange = (e: any) => {
    var cartype_new = cardnumber(e.target.value);
    setCard({
      ...card,
      cardno: e.target.value,
      cardtype: cartype_new,
    });
  };
  const cardnumber = (inputtxt: any) => {
    var matches = inputtxt.match(/(\d+)/);
    var cardno = "";
    // console.log(matches);
    if (matches) {
      cardno += inputtxt.split("-").join("");
    }
    // console.log(cardno);
    var cardtype1 = card.cardtype;
    //var visa = /^(?:4[0-9]{16}(?:[0-9]{3})?)$/;
    var visa = /^(?:4[0-9]{2}?)$/;
    var mastercardRegEx = /^(?:5[1-5][0-9]{3})$/;
    var amexpRegEx = /^(?:3[47][0-9]{3})$/;
    var discovRegEx = /^(?:6(?:011|5[0-9][0-9])[0-9]{5})$/;
    // console.log(visa.test(cardno));
    if (visa.test(cardno) === true) {
      //eg:4651970022334445
      cardtype1 = "far fa fa-3x fa-cc-visa  carddetail-cardtype";
    } else if (mastercardRegEx.test(cardno) === true) {
      cardtype1 = "far fa fa-3x fa-cc-mastercard carddetail-cardtype";
    } else if (amexpRegEx.test(cardno) === true) {
      cardtype1 = "far fa fa-3x fa-cc-amex carddetail-cardtype";
    } else if (discovRegEx.test(cardno) === true) {
      cardtype1 = "far fa fa-3x fa-cc-discover carddetail-cardtype";
    }
    return cardtype1;
  };

  const cc_format = (value: any) => {
    const v = value.replace(/[^0-9]/gi, "").substr(0, 16);

    const parts = [];
    for (let i = 0; i < v.length; i += 4) {
      parts.push(v.substr(i, 4));
    }
    // console.log(parts.join(" - "), value);

    return parts.length > 1 ? parts.join(" - ") : value;
  };
  const expriy_format = (value: any) => {
    const expdate = value;
    const expDateFormatter =
      expdate.replace(/\//g, "").substring(0, 2) +
      (expdate.length > 2 ? "/" : "") +
      expdate.replace(/\//g, "").substring(2, 4);

    return expDateFormatter;
  };
  const onChangeExp = (e: any) => {
    setCard({
      ...card,
      expirydt: e.target.value,
    });
  };

  return (
    <Box
      component="form"
      //   sx={{ width: "300px", height: "500px", my: "auto", mx: "auto", mt: 12 }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextField
        label="Card Number"
        fullWidth
        type="text"
        sx={{ my: 1 }}
        value={cc_format(card.cardno)}
        onChange={onChange}
        // {...register("cardNumber", {
        //   required: "Card number is required",
        //   minLength: { value: 16, message: "Card number must be 16 digits" },
        // })}
        error={!!errors.cardNumber}
        // helperText={errors.cardNumber?.message || ''}
      />

      <TextField
        label="Expiration Date"
        fullWidth
        value={expriy_format(card.expirydt)}
        onChange={onChangeExp}
        //   onChange={handleChange}
        sx={{ my: 1 }}
        // {...register("expirationDate", {
        //   required: "Expiration date is required",
        // })}
        error={!!errors.expirationDate}
        // helperText={errors.expirationDate?.message}
      />

      <TextField
        label="CVV"
        fullWidth
        sx={{ my: 1 }}
        // type="number"
        inputProps={{
          maxLength: 3,
        }}
        {...register("cvv", {
          required: true,
          maxLength: { value: 3, message: "CVV must be 3 digits" },
        })}
        error={!!errors.cvv}
        helperText={errors.cvv?.message && "CVV must be 3 digits"}
      />

      <Button
        variant="contained"
        type="submit"
        sx={{
          color: colors.white,
          bgcolor: colors.primary,
          "&:hover": { bgcolor: colors.primary },
        }}
      >
        Pay
      </Button>
    </Box>
  );
}

export default PaymentForm;
