export default async function Home() {
  const respond = await fetch(
    "https://www.themealdb.com/api/json/v1/1/filter.php?i=",
  );
  const data = await respond.json();

  return (
    <h1 className="text-3xl text-center text-red-500">
      {new Date().toLocaleTimeString()}
    </h1>
  );
}
