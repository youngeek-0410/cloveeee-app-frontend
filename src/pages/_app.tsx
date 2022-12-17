import React, { ReactElement, ReactNode } from "react";
import { AppProps } from "next/app";
import { NextPage } from "next";
import Head from "next/head";

import { SpotifyApiAccessToken } from "../common/spotifyMusic/type";
import { SpotifyApiAccessTokenProvider } from "../common/spotifyMusic/contexts/SpotifyApiAuthProvider";
import { setupMockServer, setupMockWorker } from "../mocks/mock";
import { styled } from "../stitches.config";
import { Project } from "../project/type";

export type GeneralPageProps = { spotifyApiAccessToken?: SpotifyApiAccessToken };
export type NextLayout = (page: ReactElement) => ReactNode;
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: NextLayout;
};

type AppPropsWithLayout<P> = AppProps<P> & {
  Component: NextPageWithLayout<P>;
  pageProps: {
    project: Project;
  };
};

if (process.env.NODE_ENV === "development") {
  if (typeof window === "undefined") {
    const m = setupMockServer();
    m.listen();
  } else {
    const m = setupMockWorker();
    m.start();
  }
}

const App = ({ Component, pageProps }: AppPropsWithLayout<GeneralPageProps>) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <SpotifyApiAccessTokenProvider accessToken={pageProps.spotifyApiAccessToken || ""}>
      <StyledContainer>
        <Component {...pageProps} />
        <Head>
          <title>Cloveeee</title>
          <meta key="og:title" property="og:title" content={"オリジナルWebサイト生成サービス"} />
          <meta property="og:type" content="website" />
          <meta
            key="og:description"
            property="og:description"
            content={"Cloveeeeは世界にたった一つだけのオリジナルWebサイトを作ることができるサービスです"}
          />
          <meta
            key="og:image"
            property="og:image"
            content="https://res.cloudinary.com/drb9hgnv3/image/upload/v1671231721/shazaf-zafar-SsyAGjPDpw8-unsplash_fj6thj.jpg"
          />
          <link rel="icon" href="https://res.cloudinary.com/drb9hgnv3/image/upload/v1671063427/logo_pcmicx.svg" />
        </Head>
      </StyledContainer>
    </SpotifyApiAccessTokenProvider>
  );
};

export default App;

const StyledContainer = styled("div", {
  width: "85%",
  margin: "0 auto",
});
