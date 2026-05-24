"use client";

import { useEffect, useState } from "react";

type User = {
  id: string;
  name: string;
};

function UserClient() {
  const [user, setUser] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function getUser() {
      try {
        const respond = await fetch(
          "https://6a12c66f78d0434e0d5d72fa.mockapi.io/user",
        );
        if (!respond.ok) throw new Error("the data didn't fetch");
        const data = await respond.json();
        setUser(data);
      } catch (err) {
        setError(`the data has a problem ${err}`);
      } finally {
        setLoading(false);
      }
    }
    getUser();
  }, []);
    if (error) return <div>{error}</div>
    if (loading) return <div className="w-full h-screen flex justify-center items-center text-amber-800 text-6xl">loading....</div>
  return (
    <div className="">
      {user.map((e) => {
        return <p key={e.id} className="p-5 m-5 bg-blue-400 rounded ">{e.name}</p>;
      })}
    </div>
  );
}

export default UserClient;
