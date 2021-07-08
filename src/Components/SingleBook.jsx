import { Component } from "react";
import { Card } from "react-bootstrap";
import "./SingleBook.css";

class SingleBook extends Component {

    state = {
        selected: false
    }

  
    render() {
     

  return (
        
          <Card 
          className="mb-3"           
          onClick={() =>  this.setState({ selected: !this.state.selected })}
          style={{ border: this.state.selected ? "3px solid red" : "none" }}
          >
            <Card.Link href="#">
              <Card.Img variant="top" src={this.props.book.img} />
            </Card.Link>

            <Card.Body>
              <Card.Title>
                <small>{this.props.book.title}</small>
              </Card.Title>
            </Card.Body>
          </Card>
        
  );
}

};

export default SingleBook;
