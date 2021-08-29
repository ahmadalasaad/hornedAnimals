import React,{Component} from 'react';

class HornedBeast extends Component {
  render(){
  return (
    <div className="horned">
      <h2>{this.props.title}</h2>
      <img src={this.props.imageUrl} alt ="image" title="horned"/>
      <p>{this.props.description}</p>
     </div>
  );
}
}
export default HornedBeast;
