import { GridList, GridListTile, GridListTileBar  } from 'material-ui/GridList';
import React, { Component } from "react";
import photo2 from "../images/photo2.jpg";
import photo3 from "../images/photo3.jpg";
import photo4 from "../images/photo4.jpg";
import Tabs, { Tab } from "material-ui/Tabs";
import PropTypes from "prop-types";
import AppBar from "material-ui/AppBar";
import "./Photo.css";


class Image extends Component {
  constructor(props) {
    super(props);
    this.state = {     
      img: '',     
    };
  }

render() {
const img =this.state.img    
const mediaUrl= "https://api.instagram.com/v1/users/self/media/recent/?access_token=1425299723.beeb19b.007cf609d0084d6a9c561f763f057f31";
const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
fetch(proxyUrl+mediaUrl )
    .then(function(response) {
      return response.json()
    }).then(function(json) {
      this.state.img = json.data[0].images.standard_resolution.url   
    return this.state.img    
      console.log('parsed json', img)          
    })
     return (
        <img src={this.props.img}/>
      );
    }
  }
  /** 
  Catalog.propTypes = {
    classes: PropTypes.object.isRequired,
    childern: PropTypes.object.isRequired
  };
  */
  export default Image;
  