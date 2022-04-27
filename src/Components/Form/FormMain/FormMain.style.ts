import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 50px;
  position: absolute;
  left: 100px;

  @media (min-width: 370px) and (max-width: 480px) {
    left: 20px;
  }

  @media (min-width: 480px) and (max-width: 768px) {
    left: 50px;
  }
`;

export const Line = styled.hr`
  width: 990px;
  height: 0px;
  left: 90px;
  border: 1px solid #e5e4e4;

  @media (min-width: 370px) and (max-width: 480px) {
    width: 300px;
  }

  @media (min-width: 480px) and (max-width: 768px) {
    width: 400px;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 650px;
  }
`;
