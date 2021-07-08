import { Jumbotron, Container } from "react-bootstrap"

const array = ["Fantasy", "History", "Horror", "Romance", "Sci-fi"]

const MyWelcome = () => (
    <Jumbotron fluid style={{background: "linear-gradient(180deg, rgb(233, 236, 239), white)", height: "10rem"}}>
        <Container>
            <h1 className="text-center pb-3">Welcome to our Bookstore</h1>
            <h4 className="text-center">Browse through the latest {array[0]} releases</h4>
        </Container>
    </Jumbotron>
)

export default MyWelcome