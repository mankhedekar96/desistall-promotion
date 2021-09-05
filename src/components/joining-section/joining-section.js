import lady3 from '../../images/lady-3.svg';

function JoiningSection() {
  return (
    <div className="w-full bg-white joining-section">
      <div className="container w-3/4 mx-auto py-16 my-auto flex justify-between">
        <div className="w-1/2">
            <img src={lady3} className="" alt="Lady 3"/>
        </div>
        <div className="w-1/2 pl-16 pt-32">
            <p className="text-4xl font-semibold leading-tight mb-6">Become a Member</p>
            <p className="text-lg mb-6 w-3/4">Join our exclusive community of blockchain technology enthusiasts by owning a Desi Punk. Share ideas, get help, meet over coffee and build technologies of the future.</p>
            <p className="text-lg mb-6">Mint Price: 0.035 ETH</p>
        </div>
      </div>
    </div>
  );
}

export default JoiningSection;
