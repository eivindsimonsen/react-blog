import Cards from "../cards/Card";

function AllPosts() {
  return (
    <>
      <section className="grid-wrapper">
        <div className="grid-wrapper-posts">
          <Cards className="post" />
          <Cards className="post" />
          <Cards className="post" />
          <Cards className="post" />
          <Cards className="post" />
          <Cards className="post" />
        </div>
        <div className="grid-wrapper-posts__sidebar">
          <aside className="sidebar">
            <i class="fab fa-facebook"></i>
            <i class="fab fa-instagram"></i>
            <i class="fab fa-twitter"></i>
          </aside>

          <aside className="sidebar2">
            <p>ADS</p>
            <p>ADS</p>
            <p>ADS</p>
          </aside>

          <aside className="sidebar2">
            <p>ADS</p>
            <p>ADS</p>
            <p>ADS</p>
          </aside>
        </div>
      </section>
    </>
  );
}

export default AllPosts;
