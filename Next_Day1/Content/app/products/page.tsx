import Link from "next/link";


async function Products() {
  const respond = await fetch(
    "https://www.themealdb.com/api/json/v1/1/filter.php?i=",
  );
  const data = await respond.json();

  
  return (
    <div className="flex">
      <Link href={`/products/${data.meals[0].idMeal}`}>
        <div className="w-[200px] bg-amber-500 m-5 text-center p-2 rounded-2xl">
          <h1 className="text-3xl font-bold text-amber-700 p-5">product 1</h1>
          <img src={data.meals[0].strMealThumb} />
          <h2>{data.meals[0].strMeal}</h2>
        </div>
      </Link>
      <Link href={`/products/${data.meals[1].idMeal}`}>
        <div className="w-[200px] bg-amber-500 m-5 text-center p-2 rounded-2xl">
          <h1 className="text-3xl font-bold text-amber-700 p-5">product 2</h1>
          <img src={data.meals[1].strMealThumb} />
          <h2>{data.meals[1].strMeal}</h2>
        </div>
      </Link>
      <Link href={`/products/${data.meals[2].idMeal}`}>
        <div className="w-[200px] bg-amber-500 m-5 text-center p-2 rounded-2xl">
          <h1 className="text-3xl font-bold text-amber-700 p-5">product 3</h1>
          <img src={data.meals[2].strMealThumb} />
          <h2>{data.meals[2].strMeal}</h2>
        </div>
      </Link>
    </div>
  );
}

export default Products;
