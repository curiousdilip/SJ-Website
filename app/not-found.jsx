import Link from "next/link";
import Footer from "./components/Footer";

export default function NotFoundPage() {
  return (
    <>
      <div className="not-found">
        <Link href="/">Home</Link>
      </div>
      <Footer />
    </>
  );
}
