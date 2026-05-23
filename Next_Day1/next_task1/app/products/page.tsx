import Link from "next/link";

type meal={
  idMeal:number,
  strMealThumb:string,
  strMeal:string
}
async function Products() {
  const respond = await fetch(
    "https://www.themealdb.com/api/json/v1/1/filter.php?i=",
  );
  const data = await respond.json();
  const meals =  data.meals.map((e:meal,i:number)=>{
    console.log(e)
    return (
      <Link key={e.idMeal} href={`/products/${e.idMeal}`}>
        <div className="w-[300px] rounded p-3 m-3 bg-amber-300 d-flex justify-center items-center flex-col ">
          <h1 className="text-3xl">product {i}</h1>
          <img src={e.strMealThumb} />
          <h2>{e.strMeal}</h2>
        </div>
      </Link>
    )
  })
  return (
    <div className="flex flex-wrap justify-between">
      {meals}
    </div>
  );
}

export default Products;
