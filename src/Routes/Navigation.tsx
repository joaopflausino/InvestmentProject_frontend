import Home from "../Pages/home/Home";
import Login from "../Pages/login/Login";
import AddInvestment from "../Pages/addInvestment/AddInvestment";
import Stocks from "../Pages/stocks/Stocks";
import News from "../Pages/news/News";
import Registration from "../Pages/registration/Registration";
import SimulateInvestment from "../Pages/simulateInvestment/SimulateInvestment";
import Investments from "../Pages/investments/Investments";
import Account from "../Pages/account/Account";

export const nav = [
    { path: "",               name: "Login",            element: <Login/>,             isMenu: false,    isPrivate: false},
    { path: "home",           name:"Home",              element: <Home/>,              isMenu: true,     isPrivate: true },
    { path: "news",           name: "News",             element: <News/>,              isMenu: true,     isPrivate: true },
    { path: "account",        name: "Account",          element: <Account/>,           isMenu: true,     isPrivate: true },
    { path: "addinvestment",  name:"Add Investment",    element: <AddInvestment/>,     isMenu: true,     isPrivate: true },
    { path: "stocks",         name:"Stocks",            element: <Stocks/>,            isMenu: true,     isPrivate: true },
    { path: "registration",   name:"Registration",      element: <Registration/>,      isMenu: false,     isPrivate: false },
    { path: "simulate",       name:"Simulate",          element: <SimulateInvestment/>,isMenu: true,     isPrivate: true },
    { path: "investments",    name:"Investments",       element: <Investments/>,       isMenu: true,     isPrivate: true },
]