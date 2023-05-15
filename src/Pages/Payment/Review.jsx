import * as React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

let products = [{ name: "Shipping", desc: "", price: "Free" }];

axios
  .get("https://erin-dizzy-clam.cyclic.app/trendify/cart", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  })
  .then((res) => {
    let x = res.data.cart || [];
    
    if (x.length) {
      products = [...x, ...products];
    }
  });

export default function Review() {
  const [addressData, setAddresData] = useState({
    firstName: "",
    lastName: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
    country: "",
  });

  const [card, setCard] = useState({
    cardName: "",
    cardNumber: "",
    expDate: "",
    cvv: "",
  });

  const address = useSelector((store) => {
    return store.PaymentReducer.address;
  });
  const card1 = useSelector((store) => {
    return store.PaymentReducer.card;
  });

  useEffect(() => {
    setAddresData(address);
    setCard(card1);
  }, []);

  let totalPrice = 0;
  for (let i of products) {
    totalPrice += i.price;
  }
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={product.name} secondary={product.title} />
            <Typography variant="body2"> ₹{product.price}</Typography>
          </ListItem>
        ))}
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            ₹ {totalPrice}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>{addressData.firstName}</Typography>
          <Typography gutterBottom>
            {addressData.address1},{addressData.address2}
          </Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>

          <Grid container>
            <React.Fragment key={card.cardName}>
              <Grid item xs={6}>
                <Typography gutterBottom>{"Card"}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>{"VISA"}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>{"Name"}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>{card.cardName}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>{"ExpDate"}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>{card.expDate}</Typography>
              </Grid>

              <Grid item xs={6}>
                <Typography gutterBottom>{"Card number"}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>{"xxxx-xxxx-xxxx-1234"}</Typography>
              </Grid>
            </React.Fragment>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
