import {BrowserRouter} from 'react-router-dom';

import {Intro, Navbar,StarsCanvas} from './components'

const  App=() =>{

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
          <div className="">
          <StarsCanvas/>
            <Navbar/>
            <Intro/>

          </div>
            
           
            

            <div className="relative z-0">
              
              
            </div>


      </div>

    </BrowserRouter>
  )
}

export default App
