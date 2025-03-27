"use client"
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { use } from "react";

export default function Home() {
  const searchParams = useSearchParams();
  return (
    <div>
      Hey this is a page and blog is {searchParams.get('blog')} and utm source is {searchParams.get('utm_source')}
    </div>
  );
}
