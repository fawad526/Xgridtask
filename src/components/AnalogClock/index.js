import React, { useEffect, useState } from "react";
import { StyledClock, StyledOuter, StyledLineOuter, StyledHand } from "./style";
function AnalogClock() {
  const [time, setTime] = useState([new Date()]);
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  });

  const seconds = time.getSeconds();
  const minutes = time.getMinutes();    
  const hours = time.getHours();


  const secondsDegrees = (seconds / 60) * 360 + 90;
  const minutesDegrees = (minutes / 60) * 360 + (seconds / 60) * 6 + 90;
  const hoursDegrees = (hours / 12) * 360 + (minutes / 60) * 30 + 90;
  return (
    <StyledClock>
      <StyledOuter>
        <StyledLineOuter></StyledLineOuter>
        <StyledHand angleDeg={hoursDegrees} />
        <StyledHand angleDeg={minutesDegrees} />
        <StyledHand angleDeg={secondsDegrees} />
      </StyledOuter>
    </StyledClock>
  );
}

export default AnalogClock;
