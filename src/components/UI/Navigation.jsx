import React,{useState} from 'react';
import {Link} from 'react-router-dom';

const Navigation = () => {
    const [drawerIsOpen,setDrawerIsOpen] = useState(false)
    return (
        <nav className='main-nav'>
            <div className="menu">
                <i className={drawerIsOpen ? "fas fa-glass-whiskey toggle open" : "fas fa-glass-whiskey toggle"}
                onClick={()=>setDrawerIsOpen(!drawerIsOpen)}
                ></i>
                <div className={drawerIsOpen ? "menu-modal open-modal" : "menu-modal"}>
                    <Link to='/' onClick={()=>setDrawerIsOpen(!drawerIsOpen)}>Home</Link>
                    <Link to='/' onClick={()=>setDrawerIsOpen(!drawerIsOpen)}>Login</Link>
                    <Link to='/' onClick={()=>setDrawerIsOpen(!drawerIsOpen)}>Signup</Link>
                </div>
            </div>
            
            
        </nav>
    );
}

export default Navigation;
