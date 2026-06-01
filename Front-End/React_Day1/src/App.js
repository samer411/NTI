import './App.css';
import Header from './Header.js';
import Card from "./Card.js"

function App() {
  const Cards=[
    {img:"https://picsum.photos/200/300",title:"Title",description:"This is Description."},
    {img:"https://picsum.photos/200/300",title:"Title",description:"This is Description."},
    {img:"https://picsum.photos/200/300",title:"Title",description:"This is Description."},
    {img:"https://picsum.photos/200/300",title:"Title",description:"This is Description."},
    {img:"https://picsum.photos/200/300",title:"Title",description:"This is Description."},
    {img:"https://picsum.photos/200/300",title:"Title",description:"This is Description."},
    {img:"https://picsum.photos/200/300",title:"Title",description:"This is Description."},
    {img:"https://picsum.photos/200/300",title:"Title",description:"This is Description."},
    {img:"https://picsum.photos/200/300",title:"Title",description:"This is Description."},
    {img:"https://picsum.photos/200/300",title:"Title",description:"This is Description."}
  ]
  return (
    <>
    <Header/>
    <main>

      {Cards.map((e,i)=>{
            return <Card img={e.img} title={e.title} description={e.description} key={i}/>
          })}
    </main>
   
    </>
    
  );
}

export default App;
