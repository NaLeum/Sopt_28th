import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainHeader from "./components/common/MainHeader";
import Calendar from "./components/common/Calendar";
import Title from "./components/common/Title";
import Footer from "./components/common/Footer";
import Main from "./pages/Main";
import Diary from "./pages/Diary";

const getCurrDate = () => {
  const now = new Date();
  const currYear = now.getFullYear();
  const currMonth = now.getMonth();
  return { year: currYear, month: currMonth };
};

function App() {
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  useEffect(()=>{
    setYear(getCurrDate().year);
    setMonth(getCurrDate().month);
  },[])

  return (
    <>
      <BrowserRouter>
        <MainHeader />
        <Calendar
          currYear={year}
          setCurrYear={setYear}
          currMonth={month}
          setCurrMonth={setMonth}
        />
        <Title />
        <Switch>
          <Route
            exact
            path="/"
            component={() => <Main year={year} month={month} />}
          />
          <Route path="/diary" component={Diary} />
          <Route path="/diary/:id" component={Diary} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
