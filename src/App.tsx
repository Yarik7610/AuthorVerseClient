import { Route, Routes } from 'react-router-dom'
import './App.scss'
import { Header } from './components/Header/Header'
import { Books } from './pages/Books/Books'
import { Login } from './pages/Login/Login'
import { Footer } from './pages/Main/Footer/Footer'
import { Main } from './pages/Main/Main'
import { Profile } from './pages/Profile/Profile'
import { ProfileBooks } from './pages/Profile/ProfileBooks/ProfileBooks'
import { Signup } from './pages/Signup/Signup'

const App = () => {
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
            <Route path="comments" element={<div>comments</div>} />
            <Route path="friends" element={<div>friends</div>} />
            <Route path="yourBooks" element={<div>your books</div>} />
          </Route>
          <Route path="*" element={<div>Not found</div>} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
