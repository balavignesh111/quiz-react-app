import Navbar from "./navbar.component";
import QuizCategory from "./quizCategory.component";
import {QuizStartQuestion} from "./quizStartQuestion.component";
import {Leaderboard} from "../leaderboard/leaderboard.component";
import History from "../history/history.component";
const Home = () => {
  return ( 
    <div className="w-full min-h-[100vh] bg-[rgb(243,243,243)]">
      <Navbar/>
      {/* <QuizCategory/>
      <QuizStartQuestion/> */}
      <Leaderboard/>
      {/* <History/> */}
    </div> );
}

export default Home;