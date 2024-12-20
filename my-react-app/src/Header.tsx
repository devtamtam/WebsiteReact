
function Header(){ /*must be captitalized*/
    
    return(
        <header>
            <h1>TamTam First React</h1>
            <nav>
            <ul>
             <li><a href="#">Home</a></li>
             <li><a href="#">About</a></li>
             <li><a href="#">Services</a></li>
             <li><a href="#">Contact</a></li> 
            </ul>
            </nav>
            <hr/>
        </header>
    );//a component can return only one element (one tag)  
      // html にコメントアウト入れたらバグった

}

export default Header // to import to elsewhere

