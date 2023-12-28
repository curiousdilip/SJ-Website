import Image from "next/image";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="social-links">
            <a href="https://www.facebook.com/compdawn" target="_blank">
              {" "}
              <Image src="/fb.svg" width={30} height={30} alt="Facebook" />
            </a>
            <a href="https://www.instagram.com/subhashjha35" target="_blank">
              {" "}
              <Image src="/insta.svg" width={30} height={30} alt="Instagram" />
            </a>
            <a href="https://twitter.com/subhashjha35" target="_blank">
              {" "}
              <Image src="/twitter.svg" width={30} height={30} alt="Twiiter" />
            </a>
            <a href="https://www.linkedin.com/in/subhashjha35" target="_blank">
              {" "}
              <Image
                src="/linkedin.svg"
                width={30}
                height={30}
                alt="Linkedin"
              />
            </a>
            <a href="https://github.com/subhashjha35" target="_blank">
              {" "}
              <Image src="/github.svg" width={30} height={30} alt="Github" />
            </a>
          </div>
          <div className="copyright">
            <p>Copyright © 2024 All rights reserved </p>
            <p>
              Made with ❤️ by{" "}
              <a href="https://www.dilipmaurya.in" target="_blank">
                Dilip
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
