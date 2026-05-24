"use client";

import { useRouter } from "next/navigation";

function AboutPage() {
  const router =useRouter()
  return (
    <div>
      <h1 className="text-center text-3xl text-amber-700">About Page</h1>
      <button
        className="block mx-auto px-3 py-2 bg-blue-600 m-5 text-white rounded cursor-pointer"
        onClick={() => {
          router.replace("/product")
          router.push("/product")
          router.back()
          router.forward()
          router.refresh()
        }}
      >
        go to product
      </button>
    </div>
  );
}

export default AboutPage;
