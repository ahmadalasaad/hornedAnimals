import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
class HornedBeast extends Component {
  state = {
    counter: 0
  }
  handeleinc = (e) => {
    e.preventDefault();
    let counter = this.state.counter;
    counter += 1;
    this.setState({ counter })
  }
  render() {
    return (
      <div className="horned">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={this.props.image_url} onClick={this.handeleinc} title="horned" />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
              {this.props.description}
            </Card.Text>
            <Card.Text>
            Number of Vote   {this.state.counter}
            </Card.Text>
          </Card.Body>
        </Card>

      </div>
    );
  }
}
export default HornedBeast;


