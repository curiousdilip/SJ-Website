import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./works.scss";
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
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
