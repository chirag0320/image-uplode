import "./App.css";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
// import CardHeader from "@mui/material/CardHeader";
// import CardMedia from "@mui/material/CardMedia";
// import CardContent from "@mui/material/CardContent";
// import CardActions from "@mui/material/CardActions";
// import Collapse from "@mui/material/Collapse";
// import Avatar from "@mui/material/Avatar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import { red } from "@mui/material/colors";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import ShareIcon from "@mui/icons-material/Share";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
// import userim from "./ima.jfif";
import { useState } from "react";
import Map from "react-map-gl";
// import "./.env";
function App() {
  const [state, setstate] = useState({
    longitude: -100,
    latitude: 40,
    zoom: 10,
    height: "100px",
    width: "100px",
  });
  // const Map = ReactMapboxGl({
  //   accessToken:
  //     "pk.eyJ1IjoiY2hpcmFnMTIxMjEyIiwiYSI6ImNsMDlnc2NicjBkM3gzY3A5d3NsdmFsZnYifQ.QdHK17UlgDkfyQMgWsbtKg",
  // });
  return (
    <>
      {console.log("yess")}
      <Map
        initialViewState={{
          longitude: -100,
          latitude: 40,
          zoom: 3.5,
        }}
        mapboxAccessToken="pk.eyJ1IjoiY2hpcmFnMTIxMjEyIiwiYSI6ImNsMDlnc2NicjBkM3gzY3A5d3NsdmFsZnYifQ.QdHK17UlgDkfyQMgWsbtKg"
        // mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
        style={{ width: 600, height: 400 }}
        mapStyle="mapbox://styles/mapbox/satellite-streets-v11"
      />
      chirag
    </>
  );
}

export default App;
