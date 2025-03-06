import {
  Navigate,
  Outlet,
  useLoaderData,
  useOutletContext,
  useParams,
} from "react-router-dom";

import PageBackground from "@/components/PageBackground/PageBackground";
import ImageSlider from "@/components/ImageSlider/ImageSlider";
import PaginationCircle from "@/components/PaginationCircle/PaginationCircle";
import useMediaQueries from "@/hooks/useMediaQueries";
import fetchData from "@/utils/fetchData";

import s from "./Technology.module.scss";

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async () => {
  const url = "/technology.json";

  const result = await fetchData(url);

  return await result;
};

const Technology = () => {
  const technologies = useLoaderData();
  const { technologyType } = useParams();

  if (!technologyType) {
    return <Navigate to={technologies[0].name} replace />;
  }

  const currentTechnologyIndex = technologies.findIndex(
    (technology) => technology.name === technologyType
  );

  if (currentTechnologyIndex === -1) {
    throw new Error("Technology not found");
  }

  return (
    <PageBackground variant="technology">
      <div className="wrapper">
        <section className={s.section}>
          <h1 className={s.title}>
            <span className={s.num}>03</span>space launch 101
          </h1>
          <Outlet context={{ technologies, currentTechnologyIndex }} />
        </section>
      </div>
    </PageBackground>
  );
};
export default Technology;

export const Content = () => {
  return (
    <div className={s.content}>
      <div className={s.overviewWrapper}>
        <Nav />
        <Overview />
      </div>
      <div className={s.imageSliderWrapper}>
        <Picture />
      </div>
    </div>
  );
};

const Overview = () => {
  const { technologies, currentTechnologyIndex } = useOutletContext();

  const { name, description } = technologies[currentTechnologyIndex];

  return (
    <div className={s.overview}>
      <header className={s.technologyHeader}>
        <h2 className={s.technologyTitle}>{name}</h2>
        <p>the terminology...</p>
      </header>
      <p>{description}</p>
    </div>
  );
};

const Nav = () => {
  const { technologies } = useOutletContext();
  const { isSm } = useMediaQueries();

  return (
    <nav>
      <ul className={s.navList}>
        {technologies.map(({ name }, index) => (
          <li key={name}>
            <PaginationCircle
              label={index + 1}
              aria-label={name}
              to={`/technology/${name}`}
              size={isSm ? "md" : "sm"}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};

const Picture = () => {
  const { technologies, currentTechnologyIndex } = useOutletContext();
  const { isSm, isLg } = useMediaQueries();

  const images = technologies.map(({ name, images }) => ({
    alt: `picture of the ${name}`,
    urls: {
      // default: isSm
      //   ? images.landscape
      //   : isLg
      //   ? images.portrait
      //   : images.portrait,
      // default: images.portrait,
      default: isLg
        ? images.portrait
        : isSm
        ? images.landscape
        : images.portrait,
    },
  }));

  return (
    <ImageSlider
      direction={isLg ? "vertical" : "horizontal"}
      // direction="vertical"
      imageFit="cover"
      // imageFit="contain"
      images={images}
      selectedImageIndex={currentTechnologyIndex}
    />
  );
};
