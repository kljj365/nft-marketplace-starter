import React, { useEffect, useState } from "react";

// Ticks once a second until expiryDate (ms since epoch). Renders nothing when
// there is no expiry or the item has already expired.
const format = (ms) => {
  const total = Math.max(0, Math.floor(ms / 1000));
  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;
  return `${h}h ${m}m ${s}s`;
};

const Countdown = ({ expiryDate }) => {
  const [remaining, setRemaining] = useState(expiryDate ? expiryDate - Date.now() : 0);

  useEffect(() => {
    if (!expiryDate) return;
    setRemaining(expiryDate - Date.now());
    const id = setInterval(() => setRemaining(expiryDate - Date.now()), 1000);
    return () => clearInterval(id);
  }, [expiryDate]);

  if (!expiryDate || remaining <= 0) return null;
  return <div className="de_countdown">{format(remaining)}</div>;
};

export default Countdown;
