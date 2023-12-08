import Image from "next/image";

export default function Footer() {
    return <>

        <footer>
            <div className="container">
                <div className="social-links">
                    <a href="#"> <Image
                        src="/fb.svg"
                        width={30}
                        height={30}
                        alt="Facebook"
                    /></a>
                    <a href="#"> <Image
                        src="/insta.svg"
                        width={30}
                        height={30}
                        alt="Instagram"
                    /></a>
                    <a href="#"> <Image
                        src="/twitter.svg"
                        width={30}
                        height={30}
                        alt="Twiiter"
                    /></a>
                    <a href="#"> <Image
                        src="/linkedin.svg"
                        width={30}
                        height={30}
                        alt="Linkedin"
                    /></a>
                </div>
                <div className="copyright">
                    <p>Copyright ©2024 All rights reserved </p>
                </div>
            </div>
        </footer>
    </>;
}
