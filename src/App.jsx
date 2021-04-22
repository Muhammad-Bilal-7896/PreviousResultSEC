import { useState, useEffect } from "react";
import Header from "./Components/Header";
import ScoreDiv from "./Components/ScoreDiv";
import QuestionsDiv from "./Components/QuestionsDiv";
import Score from "./Data/Scores.json";
import Questions from "./Data/MCSQS.json";
import './App.css';
function App() {
  var arr = Object.entries(Score);
  var arr1 = Object.entries(Questions);
  const [SelectedClass, setSelectedClass] = useState(1);
  const [SelectedSubjectArray, setSelectedSubjectArray] = useState([]);
  const [selectedsubject, setSelectedsubject] = useState("English");
  const [currentData, setCurrentData] = useState([]);
  const [currentQuestionsData, setCurrentQuestionsData] = useState([]);
  useEffect(() => {
    // console.log("Selected Class==>",SelectedClass);
    let subjects = arr[0][1];
    let selectedsubjects = Object.keys(subjects);
    setSelectedSubjectArray(selectedsubjects);
    let data = arr[1][1].English;
    data = Object.values(data);
    setCurrentData(data);

    //Questions Data
    let Qdata = arr1[1][1].English;
    Qdata = Object.values(Qdata);
    setCurrentQuestionsData(Qdata);
  }, [])

  // //Class Three English
  // console.log("Score==>",);
  // //Class Three English
  // console.log("Score==>", arr[SelectedClass][1].Geography);
  // //Class Three English
  // console.log("Score==>", arr[SelectedClass][1].History);
  // //Class Three English
  // console.log("Score==>", arr[SelectedClass][1].ICT);
  // //Class Three English
  // console.log("Score==>", arr[SelectedClass][1].Islamiyat);
  // //Class Three English
  // console.log("Score==>", arr[SelectedClass][1].Math);
  // //Class Three English
  // console.log("Score==>", arr[SelectedClass][1].Science);
  // //Class Three English
  // console.log("Score==>", arr[SelectedClass][1]["Social Studies"]);
  // //Class Three English
  // console.log("Score==>", arr[SelectedClass][1].Urdu);
  // //Class Three English
  // console.log("Score==>", arr[SelectedClass][1].Geography);
  // console.log("Scoreqqqqqqqqqqqqqqqq==>", arr);
  const changeClass = (e) => {
    setSelectedClass(e);
    let subjects = arr[e][1];
    let selectedsubjects = Object.keys(subjects);
    // console.log("HELLO==>"+ "and" +  "and" + e +selectedsubjects);
    setSelectedSubjectArray(selectedsubjects);
  }

  const changeSubject = (e) => {
    alert(e)
    let AllData = arr[SelectedClass][1].[`${e}`];
    setSelectedsubject(e);
    let convertedArrData = Object.values(AllData);
    //console.log(convertedArrData);
    setCurrentData(convertedArrData);
    //console.log("Subjects of selected class==>",AllData); 
    
    //Questions Data
    let QdataAll = arr1[SelectedClass][1].[`${e}`];
    let convertedArrData1 = Object.values(QdataAll);
    setCurrentQuestionsData(convertedArrData1);
  }

  return (
    <div>
      <div className="container">
        <div className="fixed-top">
          <Header />
        </div>
      </div>

      <br /><br /><br /><br />
      <hr />
      <h1 className="text-center mt-4 mb-4">Previous Exam Data</h1>
      <hr />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <select className="form-select form-select-lg mb-3" value={SelectedClass} onChange={(e) => changeClass(e.target.value)} aria-label=".form-select-lg example">
              <option disabled defaultValue>Select the Class</option>
              <option value={0}>Three</option>
              <option value={1}>Four</option>
              <option value={2}>Five</option>
              <option value={3}>Six</option>
              <option value={4}>Seven</option>
            </select>
            <select className="form-select form-select-sm" value={selectedsubject} onChange={(e) => changeSubject(e.target.value)} aria-label=".form-select-sm example">
              <option disabled defaultValue>Select the Subject</option>
              {SelectedSubjectArray.map((item, i) => {
                return (
                  <option key={i} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      </div>
      <br />
      {/* -------------------------------------------------------------------------------------------------------- */}
      <div className="container">
        <div>
          {/* Tabs navs */}
          <ul className="nav nav-tabs nav-justified mb-3" id="ex1" role="tablist">
            <li className="nav-item" role="presentation">
              <a className="nav-link active" id="ex3-tab-1" data-mdb-toggle="tab" href="#ex3-tabs-1" role="tab" aria-controls="ex3-tabs-1" aria-selected="true">Results</a>
            </li>
            <li className="nav-item" role="presentation">
              <a className="nav-link" id="ex3-tab-2" data-mdb-toggle="tab" href="#ex3-tabs-2" role="tab" aria-controls="ex3-tabs-2" aria-selected="false">MCQ's</a>
            </li>
          </ul>
          {/* Tabs navs */}
          {/* Tabs content */}
          <div className="tab-content" id="ex2-content">
            <div className="tab-pane fade show active" id="ex3-tabs-1" role="tabpanel" aria-labelledby="ex3-tab-1">
              <div className="classses">
                <div className="container mt-4">
                  <ul className="ulStyle">
                    {currentData.map((item, i) => {
                      return (
                        <li
                          className="list-Map"
                          key={i}
                        >
                          <div className="list-Container">
                            <ScoreDiv NAME={item.Name} CLASS={item.Class} SCORE={item.Score} SUBJECT={item.Subject} TIME={item.Time} TIMESPENT={item.TimeSpent} TOTALQUESTIONS={item.totalQuestions} />
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="ex3-tabs-2" role="tabpanel" aria-labelledby="ex3-tab-2">
              <div className="classses">
                <div className="container mt-4">
                  <ul className="ulStyle">
                    {currentQuestionsData.map((item, i) => {
                      return (
                        <li
                          className="list-Map"
                          key={i}
                        >
                          <div className="list-Container">
                            <QuestionsDiv Question={item.Question} Option1={item.Option1} Option2={item.Option2} Option3={item.Option3} Option4={item.Option4} Answer={item.Answer} author={item.author} TIME={item.Date} />
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Tabs content */}
        </div>
      </div>
    </div>
  );
}

export default App;
