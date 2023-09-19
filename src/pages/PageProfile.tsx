import { useRef, useState } from "react";

type TTimer = number | null;

const styleBtn = {
  padding: "10px",
  margin: "10px",
  backgroundColor: "violet",
};

const Profile = () => {
  const [startTime, setStartTime] = useState<TTimer>(null);
  const [now, setNow] = useState<TTimer>(null);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const handleStart = () => {
    setStartTime(Date.now());
    setNow(Date.now());

    handleStop();
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  };

  const handleStop = () => {
    intervalRef.current && clearInterval(intervalRef.current);
  };

  let timer = 0;
  if (now && startTime) {
    console.log(startTime - now);
    timer = startTime - now;
  }

  return (
    <div>
      <h1>{timer}</h1>
      <button onClick={handleStart} style={styleBtn}>
        start
      </button>
      <button onClick={handleStop} style={styleBtn}>
        stop
      </button>
    </div>
  );
};

export default Profile;
