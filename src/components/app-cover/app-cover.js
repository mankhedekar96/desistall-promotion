import cover from '../../images/website-cover.svg';

function AppCover() {
  return (
    <div className="cover w-full bg-white">
        <img src={cover} className="w-full" alt="logo" />
    </div>
  );
}

export default AppCover;
