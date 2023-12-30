import Footer from "../components/Footer";
import Headers from "../components/Headers";

import Blogs from "../components/blogs";
import "./blog.scss";
export default function Blog() {
  return (
    <>
      <Headers />
      <section id="blog-page">
        <div className="container">
          <div className="heading">
            <h1>Blog</h1>
          </div>
          {/* <MorePosts /> */}
          <Blogs />
        </div>
      </section>
      <Footer />
    </>
  );
}
