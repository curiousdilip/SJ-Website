import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <nav>
        <div className="container">
          <Link href="/">
            <Image
              src="/subhash-jha.jpeg"
              width={40}
              height={40}
              alt="Picture of the Subhash Jha"
            />
          </Link>
          <div className="menu">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/works">Works</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
