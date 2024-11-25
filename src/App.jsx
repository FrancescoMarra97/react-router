import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppHeader from "./components/AppHeader.jsx"
import AppArticleForm from './components/ApparticleForm.jsx'
import AppListPost from './components/AppListPost.jsx'




function App() {





  return (
    <>

      <AppHeader />
      <AppArticleForm />
      <AppListPost />


    </>
  )
}

export default App
