import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./component/Navbar";
import { UserDataProvider } from "./context/userDataContext";

function App() {
  return (

    <UserDataProvider>
      <Navbar />
      <Outlet />
    </UserDataProvider>
  );
}

export default App;
