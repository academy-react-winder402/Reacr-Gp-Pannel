import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  CardLink,
  Row,
  Col,
} from "reactstrap";
import Earnings from "../component/Earnings";


const Home = () => {
  return (
    <div>
      <Row> 
        <Col sm='4'>
          <Earnings/>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
