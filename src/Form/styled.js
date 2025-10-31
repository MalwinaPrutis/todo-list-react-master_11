import styled from "styled-components";

export const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    grid-template-columns: 1fr;
  }
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.borderGray};
`;

export const Button = styled.button`
  padding: 10px;
  background: ${({ theme }) => theme.colors.teal};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  transition: 0.3s;

  &:hover {
    background: ${({ theme }) => theme.colors.darkTeal};
    transform: scale(1.1);
  }

  &:active {
    background: ${({ theme }) => theme.colors.tealActive};
  }
`;