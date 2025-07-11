import logo from './logo.svg';
import './App.css';
import AddGrocery from './components/AddGrocery';
import SearchGrocery from './components/SearchGrocery';
import DeleteGrocery from './components/DeleteGrocery';
import ViewGrocery from './components/ViewGrocery';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path= "/" element={ <AddGrocery/> }/>
    <Route path= "/search" element={ <SearchGrocery/> }/>
    <Route path= "/delete" element={ <DeleteGrocery/> }/>
    <Route path= "/view" element={ <ViewGrocery/> }/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
