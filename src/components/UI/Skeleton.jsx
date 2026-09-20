import React from "react";

// Grey placeholder block shown while data is loading. Same size as the real
// element so the layout doesn't jump when the content arrives.
const Skeleton = ({ width = "100%", height = "100%", borderRadius = 0, style }) => (
  <div
    className="skeleton-box"
    style={{ width, height, borderRadius, ...style }}
  ></div>
);

export default Skeleton;
