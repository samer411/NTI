
type user = {
    id:string,
    name:string,
    age:number
}

export default async function Users() {
  let response = await fetch(
    "https://673e5c1f0118dbfe860b13f7.mockapi.io/users",
  );
  let data = await response.json();
  let users = data.map((e:user)=>{
    return(
        <div className=" bg-amber-200 m-3 w-[200px] p-3 rounded-2xl" key={e.id}>
              <div>{e.name}</div>
            <div>{e.age}</div>
        </div>
      
    )
  })
  return (
    <div>
        <h1 className="text-2xl font-bold text-center my-3">Enter the Name and Age of the NEW USER  </h1>
        <form className="mx-3">
      <div className="bg-amber-50 my-3 flex flex-col p-5  border-2 border-[#333] border-solid rounded-2xl">
        <label className="my-3" htmlFor="username">
          Enter Your Name
        </label>
        <input
          className="border-solid border-1"
          type="text"
          name="username"
          id="username"
        />
      </div>
      <div className="bg-amber-50 my-3 flex flex-col p-5 border-2 border-[#333] border-solid rounded-2xl">
        <label className="my-3" htmlFor="nubmer">
          Enter Your Age
        </label>
        <input
          className="border-solid border-1"
          type="number"
          name="password"
          id="password"
        />
      </div>
      <button
        
        className="px-5 py-3 bg-green-200 border-solid border-1 rounded-2xl cursor-pointer"
        type="submit"
      >
        Submit
      </button>
    </form>
    <div className="flex flex-wrap justify-center items-center">
        {users}
    </div>
    </div>
    
    
  );
}
