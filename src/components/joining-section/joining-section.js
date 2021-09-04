import lady3 from '../../images/lady-3.svg';

function JoiningSection() {
const navigateTo = () => window.open("https://google.co.in");
  return (
    <div className="w-full bg-white joining-section">
      <div class="container w-3/4 mx-auto py-16 my-auto flex justify-between">
        <div className="w-1/2">
            <img src={lady3} className="" alt="Lady 3"/>
        </div>
        <div className="w-1/2 pl-16 pt-32">
            <p className="text-4xl font-semibold leading-tight mb-6">Get a Desi Punk</p>
            <p className="text-lg mb-6">Join our exclusive community of blockchain technology enthusiasts by owning a Desi Punk. Share ideas, get help, meet over coffee and build technologies of the future.</p>
            <div className="text-lg py-1.5">
                <button className="mint-btn" onClick={navigateTo}>Mint a Desi Punk</button>
              </div>
        </div>
      </div>
    </div>
  );
}

export default JoiningSection;
