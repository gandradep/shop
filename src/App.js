import { Routes, Route, Outlet } from 'react-router-dom';

import Home from "./routes/home/home.component";

const Navigation = () =>{
  return(
    <div>
      <div>
        <h1>Nav Bar</h1>
      </div>
      <Outlet />
      <div>
        <h2>Footer</h2>
      </div>
    </div>
  )

 }
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        {/* index parameter is to match the path of parent element */}
        <Route index element={<Home />}/>
      </Route>

    </Routes>
  );
}

export default App;
