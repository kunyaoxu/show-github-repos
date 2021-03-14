import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-y: auto;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 200px;
  max-height: 200px;
  max-width: 640px;
  background-color: white;
  border: 1px solid #e1e4e8;
  border-radius: 6px;
  overflow: hidden;
  padding: 16px;
  margin: 12px 12px;
`;

export const Title = styled.div`
  font-size: 20px;
  line-height: 1.5;
  margin-bottom: 8px;
`;

export const Description = styled.div`
  max-height: 80px;
  padding: 8px 0;
  overflow: hidden;
`;

export const Language = styled.div`
  margin-top: auto;
`;

export const RepoLink = styled.a`
  align-self: flex-end;
  color: #0366d6;
`;
