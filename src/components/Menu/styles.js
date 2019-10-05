import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #18448F;
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  
  @media (max-width:415px) {
    width: 100%;
  }

  a {
    display: flex;
    align-items: center;
    font-size: 1.6em;
    padding-top: 20px;
    font-weight: bold;
    color: #fff;
    text-decoration: none;
    transition: color 0.3s linear;
    margin: 10px;

    @media (max-width: 415px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #fff;
    }
  }
`;