import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './pages/Home';
import EditorPage from './pages/EditorPage';
import { useState,useEffect } from 'react';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

function App() {
    const [docId, setDocId] = useState('');
    const [loading,setloading]=useState(false);
    useEffect(()=>{
     setloading(true);
     setTimeout(()=>{
       setloading(false);
     },4000)
  },[])
    return (
        
        <div>
      {
        loading ? (
          <div className="App">
          <ClimbingBoxLoader  size={30}
           color={'#28a745'}
           loading={loading}/></div>
        ) :
        (<>
            <div>
                <Toaster
                    position="top-right"
                    toastOptions={{
                        success: {
                            theme: {
                                primary: '#4aed88',
                            },
                        },
                    }}
                ></Toaster>
            </div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route
                        path="/editor/:roomId"
                        element={<EditorPage />}
                    ></Route>
                </Routes>
            </BrowserRouter>
        </>
        )}
    </div>
    );
}

export default App;