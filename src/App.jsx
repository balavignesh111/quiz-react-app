import { useEffect, useState } from 'react'
import Login from './component/login.component';
import Register from './component/register.component';
import Root from './routes/root.routes';
import QuizCategory from './component/home/quizCategory.component';
import { Leaderboard } from './component/leaderboard/leaderboard.component';
import { History } from './component/history/history.component';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import StartQuiz from './component/startQuiz.component';

const router = createBrowserRouter([
  {
    path:"/",
    element: <Login/>,
  },
  {
    path:"/register",
    element: <Register/>,
  },
  {
    path: "/dashboard",
    element: <Root/>,
    children: [
      {
        path: "/dashboard/home",
        element: <QuizCategory/>
      },
      {
        path: "/dashboard/leaderboard",
        element: <Leaderboard/>
      },
      {
        path: "/dashboard/history",
        element: <History/>
      }
    ]
  },
  {
    path:"/startquiz",
    element: <StartQuiz />,
  },
])

function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
