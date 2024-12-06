import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import styled from "styled-components";

export const Route = createRootRoute({
  component: () => (
    <StyledDiv>
      <StyledNav>
        <StyledLink to="/advent-of-code-2024">Home</StyledLink>{" "}
        <StyledLink to="/advent-of-code-2024/day-one">Day 1</StyledLink>
        <StyledLink to="/advent-of-code-2024/day-two">Day 2</StyledLink>
        <StyledLink to="/advent-of-code-2024/day-three">Day 3</StyledLink>
        <StyledLink to="/advent-of-code-2024/day-four">Day 4</StyledLink>
        <StyledLink to="/advent-of-code-2024/day-five">Day 5</StyledLink>
      </StyledNav>
      <MainContent>
        <Outlet />
      </MainContent>
    </StyledDiv>
  ),
});

const MainContent = styled.div`
  margin: 10px;
`;

const StyledLink = styled(Link)`
  margin: 10px;
  padding: 2px;
  text-decoration: none;
`;

const StyledNav = styled.nav`
  background-color: #0e1610;
  display: flex;
  flex-direction: column;
  min-width: 200px;
  min-height: 100vh;
`;

const StyledDiv = styled.div`
  display: flex;
`;
