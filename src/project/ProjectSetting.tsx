import React from "react";

import { LinkShare } from "../common/LinkShare";
import { styled } from "../stitches.config";

import { ProjectHeading2 } from "./common/ProjectHeading2";
import { ProjectHeading3 } from "./common/ProjectHeading3";
import { ProjectParagraph } from "./common/ProjectParagraph";

export const ProjectSetting: React.FC = () => {
  return (
    <>
      <SectionTitle>
        <ProjectHeading2>サイト管理</ProjectHeading2>
        <ProjectParagraph>みんなからの投稿を集めてオリジナルWebサイトを作成できます</ProjectParagraph>
      </SectionTitle>

      <Section>
        <ProjectHeading3>寄書き用リンクをコピー</ProjectHeading3>
        <ProjectParagraph>寄書きを投稿してもらうには下のURLをコピーして共有してください</ProjectParagraph>
        {/* TODO: いい感じコピーできるコンポーネントを用意する */}
        <LinkShare />
      </Section>

      <Section>
        <ProjectHeading3>プレビューをみる</ProjectHeading3>
        <ProjectParagraph>下のリンクから完成予定のオリジナルWebサイトを見ることができます</ProjectParagraph>
        {/* TODO: いい感じコピーできるコンポーネントを用意する */}
        {/*  <LinkCopyButton onClick={copyLink}>コピーする</LinkCopyButton>*/}
      </Section>

      <Section>
        <ProjectHeading3>サイトを公開する</ProjectHeading3>
        <ProjectParagraph>
          下のリンクを押したあと最終確認を済ませるとオリジナルWebサイトを公開することができます
        </ProjectParagraph>
        {/* TODO: いい感じコピーできるコンポーネントを用意する */}
        {/*  <LinkCopyButton onClick={copyLink}>コピーする</LinkCopyButton>*/}
      </Section>
    </>
  );
};

const Section = styled("div", {
  margin: "16px 0",
});
const SectionTitle = styled("div", {
  margin: "24px 0 36px",
});
const LinkCopyButton = styled("button", {});
