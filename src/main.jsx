import { createRoot } from 'react-dom/client'
import './styles.css'
import './input.css'
import './component/firstpstyle.css'
import { App } from './App'
import FirstPage from './component/firstPage'
import Secondp from './component/secondp'
import Thirdp from './component/Thirdp'


createRoot(document.getElementById('root')).render(
  <>
    <div className='firstpdiv'>
  <div className="canvasdiv"></div> 
   <FirstPage/>
      </div>
      <Secondp/>
      <Thirdp/>
  </>
)
