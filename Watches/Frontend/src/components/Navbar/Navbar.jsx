import './Navbar.css';
import { useStates } from "../../States";
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const { setSearchvalue,getAllProducts,searchvalue} = useStates();
    
    useEffect(() => {
        getAllProducts();
        // eslint-disable-next-line
    },[searchvalue]);
    
    return (
        <>
            <div className='navbar-page'>

                <div className='navbar-div'>
                    <ul>
                        

                        <li>
                        <input className='nav-searchbar' type='text' placeholder=' 🔍 Search items'
                        onChange={(e) => setSearchvalue(e.target.value)}
                        ></input>
                        </li>

                        <li>
                            <Link to="/"><div className='filter-div'><button className='filter-btn'> Logout</button></div></Link>
         
                            
                        </li>

                    </ul>
                </div>

            </div>
        </>
    );
};
export default Navbar;