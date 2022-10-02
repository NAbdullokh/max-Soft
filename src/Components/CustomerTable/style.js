import styled from "styled-components";

export const Container = styled.div`
  margin: 16px;
  margin-top: 0px;
  padding: 24px;
  background-color: ${(props) => (props.darkMode ? `#1f2a37` : "white")};
  border-radius: 16px;
  min-width: 330px;
  width: 380px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1);
  @media (max-width: 900px) {
    width: calc(100% - 32px);
  }
  @media (max-width: 576px) {
    width: calc(100% - 32px);
  }
`;

Container.Wrap = styled.div``;

Container.Title = styled.h1`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  margin: 0;
  color: ${(props) => (props.darkMode ? `white` : "#111827")};
`;
