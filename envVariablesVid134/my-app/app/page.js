"use client"
import Image from "next/image";

export default function Home() {
  return (
    <div>
      name is {process.env.NAME}<br/>
      name is {process.env.NEXT_PUBLIC_NAME}<br/>
      id is {process.env.ID}<br/>
      public id is {process.env.NEXT_PUBLIC_ID}<br/>
      secret is {process.env.SECRET}<br/>
      public secret is {process.env.NEXT_PUBLIC_SECRET}<br/>
    </div>
  );
}
