// eslint-disable-next-line no-unused-vars
import React from "react";
import "./App.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { UserDataProvider } from "./context/userDataContext";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import FitnessPage from "./pages/FitnessPage.jsx";
import HealthPage from "./pages/HealthPage.jsx";
import SignUp from "./components/SignupPage.jsx";
import ChestWorkout from "./components/ChestWorkout.jsx";
import LegsWorkout from "./components/LegsWorkout.jsx";
import AbsWorkout from "./components/AbsWorkout.jsx";
import Login from "./components/LoginPage.jsx";
import Account from "./components/AccountPage.jsx";
import SideBar from "./components/SideBar.jsx";
import Shoulders from "./components/Shoulders.jsx";
import Back from "./components/Back.jsx";
import ArmWorkoutComponent from "./components/ArmWorkout.jsx";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <UserDataProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/fitness" element={<FitnessPage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/health" element={<HealthPage />} />
            <Route path="/account" element={<Account />} />
            <Route
              path="/exercises/chest"
              element={
                <SideBar>
                  <ChestWorkout />
                </SideBar>
              }
            />
            <Route
              path="/exercises/arms"
              element={
                <SideBar>
                  <ArmWorkoutComponent />
                </SideBar>
              }
            />

            <Route
              path="/exercises/shoulders"
              element={
                <SideBar>
                  <Shoulders />
                </SideBar>
              }
            />
            <Route
              path="/exercises/back"
              element={
                <SideBar>
                  <Back />
                </SideBar>
              }
            />

            <Route
              path="/exercises/legs"
              element={
                <SideBar>
                  <LegsWorkout />
                </SideBar>
              }
            />
            <Route
              path="/exercises/abs"
              element={
                <SideBar>
                  <AbsWorkout />
                </SideBar>
              }
            />
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes>
        </Router>
      </UserDataProvider>
    </ApolloProvider>
  );
}

export default App;
