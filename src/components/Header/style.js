import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 16px;
  font-size: 14px;
  line-height: 1.5;
  background-color: #24292e;
  color: white;
`;

export const InputWrapper = styled.form`
  display: flex;
  border: 1px solid #444d56;
  background-color: #24292e;
  height: 28px;
  width: 100%;
  max-width: 272px;
  border-radius: 6px;
  overflow: hidden;
`;

export const Input = styled.input`
  width: 100%;
  flex: 1;
  outline: 0;
  border: 0;
  background-color: inherit;
  color: white;
  height: 100%;
  font-size: 14px;
  padding: 0 16px;
  &:focus {
    background-color: white;
    color: black;
  }
`;

export const Search = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 1;
  padding: 0 8px;
  background-color: inherit;
  border: 0;
  outline: 0;
`;
