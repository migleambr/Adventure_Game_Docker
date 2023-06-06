const NavbarComponent = () => {

    return(
        
        <div className="nav-component">
            <nav className="nav-bar">
                <details>
                    <summary data-text="↓">Menu</summary>   
                    <div className="menu-container">
                        <li><a href="/Game" data-text="&nbsp;Play&nbsp;Game&nbsp;">&nbsp;Play Game&nbsp;</a></li>
                        <li><a href="#" data-text="&nbsp;Instructions&nbsp;">&nbsp;Instructions&nbsp;</a></li>
                        <li><a href="/Footer" data-text="&nbsp;Credits&nbsp;">&nbsp;Credits&nbsp;</a></li>  
                    </div>
                </details>
            </nav>
        </div>
    )

}

export default NavbarComponent;