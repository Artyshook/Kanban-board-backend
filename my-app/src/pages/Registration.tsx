import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import styled from "styled-components";
import axios from '../axios'
import {Avatar, Button, Paper, TextField, Typography} from "@mui/material";

type FormValues = {
    email: string,
    password: string,
    fullName: string, }

export const Registration = () => {
    const initialState = {
        email: '',
        password: '',
        fullName: ''
    }
    const [form, setForm] = useState<FormValues>(initialState)
    const [errorMessage, setError] = useState(false)

    const navigate = useNavigate();
    const onClickHandler =()=>{
    axios.post('/auth/register', form).then(res=>{
        setForm(initialState)
        setError(false)
        alert('Successfully registered'+"\n"+'You will be redirected to the Login page')
        navigate("/login")
    }).catch(()=>{
        setError(true)})
    }

    return (
        <PaperWrapper>
            <TypographyWrapper  variant="h5">
                Account Registration
            </TypographyWrapper>
            <FormWrapper>
                <Avatar sx={{ width: 90, height: 90 }} />
            </FormWrapper>
            <TextFieldWrapper label="Full Name"
                              onChange={(e)=>setForm({...form, fullName: e.currentTarget.value})}
                              fullWidth
            />

            <TextFieldWrapper label="Email"
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
                    Register
            </Button>
           <TextWrapper>Have already register? <Link to={'/login'} >Login</Link></TextWrapper>
            {errorMessage && <TypographyWrapper color={"red"} variant="h6">Check your email and password</TypographyWrapper>}
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
  padding-left: 38px;
`

const TypographyWrapper = styled(Typography)`
justify-content: center;
align-items: center;
padding-bottom: 10px;


`