import { Route, Routes } from 'react-router-dom'
import './App.scss'
import { Header } from './components/Header/Header'
import { Books } from './pages/Books/Books'
import { LoginForm } from './pages/LoginForm/LoginForm'
import { Footer } from './pages/Main/Footer/Footer'
import { Main } from './pages/Main/Main'
import { SignupForm } from './pages/SignupForm/SignupForm'

const App = () => {
  return (
    <>
      <Header />
      <div className="mainContent">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/books" element={<Books />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
