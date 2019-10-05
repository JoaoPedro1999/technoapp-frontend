import React from 'react';
import { StyledMenu } from './styles';
import { MdSettings } from 'react-icons/md'
import { MdReportProblem } from 'react-icons/md'

export default function Menu({ open }) {
  return (
    <StyledMenu open={open}>
      <a href="/">
        <span role="img" aria-label="about us">&#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;</span>
        Dashboard
      </a>
      <a href="/">
        <MdReportProblem/> 
        Solicitações
      </a>
      <a href="/">
        <span role="img" aria-label="about us">&#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;</span>
        Serviços
      </a>
      <a href="/">
        <MdSettings/> 
        Configurações
      </a>
    </StyledMenu>
  )
}
