import { createRoot } from 'react-dom/client'
import './styles.css'
import './input.css'
import './component/firstpstyle.css'
import { App } from './App'
import FirstPage from './component/firstPage'
import Secondp from './component/secondp'
import Thirdp from './component/Thirdp'
import Fourthp from './component/fourthp'
import Fifthp from './component/fifthp'
import Sixthpage from './component/sixthpage'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
createRoot(document.getElementById('root')).render(
  <>
    <div className='firstpdiv'>
  <div className="canvasdiv"><App/></div> 
   <FirstPage/>
      </div>
      <Secondp/>
      <Thirdp/>
      <Fourthp/>
      <Fifthp/>
      <Sixthpage/>
  </>
)
