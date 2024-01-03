import { createContext, useContext, useState} from "react";

const UserContext = createContext();

export const UserProvider = ({children}) => {
  const [userEmail,setUserEmail] = useState(null);
  const [displayName, setDisplayName]= useState(null);

  const [formFields, setFormFields] = useState({
    displayName: "",
    email:"",
    password:"",
    confirmPassword:"",
  });

  const setUser = (email, name) =>{
    setUserEmail(email);
    setDisplayName(name);
  }

  const [category,setCategory] = useState("");
  const [totalQuestion, SetTotalQuestion] = useState(10);
  const [difficulty,SetDifficulty] = useState("any difficulty");
  const [index, setIndex] = useState(0);
  const [score,setScore] = useState(0);

  // database - static data
  const [quizData,setQuizData] = useState([])


  return (
    <UserContext.Provider
      value={{
        userEmail,
        displayName,
        setUser,
        formFields,
        setFormFields,
        totalQuestion,
        SetTotalQuestion,
        difficulty,
        SetDifficulty,
        category,
        setCategory,
        quizData,
        setQuizData,
        index,
        setIndex,
        score,
        setScore
      }}
    >
      {children}
    </UserContext.Provider>
  )
}


export const useUser = ()=>{
  return useContext(UserContext);
}