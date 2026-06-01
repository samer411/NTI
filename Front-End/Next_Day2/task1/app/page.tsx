"use client"
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter()
  return (
    <form className="flex justify-center items-center flex-col h-screen ">
      <div className="bg-amber-50 my-3 flex flex-col p-5  border-2 border-[#333] border-solid rounded-2xl">
        <label className="my-3" htmlFor="username">Enter Your UserName</label>
      <input className="border-solid border-1" type="text" name="username" id="username" />
      </div>
      <div className="bg-amber-50 my-3 flex flex-col p-5 border-2 border-[#333] border-solid rounded-2xl">
        <label className="my-3" htmlFor="password">Enter Your Password</label>
      <input className="border-solid border-1" type="password" name="password" id="password" />
      </div>
      <button onClick={(e)=>{
        e.preventDefault()
        router.push("/users")}} 
        className="px-5 py-3 bg-amber-200 border-solid border-1 rounded-2xl cursor-pointer" type="submit">Submit</button>
    </form>
  );
}
