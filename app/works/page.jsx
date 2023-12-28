import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./works.scss";
import data from "../data/data";

export default function works() {
  return (
    <>
      <Header />
      <section id="works-page">
        <div className="container">
          <div className="heading">
            <h1>Work</h1>
          </div>

          <div className="work-list">
            {data.map((item, index) => (
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
    </>
  );
}
