import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../pages/login"

export const RoutesMain = () => {
    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            .<Route path="/resgister" element={''} />
            <Route path="/home" element={''} />
        </Routes>
    )
}