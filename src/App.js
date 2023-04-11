import React from 'react';
import {Routes, Route} from "react-router-dom";
import Articles from "./Pages/Articles";
import Main from "./Components/Main";
import ArticlesDetails from './Pages/ArticleDetails';


const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Main/>}>
                <Route path="/" element={<Articles/>}></Route>
                <Route path='articles' element={<Articles/>}></Route>
                <Route path="/articles/:id" element={<ArticlesDetails />} /></Route>
        </Routes>
    );
}

export default App;
