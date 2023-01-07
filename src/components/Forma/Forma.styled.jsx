import styled from 'styled-components';
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid;
  padding: 20px;
  border-radius: 10px;
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: 500;
`;
export const FormInput = styled.input`
  margin: 10px 0;
  width: 200px;
  height: 20px;
`;
export const Button = styled.button`
  width: 150px;
  height: 30px;
  border-radius: 5px;
  background-color: #ffffff;
  border: 1px solid #140e0e;
  cursor: pointer;
  :hover {
    background-color: #f2eded;
  }
`;
