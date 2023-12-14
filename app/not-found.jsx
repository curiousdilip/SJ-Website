import Link from "next/link";
import Image from "next/image";

export default function NotFoundPage() {
  return (
    <>
      <div className="not-found">

        <h1>Whoops!</h1>
        <h2>404 Page Not Found</h2>
        <Image
          src="/subhash-jha.jpeg"
          width={800}
          height={400}
          alt="Picture of the Subhash Jha"
        />
        <h3>Looks like this page went on vacation</h3>
        <p>Try
          <Link href="/"> Home </Link>
          or
          <Link href="/blog"> Blog </Link>
          instead
        </p>
      </div>
    </>
  );
}
