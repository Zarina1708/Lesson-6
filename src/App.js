import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import PhotosPage from "./pages/photosPage/PhotosPage";
import PhotosPageClass from "./pages/photosPage/PhotosPageClass";
import Item from "./pages/photosPage/Item";




function App() {
    return (
        <>
       <BrowserRouter>
            <Routes>
                <Route index element={<PhotosPage/>} />
                <Route path='/:id' element={<Item />} />
            </Routes>
        </BrowserRouter>
            {/* <PhotosPage/> */}
        </>
    );
}

export default App;
