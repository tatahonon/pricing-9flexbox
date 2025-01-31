import "./CardHead.css"

const CardHead = (props) => {

    return <div>
        <h2 className="Head">{props.head}</h2>
        <p className="headDescription">{props.description}</p>
    </div>
}

export default CardHead;