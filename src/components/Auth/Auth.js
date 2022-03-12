import React, { useState } from "react";
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
} from "@material-ui/core";
import { useNavigate } from 'react-router-dom';

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import useStyles from "./styles";
import Input from "./Input";
import Icon from "./Icon";

const initialData = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const Auth = () => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
//   const [formData, setFormData] = useState(initialData);
// //   const dispatch = useDispatch();

//   const navigate = useNavigate();

  const handleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     if(isSignup) {
//       dispatch(signup(formData, navigate));
//     }
//     else{
//       dispatch(signin(formData, navigate));
//     }
//   };

//   const handleChange = (e) => {
//     setFormData({...formData, [e.target.name]: e.target.value});
//   };

  const switchMode = () => {
    setIsSignup((prevShowPassword) => !prevShowPassword);
    setShowPassword(false);
  };


  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">{isSignup ? "Sign Up" : "Sign In"}</Typography>
        <form className={classes.form}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Input
                  name="firstName"
                  label="First Name"

                  autoFocus
                  half
                />
                <Input
                  name="lastName"
                  label="Last Name"

                  half
                />
              </>
            )}
            <Input
              name="email"
              label="Email"
              type="email"
            />
            <Input
              name="password"
              label="Password"
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            />
            {isSignup && (
              <Input
                name="confirmPassword"
                label="Confirm Password"
                type="password"
              />
            )}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="black"
            className={classes.submit}
          >
            {isSignup ? "Sign Up" : "Sign In"}
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                {isSignup
                  ? "Already have an account? Sign In"
                  : "Dont have an account yet? Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
