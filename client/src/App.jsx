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
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import { UserDataProvider } from "./context/userDataContext";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import FitnessPage from "./pages/FitnessPage.jsx";
import HealthPage from "./pages/HealthPage.jsx";
import SignUp from "./components/SignupPage.jsx";
import Login from "./components/LoginForm/LoginForm.jsx";
import Account from "./components/AccountPage.jsx";

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
            <Route path="/health" element={<HealthPage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/account" element={<Account />} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes>
        </Router>
      </UserDataProvider>
    </ApolloProvider>
  );
}

export default App;
