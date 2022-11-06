import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {BlogHome} from "../pages/BlogHome";
import {ArticlePage} from "./ArticlePage";
import {AddPostPage} from "../pages/AddPostPage";
import {Login} from "../pages/Login";
import {Registration} from "../pages/Registration";
import {Header} from "./Header";

export const BaseLayout = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>

                <Route path='/' element={<BlogHome/>}/>
                <Route path='/posts/:id' element={<ArticlePage/>}/>
                <Route path='/new' element={<AddPostPage/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Registration/>}/>

            </Routes>
        </BrowserRouter>
    );
};

