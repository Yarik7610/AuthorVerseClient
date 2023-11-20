import { Route, Routes } from 'react-router-dom'
import './App.scss'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Books } from './pages/Books/Books'
import { Login } from './pages/Login/Login'
import { Main } from './pages/Main/Main'
import { Profile } from './pages/Profile/Profile'
import { ProfileBooks } from './pages/Profile/ProfileBooks/ProfileBooks'
import { ProfileComments } from './pages/Profile/ProfileComments/ProfileComments'
import { ProfileFriends } from './pages/Profile/ProfileFriends/ProfileFriends'
import { Signup } from './pages/Signup/Signup'

export const App = () => {
  return (
    <>
      <Header />
      <div className="mainContent">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/books" element={<Books />} />
          <Route path="/profile" element={<Profile />}>
            <Route path="" element={<ProfileBooks />} />
            <Route path="comments" element={<ProfileComments />} />
            <Route path="friends" element={<ProfileFriends />} />
            <Route path="yourBooks" element={<div>your books</div>} />
          </Route>
          <Route path="*" element={<div>Not found</div>} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}
