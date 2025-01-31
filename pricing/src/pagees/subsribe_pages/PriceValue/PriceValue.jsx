import "./PriceValue.css"

const PriceValue = (props) => {

    return<div>
        <p>$</p>
        <p>{props.price}</p>
        <p>/mo</p>
    </div>
}

export default PriceValue;