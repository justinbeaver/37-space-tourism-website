import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  Outlet,
  useParams,
  Navigate,
  useOutletContext,
} from "react-router-dom";

import NavItem from "@/components/NavItem/NavItem";
import PageBackground from "@/components/PageBackground/PageBackground";
import ImageSlider from "@/components/ImageSlider/ImageSlider";

import s from "./Destination.module.scss";

const data = [
  {
    name: "Moon",
    images: {
      png: "/src/assets/destination/image-moon.png",
      webp: "/src/assets/destination/image-moon.webp",
    },
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 km",
    travel: "3 days",
  },
  {
    name: "Mars",
    images: {
      png: "/src/assets/destination/image-mars.png",
      webp: "/src/assets/destination/image-mars.webp",
    },
    description:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: "225 mil. km",
    travel: "9 months",
  },
  {
    name: "Europa",
    images: {
      png: "/src/assets/destination/image-europa.png",
      webp: "/src/assets/destination/image-europa.webp",
    },
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 mil. km",
    travel: "3 years",
  },
  {
    name: "Titan",
    images: {
      png: "/src/assets/destination/image-titan.png",
      webp: "/src/assets/destination/image-titan.webp",
    },
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 bil. km",
    travel: "7 years",
  },
];

const Destination = () => {
  const [destinations, setDestinations] = useState(data);

  const { planetName } = useParams();

  if (!planetName) {
    // const firstPlanet = destinations[0]?.name || null;

    return <Navigate to={destinations[0].name} replace />;
  }

  return (
    <PageBackground variant="destination">
      <div className="wrapper">
        <section>
          <h1>pick your destination</h1>
          <Outlet context={{ destinations }} />
        </section>
      </div>
    </PageBackground>
  );
};
export default Destination;

export const Content = () => {
  const { planetName } = useParams();

  const { destinations } = useOutletContext();
  // console.log(destinations, "content");

  const currentPlanetIndex = destinations.findIndex(
    (destination) => destination.name === planetName
  );

  return (
    <div className={s.content}>
      <div>
        <ImageSlider
          images={destinations.map((item) => ({
            alt: `picture of the ${item.name}`,
            urls: { png: item.images.png, webp: item.images.webp },
          }))}
          selectedImageIndex={currentPlanetIndex}
        />
      </div>
      <div>
        <Nav
          navItems={destinations.map((item) => ({
            label: item.name,
            slug: item.name,
          }))}
        />
        <Overview planet={destinations[currentPlanetIndex]} />
      </div>
    </div>
  );
};

const Nav = ({ navItems }) => {
  return (
    <nav className={s.nav}>
      <ul className={s.navList}>
        {navItems.map(({ label, slug }) => (
          <li key={slug}>
            <NavItem to={`/destination/${slug}`}>{label}</NavItem>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const Overview = ({ planet }) => {
  const { name, description, distance, travel } = planet;

  return (
    <div>
      <div>
        <h2 className={s.planetTitle}>{name}</h2>
        <p className={s.planetDescription}>{description}</p>
      </div>
      <div className={s.meta}>
        <div>
          <h3 className={s.metaTitle}>avg. distance</h3>
          <p className={s.metaDescription}>{distance}</p>
        </div>
        <div>
          <h3 className={s.metaTitle}>est. travel time</h3>
          <p className={s.metaDescription}>{travel}</p>
        </div>
      </div>
    </div>
  );
};
