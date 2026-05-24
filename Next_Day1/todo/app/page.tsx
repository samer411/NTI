import '@fortawesome/fontawesome-svg-core/styles.css'
import Link from "next/link";



export default function Home() {
  return (
    <>
      
      <main className="text-[#FF61F8] flex  justify-between items-center  ">
        <div className="flex flex-col  justify-center items-center text-container w-[30%] px-[30px]">
          <h1 className="text-9xl">Take Action</h1>
          <p className="text-[#FFA6FB] text-2xl">This is a todo app that helps you focus on your tasks</p>
           <Link rel="stylesheet" href="/todo">
           <button className="my-[30px] py-3 px-6 text-[#FFEA6C] bg-[#FF61F8] rounded-2xl cursor-pointer">Add a Task</button>
           </Link>
          
        </div>
        <div className="flex  justify-center items-center image-container w-[60%]">
          <img className="h-[600px] rounded-3xl" src="/hero_section.jpg" alt="" />
        </div>
      </main>
    </>
  );
}
