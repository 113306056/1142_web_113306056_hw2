import { useState } from "react";
import Link from "next/link";

export default function Page() {
  const [count, setCount] = useState(0);

  function sayHello() {
    console.log("hello");
    setCount(count + 1);
  }

  return (
    <>
    歡迎
    <Link href="/posts/first-post">this page!</Link>
    </>
  );
}