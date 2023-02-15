import './assets/global.css'
import { Header } from './components/Header'
import { Home } from './pages/Home'
import { NewsTemplate } from './pages/NewsTemplate'


import { BrowserRouter, Routes, Route } from 'react-router-dom'


export function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='news/:id' element={<NewsTemplate/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}
