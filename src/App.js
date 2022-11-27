
import React, { useState } from "react";
import {Routes, Route} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Post from './modules/Post/Post';

const App = () => {
	return (
		<>
		<Routes>
			<Route index path='/' element={<Home/>} />
			<Route exact path='/posts/:postId' element={<Post />} />
			<Route path='/about' element={<About/>} />
		</Routes>
		</>
	);
};

export default App;
