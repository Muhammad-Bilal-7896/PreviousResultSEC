import { useEffect } from "react";
import "../css/ScoreDiv.css";

var percentage = 0.0;
function ScoreDiv(props) {
    percentage = (parseFloat(props.SCORE) / parseFloat(props.TOTALQUESTIONS)) * 100.00;
    percentage = percentage.toFixed(5); 
    return (
        <>
            <h4 className="ml-2"> <b>Name: </b> {props.NAME} </h4>
            <h4 className="ml-2"> <b>Class: </b> {props.CLASS} </h4>
            <h4 className="ml-2"> <b>Subject: </b> {props.SUBJECT} </h4>
            <h4 className="ml-2"> <b>Obtained Score: </b> {props.SCORE} </h4>
            <h4 className="ml-2"> <b>Total Questions: </b> {props.TOTALQUESTIONS} </h4>
            <h4 className="ml-2"> <b>Percentage: </b> {percentage} % </h4>
            <h4 className="ml-2"> <b>Status: </b> Passed </h4>
            <h4 className="ml-2"> <b>Time taken: </b> {props.TIMESPENT} </h4>
            <h4 className="ml-2"> <b>Test Given AT: </b> {props.TIME} </h4>
        </>
    )
}
export default ScoreDiv;