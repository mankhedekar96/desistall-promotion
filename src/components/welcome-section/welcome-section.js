import lady1 from '../../images/lady-1.svg';
import lady2 from '../../images/lady-2.svg';
import man1 from '../../images/man-1.svg';
import man2 from '../../images/man-2.svg';

function WelcomeSection() {
  return (
    <div className="w-full welcome-section pt-16">
      <div className="container w-3/4 mx-auto py-8 my-auto flex justify-between">
        <div className="w-1/2">
          <p className="text-6xl italic font-semibold leading-tight mb-6">
            WELCOME TO THE DESI STALL
          </p>
          <p className="text-lg mb-3">
            After riding the Bitcoin Development wave, Satoshi Nakamoto
            seemingly dissapeared to a coastal city of western India and 
            shared the idea of Blockchain with the indians, who create a 
            desi punk community on the ethereum blockchain.
          </p>
          <p className="text-lg mt-3">
            Become a part 10,000 strong community by getting your very 
            own Desi Punk.
          </p>
        </div>
        <div className="w-1/2 pt-4">
          <div className="w-1/2 mx-auto my-auto grid gap-3 grid-cols-2">
            <img className="rounded-md" src={lady1} alt="Lady 1"/>
            <img className="rounded-md mt-10" src={man1} alt="Man 1"/>
            <img className="rounded-md -mt-10" src={lady2} alt="Lady 2"/>
            <img className="rounded-md" src={man2} alt="Man 2"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomeSection;
