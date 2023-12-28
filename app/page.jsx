import Image from "next/image";
import "./home.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Link from "next/link";
import data from "./data/data";
import Blogs from "./components/blogs";

export default function Home() {
  return (
    <main>
      <Header />
      <section id="hero">
        <div className="container">
          <div className="content">
            <h1>
              Hi, I am Subhash,
              <br /> Frontend Developer
            </h1>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
            <div className="btn">
              <a href="#">Download Resume</a>
            </div>
          </div>
          <div className="image">
            <Image
              src="/subhash-jha.jpeg"
              width={243}
              height={243}
              alt="Picture of the Subhash Jha"
            />
          </div>
        </div>
      </section>
      <section id="blogs">
        <div className="container">
          <div className="heading">
            <p>Recent posts</p>
            <Link href="/blog">View all</Link>
          </div>
          {/* <Posts /> */}
          <Blogs maxBlogs={2} />
        </div>
      </section>
      <section id="works">
        <div className="container">
          <div className="heading">
            <p>Featured works</p>
          </div>
          <div className="work-list">
            {data.slice(0, 3).map((item, index) => (
              <div className="work" key={index}>
                <div className="image">
                  <Image
                    src={item.img}
                    width={246}
                    height={180}
                    alt={item.title}
                  />
                </div>
                <div className="description">
                  <h3>{item.title}</h3>
                  <div className="meta">
                    <p className="year">{item.year}</p>
                    <p className="type">{item.type}</p>
                  </div>
                  <p>{item.content}</p>
                  <div className="tech">
                    {item.tech.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>

                  <div className="links">
                    <a href={item.codeLink} target="_blank">
                      Code <img src="/github.svg" alt="" />{" "}
                    </a>
                    <a href={item.liveLink} target="_blank">
                      Live <img src="/arrowLink.svg" alt="" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
