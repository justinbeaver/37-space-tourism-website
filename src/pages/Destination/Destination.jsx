import { useState } from "react";

import NavItem from "@/components/NavItem/NavItem";
import PageBackground from "@/components/PageBackground/PageBackground";

import s from "./Destination.module.scss";

const destinations = [
  {
    name: "Moon",
    images: {
      png: "src/assets/destination/image-moon.png",
      webp: "src/assets/destination/image-moon.webp",
    },
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 km",
    travel: "3 days",
  },
  {
    name: "Mars",
    images: {
      png: "src/assets/destination/image-mars.png",
      webp: "src/assets/destination/image-mars.webp",
    },
    description:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: "225 mil. km",
    travel: "9 months",
  },
  {
    name: "Europa",
    images: {
      png: "src/assets/destination/image-europa.png",
      webp: "src/assets/destination/image-europa.webp",
    },
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 mil. km",
    travel: "3 years",
  },
  {
    name: "Titan",
    images: {
      png: "src/assets/destination/image-titan.png",
      webp: "src/assets/destination/image-titan.webp",
    },
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 bil. km",
    travel: "7 years",
  },
];

const Destination = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const destination = destinations[activeIndex];

  return (
    <PageBackground variant="destination">
      <div className="wrapper">
        <section>
          <h1>pick your destination</h1>
          <div className={s.content}>
            <picture>
              <source srcSet={destination.images.webp} type="image/webp" />
              <source srcSet={destination.images.png} type="image/png" />
              <img
                src={destination.images.png}
                alt={`picture of the ${destination.name}`}
              />
            </picture>
            <div className={s.overview}>
              <nav className={s.nav}>
                <ul className={s.navList}>
                  {destinations.map(({ name }, index) => (
                    <li key={index}>
                      <NavItem
                        isActive={activeIndex === index}
                        onClick={() => setActiveIndex(index)}
                      >
                        {name}
                      </NavItem>
                    </li>
                  ))}
                </ul>
              </nav>
              <div>
                <h2 className={s.planetTitle}>{destination.name}</h2>
                <p className={s.planetDescription}>{destination.description}</p>
              </div>
              <div className={s.meta}>
                <div>
                  <h3 className={s.metaTitle}>avg. distance</h3>
                  <p className={s.metaDescription}>{destination.distance}</p>
                </div>
                <div>
                  <h3 className={s.metaTitle}>est. travel time</h3>
                  <p className={s.metaDescription}>{destination.travel}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageBackground>
  );
};
export default Destination;
