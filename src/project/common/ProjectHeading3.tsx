import React from "react";

import { ViewAll } from "../../common/ViewAll";
import { styled } from "../../stitches.config";

export const ProjectHeading3: React.FC<{ viewAllLink?: string }> = ({ viewAllLink, children }) => {
  return (
    <Heading>
      <Text>{children}</Text>
      {viewAllLink ? <ViewAll href={viewAllLink} /> : null}
    </Heading>
  );
};

const Heading = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

const Text = styled("h2", {
  fontWeight: "400",
  fontSize: "24px",
  color: "$textPrimary",
  margin: "0",
});
