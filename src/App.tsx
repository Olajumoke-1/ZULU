import {BrowserRouter, Routes , Route} from 'react-router-dom';
import Zulu from "./Components/Zulu";






const App= () => {

  return (
  <BrowserRouter>
  <Routes>
    
    <Route path='/' element={<Zulu />} />

    </Routes>
    </BrowserRouter>
    )
  }
  
  export default App