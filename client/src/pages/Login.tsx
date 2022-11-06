import React, {useContext, useState} from 'react';
import styled from "styled-components";
import {Link, Navigate, useNavigate} from "react-router-dom";
import axios from "../axios";

import {Avatar, Button, Paper, TextField, Typography} from "@mui/material";
import {useLocalStorage} from "../helpers/functions";


type FormValues = {
    email: string,
    password: string,
     }

export const Login = () => {
    const initialState = {
        email: '',
        password: '',
    }

    const [form, setForm] = useState<FormValues>(initialState)
    const [errorMessage, setError] = useState(false)
    // const [token, setToken]= useLocalStorage<string>("new",'' );
    const navigate = useNavigate();


    const onClickHandler =()=>{
            axios.post ('/auth/login', form).then(res=>{
                // setToken(res.data.token)
                localStorage.setItem('token', res.data.token)
                setForm({ email: '', password: '',})
                setError(false)
                navigate("/")

            }).catch(()=>{
                setError(true)})

            axios.get('/auth/me').then(res=>res.config)
    }

return (

    <PaperWrapper>


        <TextFieldWrapper label="Email"
                          helperText={errorMessage}
                          onChange={(e)=>setForm({...form, email: e.currentTarget.value})}
                          fullWidth
        />
        <TextFieldWrapper label="Password"

                          onChange={(e)=>setForm({...form, password: e.currentTarget.value})}
                          fullWidth
        />
        <Button size="large"
                variant="contained"
                onClick={onClickHandler}
                fullWidth >
            Login
        </Button>
        <TextWrapper>Don't have an account? <Link to={'/register'} >Register</Link></TextWrapper>
        {errorMessage && <TypographyWrapper color={"red"} variant="h6">Wrong password or email</TypographyWrapper>}
    </PaperWrapper>
);
};

const PaperWrapper = styled(Paper)`
  width: 400px;
  padding: 50px;
  border: 1px solid #dedede;
  margin: 50px auto;
`
const FormWrapper = styled.form`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`
const TextFieldWrapper = styled(TextField)`
  margin-bottom: 20px !important;
`
const TextWrapper =styled.div`
 margin-top: 5px; 
  margin-bottom: 5px;
  padding-left: 35px;
`

const TypographyWrapper = styled(Typography)`
  padding-left: 30px;
    
`