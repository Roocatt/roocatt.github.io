import { Link } from 'react-router-dom';

const NavBar = () => {
    return (<>
        <nav>
            <ul className={'tree-view'}>
                <li>
                    <a>Roos Catling-Tate</a>
                    <ul>
                        <li>
                            <Link to={'/'}>Home</Link>
                        </li>
                        <li>
                            <Link to={'/about'}>About Me</Link>
                        </li>
                        <li>
                            <Link to={'/blog'}>Blog</Link>
                        </li>
                        {/* Commented out until I finish this page.
                        <li>
                            <Link to={'/projects'}>Projects</Link>
                        </li>
                        */}
                    </ul>
                </li>
            </ul>
        </nav>
    </>);
}

export default NavBar;