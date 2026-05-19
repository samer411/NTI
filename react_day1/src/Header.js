import "./Header.css"
export default function Header(){

    return(
        <header>
            <h1>Logo</h1>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact Us</li>
            </ul>
            <div class="buttons">
                <button>Login</button>
                <button>Register</button>
            </div>
        </header>
    )
}