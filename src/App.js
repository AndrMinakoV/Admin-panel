import React from "react"
import Home from "./Components/pages/Home"
import Userpanel from "./Components/pages/Userpanel"
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

class App extends React.Component {
    
    render() {
        return (
<Router>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/userpanel" element={<Userpanel/>} />
    </Routes>
</Router>
        );
    }

    
}
export default App


