import React from 'react';
import {Routes, Route} from "react-router-dom";
import Articles from "./Pages/Articles";
import Main from "./Components/Main";
import ArticlesDetails from './Pages/ArticleDetails';
import {Provider} from 'react-redux'
import {store} from './redux/store'

const App = () => {
    return (
        <Provider store={store}>
            <Routes>
                <Route path="/" element={<Main/>}>
                    <Route path="/" element={<Articles/>}></Route>
                    <Route path='articles' element={<Articles/>}></Route>
                    <Route path="/articles/:id" element={<ArticlesDetails/>}/></Route>
            </Routes>
        </Provider>
    );
}

export default App;
