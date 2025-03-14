import { useState } from "react";
import { useNavigation } from "react-router-dom";

import Btn from "@/components/Btn/Btn";
import PageBackground from "@/components/PageBackground/PageBackground";
import PagePadding from "@/components/PagePadding/PagePadding";
import Wrapper from "@/components/Wrapper/Wrapper";
import { useMediaQueriesContext } from "@/context/mediaQueriesContext";

import s from "./Home.module.scss";

const Home = () => {
  return (
    <PageBackground variant="home">
      <PagePadding>
        <Wrapper size="sm">
          <div className={s.content}>
            <Header />
            <ExploreButton />
          </div>
        </Wrapper>
      </PagePadding>
    </PageBackground>
  );
};
export default Home;

const Header = () => {
  return (
    <header className={s.header}>
      <h1 className={s.title}>
        <span>SO, YOU WANT TO TRAVEL TO</span>
        <span className={s.emphasized}>SPACE</span>
      </h1>
      <p className={s.description}>
        Let’s face it; if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of on the edge of it. Well sit
        back, and relax because we’ll give you a truly out of this world
        experience!
      </p>
    </header>
  );
};

const ExploreButton = () => {
  const [isClicked, setIsClicked] = useState(false);
  const { state, location } = useNavigation();
  const { isSm } = useMediaQueriesContext();

  return (
    <div className={s.btnWrapper}>
      <Btn
        to="destination"
        variant="primary"
        size={isSm ? "lg" : "md"}
        isPending={
          isClicked &&
          state === "loading" &&
          location?.pathname === "/destination"
        }
        onClick={() => setIsClicked(true)}
      >
        EXPLORE
      </Btn>
    </div>
  );
};
