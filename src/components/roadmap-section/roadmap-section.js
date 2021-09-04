import featureIcon1 from '../../images/feature-icon-1.svg';
import featureIcon2 from '../../images/feature-icon-2.svg';
import featureIcon3 from '../../images/feature-icon-3.svg';
import featureIcon4 from '../../images/feature-icon-4.svg';
import roadmap from '../../images/roadmap.svg';

function RoadmapSection() {
  return (
    <div className="w-full roadmap-section">
      <p className="container w-3/4 mx-auto py-16 text-5xl font-semibold leading-tight mb-6">
          Roadmap
      </p>
    
      <div class="container w-3/4 mx-auto my-auto flex justify-between">
        <div className="w-1/2 py-16">
            <div className="flex my-8">
                <div className="mr-8">
                    <img src={featureIcon1} alt="Feature Icon 1"/>
                </div>
                <div>
                    <p className="text-base font-semibold mb-4">Headline</p>
                    <p className="text-lg mb-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    <br/>Interdum porta magna at blandit a.
                    </p>
                </div>
            </div>
            <div className="flex my-8">
                <div className="mr-8">
                    <img src={featureIcon2} alt="Feature Icon 1"/>
                </div>
                <div>
                    <p className="text-base font-semibold mb-4">Headline</p>
                    <p className="text-lg mb-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    <br/>Interdum porta magna at blandit a.
                    </p>
                </div>
            </div>
            <div className="flex my-8">
                <div className="mr-8">
                    <img src={featureIcon3} alt="Feature Icon 1"/>
                </div>
                <div>
                    <p className="text-base font-semibold mb-4">Headline</p>
                    <p className="text-lg mb-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    <br/>Interdum porta magna at blandit a.
                    </p>
                </div>
            </div>
            <div className="flex my-8">
                <div className="mr-8">
                    <img src={featureIcon4} alt="Feature Icon 1"/>
                </div>
                <div>
                    <p className="text-base font-semibold mb-4">Headline</p>
                    <p className="text-lg mb-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    <br/>Interdum porta magna at blandit a.
                    </p>
                </div>
            </div>
        </div>
        <div className="w-1/2 pl-24">
            <img src={roadmap} alt="Road-map"/>
        </div>
      </div>
    </div>
  );
}

export default RoadmapSection;
