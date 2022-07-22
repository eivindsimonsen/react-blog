import CardGroup from "react-bootstrap/CardGroup";
import Cards from "../cards/Card";

function PopularPosts() {
  return (
    <section className="popular-section">
      <CardGroup className="card-group-featured">
        <Cards />
        <Cards />
        <Cards />
      </CardGroup>
    </section>
  );
}

export default PopularPosts;
