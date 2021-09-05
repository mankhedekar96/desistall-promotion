import logo from '../../images/logo.svg';
import logoDark from '../../images/logo-dark.svg';
import sun from '../../images/sun.svg';
import moon from '../../images/moon.svg';
import { useState,useEffect } from 'react';

function Header(props) {

  const [menuClass, setMenuClass] = useState(false);

  const menuChange = () => {
    if(menuClass) {
      setMenuClass(false)
    }else {
      setMenuClass(true)
    }
  }

  useEffect(() => {

    
  },[menuClass]);


  return (
    <div className="header w-full bg-white">
        <div className="container w-3/4 mx-auto py-4 my-auto flex justify-between">
            <div className="d-flex justify-between">
                <img src={props.mode ? logoDark : logo} className="logo" alt="logo" />
                <div onClick={menuChange} className="menu">
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                </div>
            </div>
            
            <div className={`flex w-auto h-full align-middle navbar ${menuClass&&'navbar-open'}`}>
            

              <div className="text-lg p-3">
                <label>Discord</label>
              </div>
              <div className="text-lg p-3">
                <label>Twitter</label>
              </div>
              <div className="text-lg p-3">
                <label>Roadmap</label>
              </div>
              <div className="text-lg p-3">
                <img src={props.mode ? sun : moon} alt="visual mode" onClick={props.changeMode}/>
              </div>
            </div>
        </div>
    </div>
  );
}

export default Header;
