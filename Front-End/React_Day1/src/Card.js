import "./Card.css"
export default function Card(props){
    return(
  
            <div class="card">
                <img src={props.img} alt="image"/>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </div>
    )
}