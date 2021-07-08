import React, { Component } from "react";
import SingleBook from "./SingleBook";
import { Container, Form, Button, Row, Col } from "react-bootstrap";

class BookList extends Component {
  state = {
   
    query: "",
    books: [],
  
  };

  searchBook = (e) => {
    e.preventDefault()
    const filteredBooks = this.props.books.filter((book) =>
      book.title.toLowerCase().includes(this.state.query.toLowerCase())
    );
    this.setState({ 
       
            books: filteredBooks
        
         });
  };

  render() {
    return (
      <Container className="mt-3">
        <Form>
          <Form.Row>
            <Col md={4}>
              <Form.Control
                placeholder="Enter keyword"
                value={this.state.query}
                onChange={(e) => this.setState({ query: e.target.value })}
              />
            </Col>
            <Col>
              <Button
                variant="secondary"
                type="submit"
                onClick={this.searchBook}
              >
                Search
              </Button>
            </Col>
          </Form.Row>
        </Form>

        <Row className="my-5">
          <h4>Search Result</h4>
          { this.state.books.map((book) => (
              <Col xs={12} sm={4} md={3} lg={2}>
                <SingleBook book={book} />
              </Col>
            ))}
        </Row>

        <h4 className="mb-3 mt-3">{this.props.books[0].category} </h4>
        <Row>
          {this.props.books.slice(0, 12).map((book) => (
            <Col md={2}>
              <SingleBook book={book} />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default BookList;
