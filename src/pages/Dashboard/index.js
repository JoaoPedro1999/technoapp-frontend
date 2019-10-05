import React from 'react';

import { Container, Card, Solicitation } from './styles';

export default function Dashboard() {
  return (
    <Container>
      <Card>
        <Solicitation>
          <table>
            <thead>
              <tr>
                <th>Número</th>
                <th>Funcionario</th>
                <th>Empresa</th>
                <th>Solicitante</th>
                <th>Maquina</th>
                <th>Horas Totais</th>
                <th>Preço Total</th>
                <th>Detalhes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>0001</td>
                <td>Joao</td>
                <td>Ferracini</td>
                <td>Joaozinho</td>
                <td>Maquina</td>
                <td>2h</td>
                <td>R$ 180.00</td>
                <td>Detalhes</td>
              </tr>
              <tr>
                <td>0001</td>
                <td>Joao</td>
                <td>Ferracini</td>
                <td>Joaozinho</td>
                <td>Maquina</td>
                <td>2h</td>
                <td>R$ 180.00</td>
                <td>Detalhes</td>
              </tr>
              <tr>
                <td>0001</td>
                <td>Joao</td>
                <td>Ferracini</td>
                <td>Joaozinho</td>
                <td>Maquina</td>
                <td>2h</td>
                <td>R$ 180.00</td>
                <td>Detalhes</td>
              </tr>
              <tr>
                <td>0001</td>
                <td>Joao</td>
                <td>Ferracini</td>
                <td>Joaozinho</td>
                <td>Maquina</td>
                <td>2h</td>
                <td>R$ 180.00</td>
                <td>Detalhes</td>
              </tr>
              <tr>
                <td>0001</td>
                <td>Joao</td>
                <td>Ferracini</td>
                <td>Joaozinho</td>
                <td>Maquina</td>
                <td>2h</td>
                <td>R$ 180.00</td>
                <td>Detalhes</td>
              </tr>
            </tbody>
          </table>
          <button>
            Ola
          </button>
        </Solicitation>
        <Solicitation>
          <h1>Faturamento</h1>
        </Solicitation>
        <Solicitation>
          <h1>Hello</h1>
        </Solicitation>
      </Card>
    </Container>
  );
}
