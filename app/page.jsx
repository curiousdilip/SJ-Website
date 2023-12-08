import Image from "next/image";
import "./home.css";

export default function Home() {
  return (
    <main>
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
            <a href="#" className="btn">

              Download Resume
            </a>
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
            <a href="#">View all</a>
          </div>
          <div className="posts">
            <a className="post" href="#">
              <h2>Making a design system from scratch</h2>
              <div className="archive">
                <p className="date">12 Feb 2020</p>
                <div className="seperator"></div>
                <p className="tags">Design, Pattern</p>
              </div>
              <p className="excerpt">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </a>
            <a className="post" href="#">
              <h2>Making a design system from scratch</h2>
              <div className="archive">
                <p className="date">12 Feb 2020</p>
                <div className="seperator"></div>

                <p className="tags">Design, Pattern</p>
              </div>
              <p className="excerpt">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </a>
          </div>
        </div>
      </section>
      <section id="works">
        <div className="container">
          <div className="heading">
            <p>Featured works</p>
          </div>
          <div className="work-list">
            <div className="work">
              <div className="image">
                <Image
                  src="/subhash-jha.jpeg"
                  width={246}
                  height={180}
                  alt="Dashboard"
                />
              </div>
              <div className="description">
                <h3>Designing Dashboards</h3>
                <div className="meta">
                  <p className="year">2020</p>
                  <p className="type">Dashboard</p>
                </div>
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
            </div>
            <div className="work">
              <div className="image">
                <Image
                  src="/subhash-jha.jpeg"
                  width={246}
                  height={180}
                  alt="Dashboard"
                />
              </div>
              <div className="description">
                <h3>Vibrant Portraits of 2020</h3>
                <div className="meta">
                  <p className="year">2020</p>
                  <p className="type">Dashboard</p>
                </div>
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
            </div>
            <div className="work">
              <div className="image">
                <Image
                  src="/subhash-jha.jpeg"
                  width={246}
                  height={180}
                  alt="Dashboard"
                />
              </div>
              <div className="description">
                <h3>36 Days of Malayalam type</h3>
                <div className="meta">
                  <p className="year">2020</p>
                  <p className="type">Dashboard</p>
                </div>
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
