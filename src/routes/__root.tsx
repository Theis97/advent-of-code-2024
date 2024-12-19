import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import styled from "styled-components";

export const Route = createRootRoute({
  component: () => {
    let links: JSX.Element[] = [];
    for (let i = 1; i <= 19; i++) {
      links.push(
        <StyledLink to={`/advent-of-code-2024/day-${i}`} key={i}>
          Day {i}
        </StyledLink>
      );
    }

    return (
      <StyledDiv>
        <StyledNav>
          <StyledLink activeOptions={{ exact: true }} to="/advent-of-code-2024">
            Home
          </StyledLink>
          {links}
        </StyledNav>
        <MainContent>
          <Outlet />
        </MainContent>
      </StyledDiv>
    );
  },
});

const MainContent = styled.div`
  margin: 10px;
`;

const StyledLink = styled(Link)`
  padding: 5px 10px;
  color: white;
  text-decoration: none;
  font-size: larger;

  &:hover {
    background-color: #330000;
  }

  &.active {
    background-color: #660000;
  }
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
