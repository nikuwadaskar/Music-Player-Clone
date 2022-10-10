import React, { useEffect, useState } from "react";

import axios from "axios";

function Authe() {
  const CLIENT_ID = "bcf44ea9c2034f9f961c203b04a623b3";
  const REDIRECT_URI = "http://localhost:3000/";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  const [token, setToken] = useState("");
  const [searchKey, setSearchKey] = useState("");
  const [artists, setArtists] = useState([]);

  // const getToken = () => {
  //     let urlParams = new URLSearchParams(window.location.hash.replace("#","?"));
  //     let token = urlParams.get('access_token');
  // }

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    // getToken()

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }

    setToken(token);
  }, []);

  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };

  const searchArtists = async (e) => {
    e.preventDefault();
    const { data } = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        q: searchKey,
        type: "track",
      },
    });
    // console.log(data.tracks);
    setArtists(data.tracks.items);
    console.log(data.tracks.items[0].album.images[0].url);
    console.log(data.tracks.items[0].preview_url);
  };

  const renderArtists = () => {
    return artists.map((track) => (
        // console.log(track)
        // console.log(track.album.images[0].url)
        // console.log(track.preview_url)
      <div key={track.id}>
        <img width={"20%"} src={track.album.images[0].url} alt="" />
        <audio src={track.preview_url} controls></audio>
        {track.name}
      </div>
    ));
  };
  renderArtists();
  return (
    <div className="App">
      <header className="App-header">
        <h1>Spotify React</h1>
        {!token ? (
          <a
            href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
          >
            Login to Spotify
          </a>
        ) : (
          <button onClick={logout}>Logout</button>
        )}

        {token ? (
          <form onSubmit={searchArtists}>
            <input type="text" onChange={(e) => setSearchKey(e.target.value)} />
            <button type={"submit"}>Search</button>
          </form>
        ) : (
          <h2>Please login</h2>
        )}

        {renderArtists()}
      </header>
    </div>
  );
}

export default Authe;
