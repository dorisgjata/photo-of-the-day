import React, { Component } from "react";
import photo1 from "/home/dorisgjata/photo-react/src/components/photo1.jpg";
import photo2 from "../images/photo2.jpg";
import photo3 from "../images/photo3.jpg";
import photo4 from "../images/photo4.jpg";
import PropTypes from "prop-types";
import IconButton from "material-ui/IconButton";
import Icon from "material-ui/Icon";
import Collapse from "material-ui/transitions/Collapse"
import Paper from "material-ui/Paper";
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
      value: 0,
      expanded: false,
    };
  }
  handleState = (event, value) => {
    this.setState({ value });
  };
  handleContent = (event, value, object) => {
   
  };
  componentWillReceiveProps() {
    this.setState({ expanded: false })
  }

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }))
  }
  render() {
    const classes = this.props.classes;
    const value = this.state.value;
    console.log(this.state.value);
    return (
      
      <Card> 
       <CardMedia 
        image={photo3}
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
     Oakland's library        
     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae urna ac augue venenatis tincidunt quis vel diam. Ut placerat dui sit amet luctus vulputate. Ut et metus at orci pretium sodales. Nulla nec erat diam. Suspendisse ac ante dignissim, pulvinar nibh elementum, tristique ipsum. Curabitur ac aliquet risus. Nam a sodales mi. In tincidunt non ex condimentum fringilla.  
     Fusce vulputate, ex ac efficitur venenatis, tortor eros rutrum felis, non viverra erat nunc sed felis. Curabitur vitae gravida ex. Sed nisi neque, lobortis sed sapien vel, pellentesque blandit nunc. Nunc et venenatis nunc. Nulla tempor odio at sapien placerat volutpat. Fusce et mi pretium, lobortis risus ut, congue elit. Morbi purus erat, consequat venenatis efficitur at, eleifend in nulla. Sed ullamcorper imperdiet arcu eu feugiat.
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
