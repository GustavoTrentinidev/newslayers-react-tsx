import './assets/global.css'
import { Header } from './components/Header'
import { NewsPage } from './components/NewsPage'

export function App() {
  return (
    <div className="h-full w-screen p-0 pb-4 m-0 bg-gradient-to-t from-slate-700 to-slate-900">
      <Header/>
      <NewsPage/>
    </div>
  )
}
