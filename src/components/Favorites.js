import styled from "styled-components";

export const StyledFavorite = styled.div`
  flex: 1;
  width: 100%;
  padding: 16px;
  overflow: hidden;
  h2 {
    font-size: 16px;
    margin-bottom: 16px;
    text-transform: capitalize;
  }
  img {
    width: 100%;
    height: 100%;
    max-width: 140px;
    border-radius: 50%;
    font-weight: 500;
  }
  section {
    width: 100%;
    padding: 0;
    overflow: hidden;
    padding-top: 16px;
    div {
      width: calc(100vw - 16px * 4);
      display: grid;
      grid-gap: 16px;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      grid-auto-flow: column;
      grid-auto-columns: minmax(200px, 1fr);
      align-items: center;
      a {
        text-align: center;
        span {
            padding-top: 8px;
            display: block;
            padding-right: 2px;
            color: ${({ theme }) => theme.textColorBase || "#222222"};
        }
      }
    }
  }
`;