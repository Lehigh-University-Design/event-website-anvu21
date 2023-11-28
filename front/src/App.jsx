import {BrowserRouter} from 'react-router-dom';

import {Intro, Navbar,StarsCanvas, About,Work, Calendar} from './components'

const  App=() =>{

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary border-2 border-red-500">
          <div className="">
          <StarsCanvas/>
            <Navbar/>
            <Intro/>
            
          </div>
          <About/>
          <Work/>
          <Calendar/>


            <div className="relative z-0">
              
              
            </div>


      </div>

    </BrowserRouter>
  )
}

export default App
