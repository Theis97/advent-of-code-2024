import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import styled from "styled-components";

export const Route = createRootRoute({
  component: () => (
    <StyledDiv>
      <StyledNav>
        <StyledLink to="/advent-of-code-2024">Home</StyledLink>{" "}
        <StyledLink to="/advent-of-code-2024/day-one">Day 1</StyledLink>
        <StyledLink to="/advent-of-code-2024/day-two">Day 2</StyledLink>
      </StyledNav>
      <MainContent>
        <Outlet />
      </MainContent>
    </StyledDiv>
  ),
});

const MainContent = styled.div`
  margin: 5px;
`;

const StyledLink = styled(Link)`
  margin: 10px;
  padding: 2px;
  text-decoration: none;
`;

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  min-width: 200px;
`;

const StyledDiv = styled.div`
  display: flex;
`;
