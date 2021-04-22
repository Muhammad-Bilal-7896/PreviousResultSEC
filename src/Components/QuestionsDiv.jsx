import { useEffect } from "react";
import "../css/ScoreDiv.css";

function QuestionsDiv(props) {
    return (
        <>
            <h4 className="ml-2"> <b>Question: </b> {props.Question} </h4>
            <h4 className="ml-2"> <b>Option1: </b> {props.Option1} </h4>
            <h4 className="ml-2"> <b>Option2: </b> {props.Option2} </h4>
            <h4 className="ml-2"> <b>Option3: </b> {props.Option3} </h4>
            <h4 className="ml-2"> <b>Option4: </b> {props.Option4} </h4>
            <h4 className="ml-2"> <b>Correct Answer: </b> {props.Answer}</h4>
            <h4 className="ml-2"> <b>Author: </b> {props.author} </h4>
            <h4 className="ml-2"> <b>Time Submitted: </b> {props.TIME} </h4>
        </>
    )
}
export default QuestionsDiv;