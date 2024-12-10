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
        <StyledLink to="/advent-of-code-2024/day-six">Day 6</StyledLink>
        <StyledLink to="/advent-of-code-2024/day-seven">Day 7</StyledLink>
        <StyledLink to="/advent-of-code-2024/day-eight">Day 8</StyledLink>
        <StyledLink to="/advent-of-code-2024/day-nine">Day 9</StyledLink>
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
  margin: 5px 10px;
  padding: 2px;
  text-decoration: none;
  font-size: larger;
`;

const StyledNav = styled.nav`
  background-color: #080c09;
  display: flex;
  flex-direction: column;
  min-width: 200px;
  min-height: 100vh;
`;

const StyledDiv = styled.div`
  display: flex;
`;
