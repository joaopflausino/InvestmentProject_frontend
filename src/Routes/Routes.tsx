import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/home/Home";
import Login from "../Pages/login/Login";
import AddInvestment from "../Pages/addInvestment/AddInvestment";
import Stocks from "../Pages/stocks/Stocks";
import News from "../Pages/news/News";
import Registration from "../Pages/registration/Registration";
import SimulateInvestment from "../Pages/simulateInvestment/SimulateInvestment";
import Investments from "../Pages/investments/Investments";
import Account from "../Pages/account/Account";

export const router  = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
                {path: "",element: <Login/>},
                {path: "home",element: <Home/>},
                {path: "news",element: <News/>},
                {path: "account",element: <Account/>},
                {path: "addinvestment",element: <AddInvestment/>},
                {path: "stocks",element: <Stocks/>},
                {path: "registration",element: <Registration/>},
                {path: "simulate",element: <SimulateInvestment/>},
                {path: "investments",element: <Investments/>},
        ]
    }
])