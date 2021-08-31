import React,{Component, Fragment} from 'react';
import HornedBeast from './HornedBeast';
class Main extends Component {
  
  render(){
   let imgs= this.props.beasts.map(item=>{
      return(
        <HornedBeast
       title={item.title}
       image_url={item.image_url}
       description={item.description}
       handleClose={this.props.handleClose}
      />
      );
    })
  return (
    <Fragment className="main">
      {imgs}
    </Fragment>
  );
}
}
export default Main;
