import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90%;
`;

export const Card = styled.div`
  background-color: rgba(255, 255, 255, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const Solicitation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255);
  height: 45%;
  width: 95%;
  margin: 5px;
  table {
    width: 90%;
    padding-botton: 10px;
    th {
      font-size: 20px;
      padding: 5px;
      border-right: 1px solid #000;
      border-botton: 1px solid #000;
      align-self: center;
    }
    td {
      font-size: 20px;
      padding: 5px;
      border-right: 1px solid #000;
      float: center;

    }
  }
`;
