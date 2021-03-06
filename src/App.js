import React from "react";
// import logo from "./logo.svg";
import "./styles/App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainComponent from "./components/MainComponent";

function App() {
	return (
		<div className="App">
			<Header />
			<MainComponent />
			<Footer />
		</div>
	);
}

export default App;
