import React, { Component } from "react";
import PropTypes from "prop-types";
import IconButton from "material-ui/IconButton";
import Icon from "material-ui/Icon";
import Collapse from "material-ui/transitions/Collapse"
import Typography from "material-ui/Typography";
import  Card,{ CardContent, CardHeader, CardMedia, CardActions  } from 'material-ui/Card';
import "./Photo.css";
import { withStyles } from 'material-ui/styles';
import classnames from "classnames"

const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    background: theme.palette.background.paper
  },
  expand: {
    transform: "rotate(0deg)",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  }
})

class Photo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      imageSrc: '',
      caption: "text"
    };
  }

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }))
  }
  async  getImage(){
    const mediaUrl= "https://api.instagram.com/v1/users/self/media/recent/?access_token=1425299723.beeb19b.007cf609d0084d6a9c561f763f057f31";
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    
      try {
        const response = await fetch(proxyUrl+mediaUrl)
        const data = await response.json()
        const imageUrl = data.data["0"].images.standard_resolution.url        
        console.log('parsed json', imageUrl) 
        this.setState(state =>({imageSrc: imageUrl}))
        return imageUrl
      } catch (err) {
        return err
      }} 
  componentDidMount(){
     this.getImage()
      }

render() {
    const classes = this.props.classes;
    const value = this.state.value;
   
    return (
      
      <Card> 
       <CardMedia 
       height="320"
       width="480"
       image={this.state.imageSrc}

        className="image"
        title="oakland university entrance"
      />
<div className="mainDiv">
<Icon class="material-icons" style={{padding: "20px", paddingRight: 0}}>photo  </Icon>   

      <CardHeader        
       className="insideDiv"
       title="Photo of the day"
       subheader="30 August 2017"/> 
       <CardActions>
       <IconButton
                className={classnames(classes.expand, {
                  [classes.expandOpen]: this.state.expanded
                })}
                onClick={this.handleExpandClick}
                aria-expanded={this.state.expanded}
                aria-label="Show more"
              >expand_more</IconButton></CardActions>
       </div>
       <Collapse
            in={this.state.expanded}
            transitionDuration="auto"
            unmountOnExit
          >
      <CardContent  className="footer">
     
      </CardContent>
</Collapse>
         </Card> 
    
    );
  }
}
Photo.propTypes = {
  classes: PropTypes.object.isRequired,
  childern: PropTypes.object.isRequired
};
export default withStyles(styles)(Photo);
