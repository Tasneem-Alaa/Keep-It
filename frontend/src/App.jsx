import React from 'react'
import { Routes, Route } from "react-router"
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import NoteDetailPage from './pages/NoteDetailPage'

const App = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0 -z-20
        [background:radial-gradient(120%_120%_at_50%_10%,#121420_60%,#FF5FA240_100%)]"
      />

      <div class="relative h-full w-full ">
        <div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#FF5FA220_1px,transparent_1px),linear-gradient(to_bottom,#FF5FA220_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#fff_70%,transparent_110%)]">
      </div>
        <div className="relative z-10">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/create" element={<CreatePage />} />
            <Route path="/note/:id" element={<NoteDetailPage />} />
          </Routes>
        </div>
      </div>

    </div>
  )
}

export default App
