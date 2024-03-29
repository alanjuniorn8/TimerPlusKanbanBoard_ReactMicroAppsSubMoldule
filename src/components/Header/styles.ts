import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  nav {
    display: flex;
    gap: 0.5rem;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 3rem;
    width: 3rem;

    color: ${(props) => props.theme["gray-100"]};
    border-top: 3px solid transparent;
    border-bottom: 3px solid transparent;

    &:hover {
      border-bottom: 3px solid ${(props) => props.theme["blue-500"]};
    }

    &.active {
      color: ${(props) => props.theme["blue-500"]};
    }
  }
`;
