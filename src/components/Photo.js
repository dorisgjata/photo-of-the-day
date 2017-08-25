import React, { Component } from "react";
import photo from "../images/campus-entrance.jpg";
import PropTypes from "prop-types";
import AppBar from "material-ui/AppBar";
import Paper from "material-ui/Paper";
import { GridList, GridListTile, GridListTileBar  } from 'material-ui/GridList';
import Typography from "material-ui/Typography";

//import SwipeableViews from 'react-swipeable-views';
import Tabs, { Tab } from "material-ui/Tabs";
import Catalog from './Catalog.js'
import "./Photo.css";
class Photo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }
  handleState = (event, value) => {
    this.setState({ value });
  };
  handleContent = (event, value, object) => {
    if (this.state.value === 0) {
      return (
        <div>
          <img
            className="image"
            src={photo}
            alt="oakland university entrance"
          />
          <div>
          <Typography type="title">
            Oakland's Entrance</Typography>
            <Typography type="subheader">
              By @oakland_instagram"</Typography>
              </div>
        </div>
      );
    } else if (this.state.value === 1) {
      return <Catalog/>;
    } else return <div> Can't display data at this time </div>;
  };

  render() {
    const classes = this.props.classes;
    const value = this.state.value;
    console.log(this.state.value);
    return (
      <Paper className="mainDiv">
        <div className="navDiv">
          <AppBar position="static">
            <Tabs onChange={this.handleState} value={this.state.value} centered>
              <Tab label="Today's Photo" />
              <Tab label="Catalog" />
            </Tabs>
          </AppBar>
        </div>
        {this.handleContent()}
      </Paper>
    );
  }
}
Photo.propTypes = {
  classes: PropTypes.object.isRequired,
  childern: PropTypes.object.isRequired
};
export default Photo;
