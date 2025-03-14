import { useMemo } from "react";
import {
  Outlet,
  Navigate,
  useParams,
  useLoaderData,
  useOutletContext,
} from "react-router-dom";

import PageBackground from "@/components/PageBackground/PageBackground";
import PagePadding from "@/components/PagePadding/PagePadding";
import Wrapper from "@/components/Wrapper/Wrapper";
import NumerationSpan from "@/components/NumerationSpan/NumerationSpan";
import NavItem from "@/components/NavItem/NavItem";
import ImageSlider from "@/components/ImageSlider/ImageSlider";
import DecorationLine from "@/components/DecorationLine/DecorationLine";
import { useMediaQueriesContext } from "@/context/mediaQueriesContext";
import fetchData from "@/utils/fetchData";
import getLongestString from "@/utils/getLongestString";

import s from "./Destination.module.scss";

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async () => {
  const url = "/destinations.json";

  const result = await fetchData(url);

  return await result;
};

const headerText = "Pick your destination";

const Destination = () => {
  const destinations = useLoaderData();
  const { planetName } = useParams();

  if (!planetName) {
    return <Navigate to={destinations[0].name} replace />;
  }

  const currentPlanetIndex = destinations.findIndex(
    (destination) => destination.name === planetName
  );

  if (currentPlanetIndex === -1) {
    throw new Error("Planet now found");
  }

  return (
    <>
      <title>{`${planetName} | ${headerText}`}</title>
      <PageBackground variant="destination">
        <PagePadding>
          <Wrapper>
            <h1 className={s.title}>
              <NumerationSpan tone="muted">01</NumerationSpan>
              {headerText}
            </h1>
            <Outlet context={{ destinations, currentPlanetIndex }} />
          </Wrapper>
        </PagePadding>
      </PageBackground>
    </>
  );
};
export default Destination;

export const Content = () => {
  return (
    <div className={s.content}>
      <div className={s.imageSliderWrapper}>
        <Picture />
      </div>
      <div className={s.overviewWrapper}>
        <Nav />
        <Overview />
      </div>
    </div>
  );
};

const Picture = () => {
  const { isLg } = useMediaQueriesContext();
  const { destinations, currentPlanetIndex } = useOutletContext();

  const images = destinations.map(({ name, images }) => ({
    alt: `picture of the ${name}`,
    urls: {
      default: images.png,
      webp: images.webp,
    },
  }));

  return (
    <ImageSlider
      transition={isLg ? "none" : "slow"}
      images={images}
      selectedImageIndex={currentPlanetIndex}
    />
  );
};

const Nav = () => {
  const { destinations } = useOutletContext();

  return (
    <nav>
      <ul className={s.navList}>
        {destinations.map(({ name }) => (
          <li key={name}>
            <NavItem to={`/destination/${name}`}>
              <span>{name}</span>
            </NavItem>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const Overview = () => {
  const { destinations, currentPlanetIndex } = useOutletContext();

  const longestDescription = useMemo(
    () => getLongestString(destinations.map((item) => item.description)),
    [destinations]
  );

  const { name, description, distance, travel } =
    destinations[currentPlanetIndex];

  const meta = [
    { title: "avg. distance", description: distance },
    { title: "est. travel time", description: travel },
  ];

  return (
    <div className={s.overview}>
      <div className={s.overviewBody}>
        <h2 className={s.planetTitle}>{name}</h2>
        <p className={s.planetDescription}>
          <span className={s.longestDescription} aria-hidden="true">
            {longestDescription}
          </span>
          <span>{description}</span>
        </p>
      </div>
      <DecorationLine aria-hidden={true} />
      <section className={s.meta}>
        {meta.map(({ title, description }) => (
          <div key={title} className={s.metaItem}>
            <h3 className={s.metaTitle}>{title}</h3>
            <p className={s.metaDescription}>{description}</p>
          </div>
        ))}
      </section>
    </div>
  );
};
