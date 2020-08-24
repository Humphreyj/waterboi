import React,{useState} from 'react';

const Navigation = () => {
    const [drawerIsOpen,setDrawerIsOpen] = useState(false)
    return (
        <nav className='main-nav'>
            <div className="menu">
                <i className={drawerIsOpen ? "fas fa-glass-whiskey toggle open" : "fas fa-glass-whiskey toggle"}
                onClick={()=>setDrawerIsOpen(!drawerIsOpen)}
                ></i>
                <div className={drawerIsOpen ? "menu-modal open-modal" : "menu-modal"}>
                    <p>Login</p>
                    <p>Nearby</p>
                    <p>Add Business</p>
                </div>
            </div>
            
            
        </nav>
    );
}

export default Navigation;
