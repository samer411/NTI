import Image from "next/image";
import img from "../../public/image.png";
async function ProductPage() {
  const respond = await fetch(
    "https://www.themealdb.com/api/json/v1/1/filter.php?i=",
  );
  const data = await respond.json();

  return (
    <div>
      {/* <img src="../../image.png"/> */}
      <Image
        src={data.meals[0].strMealThumb}
        alt="notfound"
        width={200}
        height={200}
        priority
      />
    </div>
  );
}

export default ProductPage;
