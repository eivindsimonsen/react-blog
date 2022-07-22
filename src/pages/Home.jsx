import Intro from "../components/intro/Intro";
import PopularPosts from "../components/posts/PopularPosts";
import HeadingTwo from "../components/headings/HeadingTwo";
import AllPosts from "../components/posts/AllPosts";

function Home() {
  return (
    <>
      <Intro />
      <main>
        <HeadingTwo title="Most read posts" badge="Popular" />
        <PopularPosts />

        <HeadingTwo title="All posts" badge="Latest" />
        <AllPosts />
      </main>
    </>
  );
}

export default Home;
