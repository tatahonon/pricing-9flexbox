import "./CardContainer.css"
import Card from "../Card/Card"

const CardContainer = () => {

    const data = {
        "Basic":{
            "description" :"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "price": 20,
            "topics":["Et harum quidem rerum facilis est et expedita distinctio.", 
            "Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain",
            "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."]},
        "Standart":{
            "description":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
            "price": 35,
            "topics":["On the other hand, we denounce with righteous indignation and dislike men",
            "In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "]},
        "Premium":{
            "description":"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
            "price": 50,
            "topics":["Et harum quidem rerum facilis est et expedita distinctio.",
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur."
        ]
    }}

    return <div className="cardcontainer">
        <Card head={Object.keys(data)[0]} description={data.Basic.description} price={data.Basic.price} advantages={data.Basic.topics}/>
        <Card head={Object.keys(data)[1]} description={data.Standart.description} price={data.Standart.price} advantages={data.Standart.topics}/>
        <Card head={Object.keys(data)[2]} description={data.Premium.description} price={data.Premium.price} advantages={data.Premium.topics}/>
    </div>
}

export default CardContainer;