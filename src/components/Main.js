import React,{Component, Fragment} from 'react';
import HornedBeast from './HornedBeast';
class Main extends Component {
  
  render(){
   let imgs= this.props.beasts.map(item=>{
      return(
        <HornedBeast 
        item={item}
       handleClose={this.props.handleClose}
      //  key={Math.random()} when I pass a key the state did not updated in HornedBeast component
      />
      );
    })
  return (
    <Fragment >
      {imgs}
    </Fragment>
  );
}
}
export default Main;
