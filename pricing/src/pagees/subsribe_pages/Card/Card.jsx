import "./Card.css"
import CardHead from "../CardHead/CardHead"
import CardBody from "../CardBody/CardBody"

const Card = (props) => {

    return <article>
        <CardHead head={props.head} description={props.description}/>
        <CardBody price={props.price} advantages={props.advantages}/>
    </article>
}

export default Card;