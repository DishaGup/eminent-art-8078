import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Box } from '@mui/system';

export default function PaymentForm() {
  const initCard={
    "cardName":'',
    'cardNumber':'',
    'expDate':"",
    'cvv':''
  }
const[card,setCard]=React.useState(initCard)
  const handleSave=()=>{
     localStorage.setItem("card",JSON.stringify(card))
  }

  const handleChange=(e)=>{
    const name=e.target.name
    const value=e.target.value
    setCard({...card,[name]:value})

  }
  const{cardName,cardNumber,expDate,cvv}=card
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
     
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardName"
            label="Name on card"
            fullWidth
            autoComplete="cc-name"
            variant="standard"
            name='cardName'
            value={cardName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            label="Card number"
            fullWidth
            autoComplete="cc-number"
            variant="standard"
            name='cardNumber'
            value={cardNumber}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="expDate"
            label="Expiry date"
            fullWidth
            autoComplete="cc-exp"
            variant="standard"
            name='expDate'
            value={expDate}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
            name='cvv'
            value={cvv}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" onChange={handleSave} />}
            label="Remember credit card details for next time"
          />
        </Grid>
      </Grid>

    
    </React.Fragment>
  );
}
