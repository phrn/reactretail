import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = () => (
  <ContentLoader
    className="items-block"
    speed={3}
    width={280}
    height={606}
    viewBox="0 0 260 606"
    backgroundColor="#dbdbdb"
    foregroundColor="#f2f2f2">
    <rect x="0" y="29" rx="10" ry="10" width="260" height="390" />
    <rect x="0" y="432" rx="10" ry="10" width="260" height="28" />
    <rect x="0" y="475" rx="10" ry="10" width="260" height="51" />
    <rect x="0" y="546" rx="10" ry="10" width="91" height="27" />
    <rect x="99" y="538" rx="25" ry="25" width="160" height="45" />
  </ContentLoader>
);

export default Skeleton;
