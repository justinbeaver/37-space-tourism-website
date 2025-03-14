import {
  Navigate,
  Outlet,
  useLoaderData,
  useOutletContext,
  useParams,
} from "react-router-dom";

import PageBackground from "@/components/PageBackground/PageBackground";
import PagePadding from "@/components/PagePadding/PagePadding";
import Wrapper from "@/components/Wrapper/Wrapper";
import NumerationSpan from "@/components/NumerationSpan/NumerationSpan";
import ImageSlider from "@/components/ImageSlider/ImageSlider";
import PaginationCircle from "@/components/PaginationCircle/PaginationCircle";
import { useMediaQueriesContext } from "@/context/mediaQueriesContext";
import fetchData from "@/utils/fetchData";
import getLongestString from "@/utils/getLongestString";

import s from "./Technology.module.scss";

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async () => {
  const url = "/technology.json";

  const result = await fetchData(url);

  return await result;
};

const headerText = "Space launch 101";

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
    <>
      <title>{`${technologyType} | ${headerText}`}</title>
      <PageBackground variant="technology">
        <PagePadding>
          <Wrapper>
            <h1 className={s.title}>
              <NumerationSpan tone="muted">03</NumerationSpan>
              {headerText}
            </h1>
            <Outlet context={{ technologies, currentTechnologyIndex }} />
          </Wrapper>
        </PagePadding>
      </PageBackground>
    </>
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
  const longestDescription = getLongestString(
    technologies.map((item) => item.description)
  );
  const { name, description } = technologies[currentTechnologyIndex];

  return (
    <div className={s.overview}>
      <header className={s.technologyHeader}>
        <h2 className={s.technologyTitle}>{name}</h2>
        <p>the terminology...</p>
      </header>
      <p className={s.technologyDescription}>
        <span className={s.longestDescription} aria-hidden="true">
          {longestDescription}
        </span>
        <span>{description}</span>
      </p>
    </div>
  );
};

const Nav = () => {
  const { technologies } = useOutletContext();
  const { isLg } = useMediaQueriesContext();

  return (
    <nav>
      <ul className={s.navList}>
        {technologies.map(({ name }, index) => (
          <li key={name}>
            <PaginationCircle
              label={index + 1}
              aria-label={name}
              to={`/technology/${name}`}
              size={isLg ? "md" : "sm"}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};

const Picture = () => {
  const { technologies, currentTechnologyIndex } = useOutletContext();
  const { isSm, isLg } = useMediaQueriesContext();

  const images = technologies.map(({ name, images }) => ({
    alt: `picture of the ${name}`,
    urls: {
      default: isLg
        ? images.portrait
        : isSm
        ? images.landscape
        : images.portrait,
    },
  }));

  return (
    <ImageSlider
      direction={isLg ? "vertical-reverse" : "horizontal-reverse"}
      imageFit="cover"
      images={images}
      selectedImageIndex={currentTechnologyIndex}
    />
  );
};
