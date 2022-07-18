import CardGroup from "react-bootstrap/CardGroup";
import Cards from "../cards/Card";

function PopularPosts() {
  return (
    <CardGroup className="card-group-featured">
      <Cards />
      <Cards />
      <Cards />
    </CardGroup>
  );
}

export default PopularPosts;
