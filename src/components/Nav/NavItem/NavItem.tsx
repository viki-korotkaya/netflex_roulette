import React, { SyntheticEvent } from "react";
import { useAppDispatch } from "hooks/hooks";
import { StyledLi, StyledLink } from "components/Nav/NavItem/NavItem.styled";
import { moviesAction } from "features/movies/moviesSelector";
import { NavLink, useSearchParams } from "react-router-dom";

interface NavItemProps {
  navItem: string;
  index: number;
}

const NavItem: React.FC<NavItemProps> = (props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get("filter") || "all";
  const dispatch = useAppDispatch();

  const handleFiltering = (e: SyntheticEvent) => {
    e.preventDefault();
    searchParams.set("filter", props.navItem === "all" ? "" : props.navItem);
    setSearchParams(searchParams);
    dispatch(moviesAction.resetState());
  };

  let activeStyle = {
    textDecoration: "underline",
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
