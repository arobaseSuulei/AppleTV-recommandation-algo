import {Route, BrowserRouter, Routes} from "react-router-dom";
import App from "./App.jsx";

export default function MainRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<App/>}/>
            </Routes>
        </BrowserRouter>
    )
}