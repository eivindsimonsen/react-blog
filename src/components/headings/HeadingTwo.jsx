import Badge from "react-bootstrap/Badge";

function HeadingTwo({ title, badge }) {
  return (
    <h2>
      {title} <Badge className="badge">{badge}</Badge>
    </h2>
  );
}

export default HeadingTwo;
