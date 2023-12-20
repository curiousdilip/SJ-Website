import Footer from "../components/Footer";
import Header from "../components/Header";
import MorePosts from "../components/MorePosts";
import "./blog.scss";
export default function Blog() {
  return (
    <>
      <Header />
      <section id="blog-page">
        <div className="container">
          <div className="heading">
            <h1>Blog</h1>
          </div>
          <MorePosts />
        </div>
      </section>
      <Footer />
    </>
  );
}
