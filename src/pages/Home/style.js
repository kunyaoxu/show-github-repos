import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const Header = styled.div`
  height: 40px;
  background-color: #cccccc;
`;

export const List = styled.div`
  flex: 1;
  overflow-y: auto;
`;

export const Item = styled.div`
  height: 200px;
  width: 100%;
`;
