import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <h2>Page not found</h2>
      <p>sorry the page does not exist</p>
      <Link href="/">Return Home</Link>
    </div>
  );
};

export default NotFound;
