import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const List = styled.div`
  flex: 1;
  overflow-y: auto;
`;

export const Item = styled.div`
  height: 200px;
  margin: 12px;
  background-color: white;
  border: 1px solid #e1e4e8;
  border-radius: 6px;
  overflow: hidden;
  padding: 16px;
`;
