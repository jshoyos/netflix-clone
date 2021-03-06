import React from 'react';
import './App.css';
import Row from './Row';
import requests from './request.js';
import Banner from "./Banner.js";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      {/*NavBar*/}
      <Nav/>
      {/*banner*/}
      <Banner/>
      <div className="Row">
        <Row title="Netflix Original" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
        <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentationMovies}/>
      </div>
    </div>
  );
}

export default App;
