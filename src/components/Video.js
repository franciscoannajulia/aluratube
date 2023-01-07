import styled from "styled-components";

export const StyledPlayer = styled.div`
  background-color: red;//${({ theme }) => theme.backgroundLevel1};
  align-items: center;
  width: 80%;
  //margin-right: 20px;
  padding: 24px;
  height: 90%;
  iframe{
    width: 640px;
    height: 360px;
  }
`;