import React from "react";

import { styled } from "../../stitches.config";
import { Headline } from "../common/Headline";
import { ImageMessage } from "../type";

type Props = {
  count: number;
  items: ImageMessage[];
};

export const ImageMessagesPage: React.FC<Props> = (props) => {
  return (
    <>
      <Headline title={`${props.count}件の写真`} />
      <div>
        <PhotoList>
          {props.items.map((imageMessageData, i) => {
            return <Photo key={i} src={imageMessageData.url} alt="picture sent" />;
          })}
        </PhotoList>
      </div>
    </>
  );
};

const PhotoList = styled("div", {
  display: "flex",
  flexWrap: "wrap",
  gap: "2px",
});

const Photo = styled("img", {
  width: "32%",
  maxWidth: "32%",
  height: "auto",
});
