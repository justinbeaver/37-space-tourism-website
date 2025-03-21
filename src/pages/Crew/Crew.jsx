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
import PaginationDot from "@/components/PaginationDot/PaginationDot";
import { useMediaQueriesContext } from "@/context/mediaQueriesContext";
import fetchData from "@/utils/fetchData";
import getLongestString from "@/utils/getLongestString";

import s from "./Crew.module.scss";

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async () => {
  const url = "/crew.json";

  const result = await fetchData(url);

  return await result;
};

const headingText = "Meet your crew";

const Crew = () => {
  const members = useLoaderData();
  const { memberName } = useParams();

  if (!memberName) {
    return <Navigate to={members[0].name} replace />;
  }

  const currentMemberIndex = members.findIndex(
    (member) => member.name === memberName
  );

  if (currentMemberIndex === -1) {
    throw new Error("Member now found");
  }

  return (
    <>
      <title>{`${memberName} | ${headingText}`}</title>
      <PageBackground variant="crew">
        <PagePadding>
          <Wrapper>
            <h1 className={s.title}>
              <NumerationSpan tone="muted">02</NumerationSpan>
              {headingText}
            </h1>
            <Outlet context={{ members, currentMemberIndex }} />
          </Wrapper>
        </PagePadding>
      </PageBackground>
    </>
  );
};
export default Crew;

export const Content = () => {
  return (
    <div className={s.content}>
      <div className={s.overviewWrapper}>
        <Overview />
        <Nav />
      </div>
      <div className={s.imageSliderWrapper}>
        <Picture />
      </div>
    </div>
  );
};

const Overview = () => {
  const { members, currentMemberIndex } = useOutletContext();

  const longestBioText = getLongestString(members.map((item) => item.bio));

  const { name, role, bio } = members[currentMemberIndex];

  return (
    <div className={s.overview}>
      <header className={s.memberHeader}>
        <h2 className={s.memberTitle}>{name}</h2>
        <p>{role}</p>
      </header>
      <p className={s.memberBio}>
        <span className={s.longestBioText} aria-hidden="true">
          {longestBioText}
        </span>
        <span>{bio}</span>
      </p>
    </div>
  );
};

const Nav = () => {
  const { members } = useOutletContext();
  const { isLg } = useMediaQueriesContext();

  return (
    <nav className={s.nav}>
      <ul className={s.navList}>
        {members.map(({ name }) => (
          <li key={name}>
            <PaginationDot
              aria-label={name}
              to={`/crew/${name}`}
              size={isLg ? "md" : "sm"}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};

const Picture = () => {
  const { members, currentMemberIndex } = useOutletContext();
  const { isLg } = useMediaQueriesContext();

  const images = members.map(({ name, images }) => ({
    alt: `picture of the ${name}`,
    urls: {
      default: images.png,
      webp: images.webp,
    },
  }));

  return (
    <ImageSlider
      imageFit="contain"
      imagePosition="bottom"
      transition={isLg ? "none" : "slow"}
      images={images}
      selectedImageIndex={currentMemberIndex}
    />
  );
};
