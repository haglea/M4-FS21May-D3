import "./App.css";
import { Container } from "react-bootstrap";
import MyNavBar from "./Components/MyNavBar";
import MyFooter from "./Components/MyFooter";
import MyWelcome from "./Components/MyWelcome";
import WarningSign from "./Components/WarningSign";
import MyBadge from "./Components/MyBadge";
import fantasy from "./data/fantasy.json";
import BookList from "./Components/BookList";

function App() {
  return (
    <Container>
      <MyNavBar title="Home" />
      <MyWelcome />
      <WarningSign text={"I am an alert"} />
      <MyBadge color="success" text="my badge" />
      <BookList books={fantasy} />
      <MyFooter />
    </Container>
  );
}

export default App;
