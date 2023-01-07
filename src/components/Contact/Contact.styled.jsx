import styled from 'styled-components';

export const Button = styled.button`
  width: 100px;
  height: 30px;
  border-radius: 1px;
  background-color: #ffffff;
  border: 1px solid #999999;
  cursor: pointer;
  margin-left: 20px;
  :hover {
    background-color: #1212;
  }
`;

export const Ul = styled.ul`
  padding: 0;
`;

export const Li = styled.li`
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 17px;
`;
