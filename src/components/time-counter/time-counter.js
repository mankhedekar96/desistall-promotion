import { useCallback, useState } from "react";


function TimeCounter() {
  const [launchDate, setLanuchDate] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

  // Set the date we're counting down to
  const countDownDate = new Date("Sept 20, 2021 12:00:00").getTime();

  const padLeadingZeros = useCallback((num, size) => {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
  },[]);
  
  // Update the count down every 1 second
  const x = setInterval(() => {
  
    // Get today's date and time
    const now = new Date().getTime();
  
    // Find the distance between now and the count down date
    const distance = countDownDate - now;
  
    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    // Display the result in the element with updating state
    setLanuchDate({
      days: padLeadingZeros(days, 2),
      hours: padLeadingZeros(hours, 2),
      minutes: padLeadingZeros(minutes, 2),
      seconds: padLeadingZeros(seconds, 2),
    });
  
    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
    }
  }, 1000);

  return (
    <div className="w-full time-counter">
      <div className="container w-3/4 mx-auto pt-12 my-auto">
        <p className="text-5xl italic font-bold leading-tight mb-6 w-full text-center">
            Launching on (date)
        </p>
        <div className="w-4/5 mx-auto pt-10 my-auto flex responsive-timer justify-between">
          <div className="counter-block">
            <p className="text-6xl font-bold ml-11 mt-16">{launchDate.days}</p>
          </div>
          <div className="counter-block">
            <p className="text-6xl font-bold ml-11 mt-16">{launchDate.hours}</p>
          </div>
          <div className="counter-block">
            <p className="text-6xl font-bold ml-11 mt-16">{launchDate.minutes}</p>
          </div>
          <div className="counter-block">
            <p className="text-6xl font-bold ml-11 mt-16">{launchDate.seconds}</p>
          </div>
        </div>
        <div className="w-4/5 mx-auto responsive-timer-text pt-4 my-auto flex justify-between text-2xl font-bold">
          <p className="w-1/5 text-center">Days</p>
          <p className="w-1/5 text-center">Hours</p>
          <p className="w-1/5 text-center">Minutes</p>
          <p className="w-1/5 text-center">Seconds</p>
        </div>
      </div>
    </div>
  );
}

export default TimeCounter;
