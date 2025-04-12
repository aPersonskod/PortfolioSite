import LeftSide from "./LeftSide.tsx";
import {Outlet} from "react-router-dom";
import 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col col-sm-12 col-lg-5'>
                        <LeftSide/>
                    </div>
                    <div className='col col-sm-12 col-lg-7' style={{minWidth: '420px'}}> {/*bg-body-secondary*/}
                        <Outlet/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
