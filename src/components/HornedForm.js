import React,{Component} from 'react';
import Form from 'react-bootstrap/Form'
class HornedForm extends Component {
  handelChange=(e)=>{
    this.props.getHorns(e.target.value);
  }
  render(){
  return (
    
<>
  <Form.Select size="lg" onChange={this.handelChange}>
    <option>All</option>
    <option>1</option>
    <option>2</option>
    <option>3</option>
    <option>100</option>
  </Form.Select>
  
</>
  );
}
}
export default HornedForm;