type Meal = {
    idMeal : string;
    strMeal : string;
    strMealThumb : string;
}

type ApiResponse={
    meals:Meal[];
}

const main = document.getElementsByTagName("main")[0]
fetch("https://www.themealdb.com/api/json/v1/1/filter.php?i=")
.then((x)=>x.json())
.then((data)=>{
    for(let meal of data.meals){
        console.log("samer")
       main!.innerHTML+=`
                <div class="dark:bg-transparent bg-white m-3 rounded shadow-lg  w-[400px] h-full p-3">
                <img class="w-full border-solid border-2 border-gray-500" src="${meal.strMealThumb}" alt="">
                <p class="mt-3">${meal.strMeal}</p>
            </div>
    ` 
    }
    
})

function draw(data:ApiResponse){
    // console.log(data.meals)
}

