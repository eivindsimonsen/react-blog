import Intro from "../components/intro/Intro";
import PopularPosts from "../components/posts/PopularPosts";
import Badge from "react-bootstrap/Badge";

function Home() {
  return (
    <>
      <Intro />
      <main>
        <section className="popular-section">
          <h2>
            Most read posts <Badge className="badge">Popular</Badge>
          </h2>
          <PopularPosts />
        </section>
      </main>
    </>
  );
}

export default Home;
