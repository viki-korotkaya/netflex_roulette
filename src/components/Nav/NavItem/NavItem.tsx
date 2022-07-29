import React, { SyntheticEvent } from "react";
import { useAppDispatch } from "hooks/hooks";
import { StyledLi, StyledA } from "components/Nav/NavItem/NavItem.styled";
import { moviesAction } from "features/movies/moviesSelector";

interface NavItemProps {
  navItem: string;
  index: number;
  className?: string
}

const NavItem: React.FC<NavItemProps> = (props) => {
  const dispatch = useAppDispatch();

  const handleFiltering = (e: SyntheticEvent) => {
    e.preventDefault();
    dispatch(moviesAction.setFilterParams(props.navItem === 'all' ? '' : props.navItem))
  }

  return (
    <StyledLi index={props.index} onClick={(e) =>handleFiltering(e)}>
      <StyledA href="#" className={props.className}>{props.navItem}</StyledA>
    </StyledLi>
  );
};

export default NavItem;
