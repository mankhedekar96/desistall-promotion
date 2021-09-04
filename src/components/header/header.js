import logo from '../../images/logo.svg';

function Header() {
  return (
    <div className="header w-full bg-white">
        <div class="container w-3/4 mx-auto p-1 my-auto flex justify-between">
            <div>
                <img src={logo} className="logo" alt="logo" />
            </div>
            <div className="flex w-auto h-full align-middle">
              <div className="text-lg p-3">
                <label>Roadmap</label>
              </div>
              <div className="text-lg p-3">
                <label>Gallery</label>
              </div>
              <div className="text-lg p-3">
                <label>Members</label>
              </div>
              <div className="text-lg p-1.5">
                <button className="mint-btn">Mint a Desi Punk</button>
              </div>
            </div>
        </div>
    </div>
  );
}

export default Header;
