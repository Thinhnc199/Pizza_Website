// import "./App.css";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import FormAddEdit from "./components/FormAddEdit";
// import Home from "./pages/Home";
// import Dashboard from "./pages/Dashboard";
// import Menu from "./pages/Menu";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Login from "./components/styless/Login";
// import SignUp from "./components/styless/SignUp";
// import AuthDetails from "./components/styless/AuthDetails";

// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <Navbar />
//         <Switch>
//           <Route path="/" exact component={Home} />
//           <Route path="/menu" exact component={Menu} />
//           <Route exact path="/dashboard" component={Dashboard} />
//           <Route exact path="/add" component={FormAddEdit} />
//           <Route exact path="/update/:id" component={FormAddEdit} />
//           <Route path="/about" exact component={About} />
//           <Route path="/contact" exact component={Contact} />
//           <Route path="/login" exact component={Login} />
//           <Route path="/signup" exact component={SignUp} />
//           <Route path="/authdetails" exact component={AuthDetails} />

//         </Switch>
//         <Footer />
//       </Router>
//     </div>
//   );
// }

// export default App;



// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FormAddEdit from './components/FormAddEdit';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './components/styless/Login';
import SignUp from './components/styless/SignUp';
import AuthDetails from './components/styless/AuthDetails';
import ProtectedRoute from './components/auth/ProtectedRoute';
// Import the ProtectedRoute component




function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/menu" exact component={Menu} />
          {/* Use ProtectedRoute for authenticated routes */}
          <ProtectedRoute path="/dashboard" exact component={Dashboard} />
          <ProtectedRoute path="/add" exact component={FormAddEdit} />
          <ProtectedRoute path="/update/:id" exact component={FormAddEdit} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/authdetails" exact component={AuthDetails} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
