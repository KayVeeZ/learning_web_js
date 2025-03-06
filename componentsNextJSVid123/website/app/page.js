import Image from "next/image";

export default function Home() {
  return (
    <div className="container my-5 size-80 bg-red-500 relative">
      <Image className="mx-auto object-cover" fill={true} src="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg" alt="" />
    </div>
  );
}