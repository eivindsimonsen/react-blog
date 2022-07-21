import Intro from "../components/intro/Intro";
import PopularPosts from "../components/posts/PopularPosts";
import HeadingTwo from "../components/headings/HeadingTwo";

function Home() {
  return (
    <>
      <Intro />
      <main>
        <section className="popular-section">
          <HeadingTwo title="Most read posts" badge="Popular" />
          <PopularPosts />
        </section>
        <section>
          <HeadingTwo title="All posts" badge="Latest" />
        </section>
      </main>
    </>
  );
}

export default Home;
