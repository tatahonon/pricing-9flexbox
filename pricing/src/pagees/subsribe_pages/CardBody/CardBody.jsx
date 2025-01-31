import "./CardBody.css"
import PriceValue from "../PriceValue/PriceValue";
import ContentList from "../ContentList/ContentList";
import BuyButton from "../../../components/BuyButton/BuyButton";

const CardBody = (props) => {

    return <div>
        <PriceValue price={props.price}/>
        <ContentList advantages={props.advantages}/>
        <BuyButton/>
    </div>
}

export default CardBody;