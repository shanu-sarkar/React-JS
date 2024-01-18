import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function CurrentTime() {

  const [time,setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
        setTime(new Date())
    }, 1000);

    return () => {
      clearInterval(intervalId)
    }

  }, [])

  return (
    <React.Fragment>
      <div className="">
        <p className="lead">
          This is the current time: {time.toLocaleDateString()} -{" "}
          {time.toLocaleTimeString()}{" "}
        </p>
      </div>
    </React.Fragment>
  );
}

export default CurrentTime;
