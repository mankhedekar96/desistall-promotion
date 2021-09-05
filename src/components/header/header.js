import logo from '../../images/logo.svg';
import logoDark from '../../images/logo-dark.svg';
import sun from '../../images/sun.svg';
import moon from '../../images/moon.svg';

function Header(props) {
  return (
    <div className="header w-full bg-white">
        <div className="container w-3/4 mx-auto py-4 my-auto flex justify-between">
            <div>
                <img src={props.mode ? logoDark : logo} className="logo" alt="logo" />
            </div>
            <div className="flex w-auto h-full align-middle">
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
