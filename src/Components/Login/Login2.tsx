import { Box, Button, Card, CardActions, CardContent, CardHeader, Checkbox, Container, createStyles, Divider, FormControl, FormControlLabel, Grid, Link, makeStyles, TextField, Typography } from '@mui/material';
import jwtDecode from "jwt-decode";
import React, { useContext, useState } from 'react';
// import { useHistory, withRouter } from "react-router";
import {  Link as RouterLink } from 'react-router-dom';

// import Api from '../../services/Api';
// import { UserConsumer, UserCtx } from '../../UserContext';
// import AccountScreen from "../Common/AccountScreen";

export interface Id8JwtPayload {
    iss?: string;
    sub?: string;
    aud?: string[] | string;
    exp?: number;
    nbf?: number;
    iat?: number;
    jti?: string;
    ulid?: string;
    displayname?: string;
    role?: string;
}

const useStyles :any=()=> makeStyles((theme: any) => ({
    // backDrop: {
    //     height: '100%',
    //     backgroundImage: "url('/DogBackground.svg')",
    //     backgroundRepeat: 'no-repeat',
    //     backgroundAttachment: 'fixed',
    //     backgroundPosition: 'center',
    //     backgroundSize: 'auto'
    // },
    heading: {
        textAlign: 'left',
        fontWeight: 900,
    },
    formBox: {
        maxWidth: theme.breakpoints.width("sm"),
        padding: theme.spacing(4),
    },
    cardStyle: {
        padding: theme.spacing(4),
        border: "none", 
        boxShadow: "none"
    },
    ideateIcon: {
        position: 'fixed',
        top: '2%',
        left: '2%'
    },
    divider: {
        backgroundColor: '#d9e2ee',
        margin: '0 20px',
    },
    text: {
        padding: theme.spacing(4),
    },
    // button: {
    //     backgroundColor: '#ffffff'
    // }
}));

// const authenticate = async (updateUser: any, setLoggedIn: any, values: any) => {
//     try {
//         const api = new Api('');
//         const response = await api.post('login', values);

//         const data = await response['data'];
//         const jwt = jwtDecode<Id8JwtPayload>(data.token);
//         const newData = { ulid: jwt.ulid, role: jwt.role, token: data.token, displayname: jwt.displayname }
//         updateUser(newData);
//         setLoggedIn(true);

//         return false;

//     } catch (error) {
//         console.log(error);
//     }
// }

function isDisabled(values: any) {
    const fTest: boolean = (values.email === '' || values.password === '');

    return fTest;
}

function LoginForm({ isEmployerSubdomain }: any) {
    // const user = useContext(UserCtx);
    // const history = useHistory<any>();
    const classes = useStyles();
    const [loggedIn, setLoggedIn] = useState(false);
    const [rememberMeCheck, setRememberMeCheck] = useState(false);
    const handleInputChange = (e: any) => {
        const { name, value } = e.target
        setValues({ ...values, [name]: value })
    }

    const handleSubmit = (event: any, updateUser: any) => {
        event.preventDefault();
        // authenticate(updateUser, setLoggedIn, values);
    }

    const handleCheckChange = () => {
        setRememberMeCheck(rm => !rm);
    }

    const [values, setValues] = useState({ email: '', password: '' });

    // if (loggedIn === true && history.location?.state?.from) {
    //     return (<Redirect to={history.location.state.from} />);
    // }


    // if (true) {
    //     return (<Redirect to="/user/discovery" />);
    // }
    // if (loggedIn === true && user.role === 'ROLE_EMPLOYER') {
    //     return (<Redirect to="/user/discovery" />);
    // }
     if (loggedIn === true ) {
        console.log('redirecting')
        return //(<Redirect to="/user/discovery" />);
    }
    else {
        return (
            <Container>
                <Box>
                    {/* {({ updateUser }) => (
                        <form onSubmit={(e) => { return handleSubmit(e, updateUser) }}>
                            <Card className={classes.cardStyle} elevation={3}>
                                <CardHeader classes={{ title: classes.heading }} title={`Log In`} subheader={`Welcome back! Please input your information in the fields below.`}/>
                                <Divider variant={'middle'} className={classes.divider} />
                                <CardContent>
                                        {/* <Typography>We need you to help us with some basic information before creating your account. Here are our terms and conditions. </Typography>
                                        <Divider variant={'middle'} className={classes.divider} /> 
                                    <Grid container spacing={2}>
                                        <Grid item xs={12}>
                                            <FormControl fullWidth>
                                                <TextField
                                                    label="info@xyz.com"
                                                    name="email"
                                                    variant="filled"
                                                    onChange={handleInputChange}
                                                    value={values.email}
                                                    autoFocus
                                                    InputProps={{ disableUnderline: true }}
                                                />
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <FormControl fullWidth>
                                                <TextField
                                                    label="********"
                                                    name="password"
                                                    type="password"
                                                    variant="filled"
                                                    onChange={handleInputChange}
                                                    value={values.password}
                                                    InputProps={{ disableUnderline: true }}
                                                />
                                            </FormControl>
                                        </Grid>
                                        <Grid item container xs={12} sx={{justifyContent: "space-between",alignItems: "center"}}  >
                                           {/* <Box>
                                                 <FormControlLabel
                                                    control={
                                                        <Checkbox
                                                            checked={rememberMeCheck}
                                                            onChange={handleCheckChange}
                                                            name="rememberme"
                                                        />
                                                    }
                                                    label="Remember Me"
                                                /> 
                                            </Box>
                                            <Box>
                                                <Link component={RouterLink} color="textPrimary" to="/account/forgotpassword" >Forgot Password?</Link>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                                <CardActions>
                                    <Grid container direction="column" spacing={4}>
                                        <Grid item  sx={{justify:"center"}}>
                                            <Button
                                                type="submit"
                                                variant="contained"
                                                // color="secondary"
                                                // className={classes.button}
                                                disabled={isDisabled(values)}
                                                // fullWidth
                                            >
                                                Login
                                            </Button>
                                        </Grid>
                                        <Divider variant={'inset'} className={classes.divider} />
                                        <Grid item  sx={{justify:"center"}}>
                                            <Box>
                                                <Typography>Don't have an account? <Link component={RouterLink} color="textPrimary" to="/account/signup">Sign up</Link></Typography>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </CardActions>
                            </Card>
                        </form>
                    )} */}
                </Box>
            </Container>
        )
    }
}

export default LoginForm;
