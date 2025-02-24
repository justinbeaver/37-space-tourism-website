import Btn from "@/components/Btn/Btn";
import PageBackground from "@/components/PageBackground/PageBackground";
import useMediaQueries from "@/hooks/useMediaQueries";

import s from "./Home.module.scss";

const Home = () => {
  return (
    <PageBackground variant="home">
      <div className="wrapper">
        <div className={s.content}>
          <Header />
          <ExploreButton />
        </div>
      </div>
    </PageBackground>
  );
};
export default Home;

const Header = () => {
  return (
    <header className={s.header}>
      <h1 className={s.title}>
        SO, YOU WANT TO TRAVEL TO
        <span className={s.emphasized}>SPACE</span>
      </h1>
      <p className={s.subtitle}>
        Let’s face it; if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of on the edge of it. Well sit
        back, and relax because we’ll give you a truly out of this world
        experience!
      </p>
    </header>
  );
};

const ExploreButton = () => {
  const { isSm } = useMediaQueries();

  return (
    <Btn variant="primary" size={isSm ? "lg" : "md"}>
      EXPLORE
    </Btn>
  );
};
