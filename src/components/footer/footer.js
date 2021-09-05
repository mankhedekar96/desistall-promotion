import logoDark from '../../images/logo-dark.svg';
import twitter from '../../images/twitter.svg';
import discord from '../../images/discord.svg';

function Footer() {
  return (
    <div className="footer w-full bg-white">
        <div className="container w-3/4 mx-auto py-4 my-auto flex justify-between">
            <div>
                <img src={logoDark} className="logo" alt="logo" />
            </div>
            <div>
              <p className="text-white text-center py-3">© {new Date().getFullYear()} Desi Stall. All rights reserved</p>
            </div>
            <div className="flex w-auto h-full align-middle">
              <div className="text-lg p-3">
                <img src={twitter} alt="Twitter" />
              </div>
              <div className="text-lg p-3">
                <img src={discord} alt="Discord" />
              </div>
            </div>
        </div>
    </div>
  );
}

export default Footer;
