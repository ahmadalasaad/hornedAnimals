import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
class HornedBeast extends Component {
  state = {
    counter: 0 ,
    h:''
  }
  handeleinc = (e) => {
    e.preventDefault();
    let counter = this.state.counter;
    counter += 1;
    let h=this.state.h;
    h+='💖';
    this.setState({ counter , h })
    this.props.handleClose(this.props.title,this.props.description,this.props.image_url);
  }
  render() {
    return (
      <Fragment className="horned">
        <Card style={{ width: '18rem' , display:'inline-block' , height:'200px', margin:'2rem'} }>
          <Card.Img variant="top" src={this.props.image_url} onClick={this.handeleinc} title="horned" />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
              {this.props.description}
            </Card.Text>
            <Card.Text>
              {this.state.h}  {this.state.counter}
            </Card.Text>
          </Card.Body>
        </Card>

      </Fragment>
    );
  }
}
export default HornedBeast;


