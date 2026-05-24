import { revalidatePath } from "next/cache";

type User = {
  id: string;
  name: string;
};
async function UserServer() {
  new Promise((resolve) => setTimeout(resolve, 5000));
  const respond = await fetch(
    "https://6a12c66f78d0434e0d5d72fa.mockapi.io/user",
  );
  const data = await respond.json();
  async function adduser(formData: FormData) {
    "use server";
    const name = formData.get("name");
    await fetch("https://6a12c66f78d0434e0d5d72fa.mockapi.io/user", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ name }),
    });
    revalidatePath("/user-server");
  }
  return (
    <div>
      <form action={adduser}>
        <input
          name="name"
          type="text"
          className="border border-[#CCC] p-2 m-2 mt-5 rounded"
        />
        <button
          type="submit"
          className="bg-blue-400 px-3 py-2 rounded text-white cursor-pointer"
        >
          Add user
        </button>
      </form>
      <div className="flex flex-wrap">
        {data.map((e: User) => {
          return (
            <p key={e.id} className="p-5 m-5 bg-green-300 rounded w-75 ">
              {e.name}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default UserServer;
