import { GridList, GridListTile, GridListTileBar  } from 'material-ui/GridList';
import React, { Component } from "react";
import photo1 from "../images/campus-entrance.jpg";
import photo2 from "../images/photo2.jpg";
import photo3 from "../images/photo3.jpg";
import photo4 from "../images/photo4.jpg";
import Tabs, { Tab } from "material-ui/Tabs";
import PropTypes from "prop-types";
import AppBar from "material-ui/AppBar";
import "./Photo.css";


class Catalog extends Component {
   
    render() {
      return (
        <div className="catalogDiv">
        <GridList cellHeight={400}>
          <GridListTile cols={2}>
          <img src={photo2} />
          <GridListTileBar title="Oakland University"
          subtitle="Photo by @oakland_instagram"/>
          </GridListTile>
          <GridListTile>
          <img src={photo3} />
          <GridListTileBar title="Library"/>

          </GridListTile>
          <GridListTile>
          <img src={photo4} />
          <GridListTileBar title="EC"/>

        </GridListTile>
       
        </GridList>
        </div>
      );
    }
  }
  Catalog.propTypes = {
    classes: PropTypes.object.isRequired,
    childern: PropTypes.object.isRequired
  };
  export default Catalog;
  