import QuizCategory from "./quizCategory.component";
const Home = () => {
  return ( 
    <div className="w-full min-h-[100vh] bg-[rgb(243,243,243)]">
      <QuizCategory/>
      <QuizStartQuestion/>
    </div> );
}

export default Home;