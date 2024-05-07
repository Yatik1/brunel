import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import FormPage from "./pages/FormPage"
import SubmitPage from "./pages/SubmitPage"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/form" element={<FormPage />} />
      <Route path="/submit" element={<SubmitPage />} />
    </Routes>
  )
}

export default App
