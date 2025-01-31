import "./ContentList.css"
import ContentItem from "../ContentItem/ContentItem";
import { useId } from "react";

const ContentList = (props) => {
  
    return <div>
        {props.advantages.map((e) =><ContentItem advantage={e}/>)} 
    </div>
}

export default ContentList;