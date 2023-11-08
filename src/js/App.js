import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from './views/Home';
import Navbar from "./components/Navbar";
import Settings from "./views/Settings";
import Login from "./views/Login";
import Register from "./views/Register";
import ChatView from "./views/Chat";

function App() {
  return (
    // <Router>
    //   <Navbar />
    //   <div className='content-wrapper'>
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/settings" element={<Settings />} />
    //       <Route path="/chat/:id" element={<ChatView />} />
    //     <Route path="/login" element={<Login />} />
    //     <Route path="/register" element={<Register />} />
    //     </Routes>
    //   </div>
    // </Router>
    <Router>
    <Navbar />
    <div className='content-wrapper'>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/settings">
          <Settings />
        </Route>
        <Router path="/chat/:id">
            <ChatView />
          </Router>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
      </Switch>
    </div>
  </Router>
  )
}

export default App;
