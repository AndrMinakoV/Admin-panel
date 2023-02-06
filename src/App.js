import React from "react"
import Home from "./Components/pages/Home"
import Userpanel from "./Components/pages/Userpanel"
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Alerts from "./Components/pages/Alerts"
import Catalog from "./Components/pages/Catalog"
import Logs from "./Components/pages/Logs"
import Orders from "./Components/pages/Orders"

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


