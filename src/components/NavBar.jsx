import '../styles/nav.css';

function NavBar() {
    return(
        <nav>
            <a href='/'>Open Devlo</a>
            <input type="text" name='searcg=h-box' placeholder='Search our courses'/>
            <div className="navigation">
                <div>
                <a href="/">Home</a>
                <a href="#Courses">Courses</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
                </div>
                <a href="/user">
                    <img src="assets/user.png" alt="User icon" width={30} height={30}/>
                </a>
            </div>
        </nav>
    )
}

export default  NavBar;