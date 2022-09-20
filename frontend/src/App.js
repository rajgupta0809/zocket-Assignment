import React from 'react'
import Sidebar from './component/Sidebar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Campaign from './views/Campaign'
import Task from './views/Task'
import Products from './views/Products'
import CampaignSelection from './views/CampaignSelection'
import LastSelection from './views/LastSelection'

const App = () => {
  return (
    <Router>
      <div className='root'>
        <div className='row'>
          <div className='col-1'>
            <Sidebar />
          </div>
          <div className='col-11 root_main'>
            <Routes>
              <Route path='/' element={<Campaign />} />
              <Route path='/step1' element={<Task />} />
              <Route path='/step2' element={<Products />} />
              <Route path='/step3' element={<CampaignSelection />} />
              <Route path='/step4' element={<LastSelection />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App
