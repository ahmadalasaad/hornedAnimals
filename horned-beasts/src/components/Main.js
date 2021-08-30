import React,{Component, Fragment} from 'react';
import data from '../assest/data.json';
import HornedBeast from './HornedBeast';
class Main extends Component {
  
  render(){
   let imgs= data.map(item=>{
      return(
        <HornedBeast
       title={item.title}
       image_url={item.image_url}
       description={item.description}
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
