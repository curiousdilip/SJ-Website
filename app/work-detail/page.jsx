import Image from "next/image";
import Footer from "../components/Footer";
import "./work-detail.scss";
export default function workDetail() {
  return (
    <>
      <section id="work-detail">
        <div className="container">
          <div className="heading">
            <h1>Designing Dashboards with usability in mind</h1>
          </div>
          <div className="meta">
            <p className="year">2020</p>
            <p className="type">Dashboard</p>
          </div>
          <div className="excerpt">
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>

          <div className="img-container">
            <Image
              src="/subhash-jha.jpeg"
              width={800}
              height={400}
              alt="First Image"
            />
          </div>

          <h2>Heading 1</h2>
          <h3>Heading 2</h3>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>

          <div className="img-container">
            <Image
              src="/subhash-jha.jpeg"
              width={800}
              height={400}
              alt="First Image"
            />
          </div>

          <div className="img-container">
            <Image
              src="/subhash-jha.jpeg"
              width={800}
              height={400}
              alt="First Image"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
