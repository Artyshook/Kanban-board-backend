import React, {useEffect, useState} from 'react';

import './App.css';
import {Route, Routes} from "react-router-dom";
import {BlogHome} from "./pages/BlogHome";
import {ArticlePage} from "./components/ArticlePage";
import {AddPostPage} from "./pages/AddPostPage";
import {Header} from "./components/Header";
import {Login} from "./pages/Login";
import {Registration} from "./pages/Registration";



function App() {

    return (
            <div>
                <Header/>
                <Routes>
                    <Route path='/' element={<BlogHome/>}/>
                    <Route path='/posts/:id' element={<ArticlePage/>}/>
                    <Route path='/new' element={<AddPostPage/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/register' element={<Registration/>}/>

                </Routes>
            </div>

    )
}

export default App;
