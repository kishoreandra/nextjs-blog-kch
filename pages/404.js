import Link from "next/link";

export default function Custom404() {
  return (
    <h1>
      I know I know you have come a long way, lets go back to{" "}
      <Link href="/">Home 🏡</Link>
    </h1>
  );
}
