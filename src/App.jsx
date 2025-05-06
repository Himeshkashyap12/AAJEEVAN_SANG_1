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
import EditProfilePage from "./pages/EditProfilePage"
import PartnerPreferencePage from "./pages/PartnerPreferencePage"
import NotificationPage from "./pages/NotificationPage"
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
          <Route path="discover" element={<DiscoverPage />} />
          <Route path="likes" element={<LikesPage />} />
          <Route path="message" element={<MessagePage />} />
          <Route path="edit-profile" element={<EditProfilePage />} />
          <Route path="partner-preference" element={<PartnerPreferencePage />} />
          <Route path="notification-page" element={<NotificationPage />} />
        </Route>
        <Route path="/" element={<CustomLayout sidebar={false} />}>
          <Route path="plan" element={<PlanPage />} />
        </Route>
      </Routes>

    </>
  )
}

export default App
