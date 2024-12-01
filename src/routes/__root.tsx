import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import styled from "styled-components";

export const Route = createRootRoute({
  component: () => (
    <StyledDiv>
      <StyledNav>
        <StyledLink to="/advent-of-code-2024">Home</StyledLink>{" "}
        <StyledLink to="/advent-of-code-2024/day-one">Day 1</StyledLink>
        <TanStackRouterDevtools />
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
  margin-right: 10px;
  padding: 2px;
  text-decoration: none;
`;

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
`;

const StyledDiv = styled.div`
  display: flex;
`;
