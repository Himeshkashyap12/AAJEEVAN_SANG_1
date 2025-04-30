import React from "react"
import { Route, Routes } from "react-router-dom"
import CustomLayout from "./components/layout/Layout"
import HomePage from "./pages/HomePage"
import LikesPage from "./pages/LikesPage"
import DiscoverPage from "./pages/DiscoverPage"
import MessagePage from "./pages/MessagePage"
import PlanPage from "./pages/PlanPage"
import AuthPage from "./pages/AuthPage"
import ProfilePage from "./pages/ProfilePage"
function App() {
  return (
    <>
      <Routes>
        {/* Auth  */}
        <Route path="/login" element={<AuthPage />} />
        <Route path="/profile" element={<ProfilePage />} />

        {/* ProtectedRoute */}

        <Route path="/" element={<CustomLayout />}>
          <Route index element={<HomePage />} />
          <Route path="discover" element={<DiscoverPage />} />
          <Route path="likes" element={<LikesPage />} />
          <Route path="message" element={<MessagePage />} />
        </Route>
        <Route path="/" element={<CustomLayout sidebar={false} />}>
          <Route path="plan" element={<PlanPage />} />
        </Route>
      </Routes>

    </>
  )
}

export default App
