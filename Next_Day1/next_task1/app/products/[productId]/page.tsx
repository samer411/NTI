type props = {
  params: { productId: string };
};
async function ProductsDetails({ params }: props) {
  const id = (await params).productId;
  const respond = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
  );
  const details = await respond.json();
    console.log(details.meals);
    

  return (
    <div>
      ProductsDetails {id}
      <h1>{details.meals[0].strMeal}</h1>
      <p>ingredient1 : {details.meals[0].strIngredient1}</p>
      <p>ingredient2: {details.meals[0].strIngredient2}</p>
      <p>ingredient3: {details.meals[0].strIngredient1}</p>
    </div>
  );
}

export default ProductsDetails;
