import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import styled from "styled-components";

export const Route = createRootRoute({
  component: () => (
    <StyledDiv>
      <StyledNav>
        <StyledLink to="/advent-of-code-2024">Home</StyledLink>{" "}
        <StyledLink to="/advent-of-code-2024/day-1">Day 1</StyledLink>
        <StyledLink to="/advent-of-code-2024/day-2">Day 2</StyledLink>
        <StyledLink to="/advent-of-code-2024/day-3">Day 3</StyledLink>
        <StyledLink to="/advent-of-code-2024/day-4">Day 4</StyledLink>
        <StyledLink to="/advent-of-code-2024/day-5">Day 5</StyledLink>
        <StyledLink to="/advent-of-code-2024/day-6">Day 6</StyledLink>
        <StyledLink to="/advent-of-code-2024/day-7">Day 7</StyledLink>
        <StyledLink to="/advent-of-code-2024/day-8">Day 8</StyledLink>
        <StyledLink to="/advent-of-code-2024/day-9">Day 9</StyledLink>
        <StyledLink to="/advent-of-code-2024/day-10">Day 10</StyledLink>
        <StyledLink to="/advent-of-code-2024/day-11">Day 11</StyledLink>
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
