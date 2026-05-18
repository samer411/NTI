addEventListener("load",function(){
    function createFun(){
    alert("new Element Created ")
}

//updatebtn.onclick=updateFun;

// function updateFun(){
//     alert ("content Updated ......")
// }


updatebtn.onclick=function(){
      alert ("content Updated ......")
};


deletebtn.onclick=deleteFun;
function deleteFun(){
    document.title="deleted"
}

deletebtn.onclick=function(){
    document.body.style.background="cyan";
}
deletebtn.addEventListener("click",deleteFun)
deletebtn.addEventListener("click",function(){
    document.title="deleted"
})

testingdiv.addEventListener("mouseover",function(e){
     // console.log("mouseover")
    // console.log(this)
    // console.log(e)
    // console.log(e.type)
    // console.log(e.target)
    // console.log(e.x)




})//mouseover


testingdiv.addEventListener("mousemove",function(e){
     // console.log("mousemoving .... ")
    //   testing.innerText
    // testingdiv.textContent
    // testingdiv.innerHTML

    this.innerHTML="<h1 align='center'><font color='red'>"+e.x+" : "+e.y+"</font></h1>"


})//mousemove


testingdiv.addEventListener("mouseout",function(){
     // console.log("mouse OUT ")

})//mouseout

// chNGE 
cities.addEventListener("change",function(){
    res.innerText=this.value;
    res.style.cssText=`
    color:red;
    font:bold 20px verdana

    `

})



// txt.addEventListener("keydown",function(){
//     res.innerText=this.value;
//       res.style.cssText=`
//     color:red;
//     font:bold 20px verdana

//     `
// })


// txt.addEventListener("keyup",function(){
//     res.innerText=this.value;
//       res.style.cssText=`
//     color:red;
//     font:bold 20px verdana

//     `
// })

txt.addEventListener("keypress",function(){
    res.innerText=this.value;
      res.style.cssText=`
    color:red;
    font:bold 20px verdana

    `
})



});