// document
 let myul=document.getElementById("list1")
 // tag Name 
 document.getElementsByTagName("p")
 document.getElementsByTagName("p")[0]
 document.getElementsByTagName("ul")
  document.getElementsByTagName("ul")[0]

  ////
  //class 
  document.getElementsByClassName("bGrey")
   document.getElementsByClassName("bGrey")[1]

   ///// name 

   document.getElementsByName("hoppy")

   ////// 
   document.querySelector("p")
    document.querySelector(".bGrey")
   document.querySelectorAll("p")

   let tbl=document.getElementsByTagName("table")[0]
   tbl.getElementsByTagName("tr")
     let tr1= tbl.getElementsByTagName("tr")[0]
     let td2=tr1.getElementsByTagName("td")[1]
   //  td2.innerHTML="<a href='http://www.google.com'>gooogle</a>"

   tbl.children[0].children[0].children[1]

   tbl.getAttribute("class")

//    tbl.getAttribute("class")
// tbl.getAttribute("align")
// tbl.setAttribute("align","center")
// tbl.setAttribute("class","bPink")

tbl.classList.add("nti")


let chck=document.getElementsByName("hoppy")[0]
chck.checked
chck.checked=  false

let imgs=document.querySelectorAll("img")

for (let i = 0; i < imgs.length; i++) {
    //imgs[i].style.border="5px dotted magenta"
    imgs[i].onclick=function(){
        alert("img clicked")
    }
}

















