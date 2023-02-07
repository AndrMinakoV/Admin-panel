import React from "react"
import Home from "./components/pages/Home"
import Userpanel from "./components/pages/Userpanel"
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Alerts from "./components/pages/Alerts"
import Catalog from "./components/pages/Catalog"
import Logs from "./components/pages/Logs"
import Orders from "./components/pages/Orders"

class App extends React.Component {
    
    render() {
        return (
<Router>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/userpanel" element={<Userpanel/>} />
        <Route path="/alerts" element={<Alerts/>} />
        <Route path="/catalog" element={<Catalog/>} />
        <Route path="/orders" element={<Orders/>} />
        <Route path="/logs" element={<Logs/>} />
    </Routes>
</Router>
        );
    }

    
}
export default App


