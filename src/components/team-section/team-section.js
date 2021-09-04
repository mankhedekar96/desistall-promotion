import lady1 from '../../images/lady-1.svg';
import lady2 from '../../images/lady-2.svg';
import man1 from '../../images/man-1.svg';
import man2 from '../../images/man-2.svg';

function TeamSection() {
    return (
      <div className="w-full team-section">
        <div class="container w-3/4 mx-auto py-16 my-auto">
          <p className="text-5xl font-semibold leading-tight mb-4 w-full text-center">
              The Team
          </p>
          <p className="text-lg mb-8 w-full text-center">
            As a startup, we are going through the development cycle.
          </p>
          <div className="flex w-full">
            <div className="">
                <img src={lady1} className="team-icon mx-auto mb-6" alt="team-1"/>
                <p className="text-lg mb-6 w-3/4 mx-auto text-center">
                    3D renderings of the physical product
                </p>
            </div>
            <div className="">
                <img src={man2} className="team-icon mx-auto mb-6" alt="team-1"/>
                <p className="text-lg mb-6 w-3/4 mx-auto text-center">
                    Working version of the physical product 
                </p>
            </div>
            <div className="">
                <img src={man1} className="team-icon mx-auto mb-6" alt="team-1"/>
                <p className="text-lg mb-6 w-3/4 mx-auto text-center">
                    Manufacturing the final physical product
                </p>
            </div>
            <div className="">
                <img src={lady2} className="team-icon mx-auto mb-6" alt="team-1"/>
                <p className="text-lg mb-6 w-3/4 mx-auto text-center">
                    Final physical product has begun shipping
                </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default TeamSection;
  