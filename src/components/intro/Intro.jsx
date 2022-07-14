import Heading from "../headings/Heading";
import Quote from "../headings/Quote";

function Intro() {
  return (
    <>
      <section className="intro">
        <div className="intro__texts">
          <Heading title="Welcome to my gibberish react-blog!" id="intro-heading" />
          <Quote quote="Best blog ever read!" />
        </div>

        <div className="intro-image"></div>
      </section>
    </>
  );
}

export default Intro;
