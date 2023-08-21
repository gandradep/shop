import { Routes, Route, Outlet } from 'react-router-dom';

import Navigation from './routes/navigation/navigation.component';
import Home from "./routes/home/home.component";
import SignIn from './routes/sign-in/sign-in.component';

const Shop = () => (
  <div>
    Shop
  </div>
)
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        {/* index parameter is to match the path of parent element */}
        <Route index element={<Home />}/>
        <Route path='shop' element={<Shop />}/>
        <Route path='sign-in' element={<SignIn />}/>
      </Route>

    </Routes>
  );
}

export default App;
