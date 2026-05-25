"use client";

import Image from "next/image";
export default function Home() {
  return (
    <>
    
    <main className="flex justify-around my-[50px]">
      <div className="text w-200">
        <h1 className="text-5xl">Main Headline</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo tempore laboriosam, expedita alias mollitia et deserunt exercitationem dolor ducimus numquam soluta earum suscipit incidunt! Corporis eum explicabo architecto provident suscipit!</p>
      </div>
      <Image width={500} height={500} src="/main.jpg" alt="main"/>
    </main>
    </>
    
  );
}
