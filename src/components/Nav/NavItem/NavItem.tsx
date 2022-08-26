import React, { SyntheticEvent } from "react";
import { useAppDispatch } from "hooks/hooks";
import { StyledLi, StyledLink } from "components/Nav/NavItem/NavItem.styled";
import { moviesAction } from "features/movies/moviesSelector";
import { useRouter } from "next/router";

interface NavItemProps {
  navItem: string;
  index: number;
}

const NavItem: React.FC<NavItemProps> = (props) => {
  const router = useRouter();
  const currentFilter = router.query.filter || "all";
  const dispatch = useAppDispatch();

  const handleFiltering = (e: SyntheticEvent) => {
    e.preventDefault();
    router.replace({
      query: {
        ...router.query,
        filter: props.navItem === "all" ? "" : props.navItem,
      },
    });
  };

  return (
    <StyledLi index={props.index} onClick={(e) => handleFiltering(e)}>
      <StyledLink className={currentFilter === props.navItem ? "active" : ""}>
        {props.navItem}
      </StyledLink>
    </StyledLi>
  );
};

export default NavItem;
