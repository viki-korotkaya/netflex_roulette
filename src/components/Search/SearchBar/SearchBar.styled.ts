import styled from "styled-components";
import Input from "components/Input/Input";

export const StyledFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
`;

export const SearchInput = styled.input`
  flex: 1;
  margin-right: 15px;
  background: rgba(50, 50, 50, 0.8);
  border-radius: 4px;
  opacity: 0.7;
  padding: 0 20px;
  color: #ffffff;
`;
