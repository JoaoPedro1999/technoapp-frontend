import styled from 'styled-components';

export const StyledBurger = styled.button`
  position: absolute;
  top: 3%;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-itens: center;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  @media (max-width:415px) {
    top: 2.3%;
  }
  
  &:focus {
    outline: none;
  }
  
  div {
    width: 2rem;
    height: 0.25rem;
    background: #fff;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }
`;

