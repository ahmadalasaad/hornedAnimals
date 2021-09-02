import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
class HornedBeast extends Component {
  constructor(props){
    super(props);
    this.state = {
      counter: 0 
    }
  }
  handeleinc = () => {
    this.setState({counter:this.state.counter+1 })
    console.log(this.state.counter);
    this.props.handleClose(this.props.item.title,this.props.item.description,this.props.item.image_url);
  }
  render() {
    return (
      <Fragment>
        <Card style={{ width: '18rem' , display:'inline-block' , height:'200px', margin:'2rem'} }>
          <Card.Img variant="top" src={this.props.item.image_url} onClick={this.handeleinc} title={this.props.item.title} />
          <Card.Body>
            <Card.Title>{this.props.item.title}</Card.Title>
            <Card.Text>
              {this.props.item.description}
            </Card.Text>
            <Card.Text>
            💖 {this.state.counter}
            </Card.Text>
          </Card.Body>
        </Card>

      </Fragment>
    );
  }
}
export default HornedBeast;


