import React, { useState, useRef } from 'react';
import { useOnClickOutside } from '../../hooks/menu';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Burger from '../Burger';
import Menu from '../Menu';

import logo from '../../assets/logo.svg';

import { Container, Content, Profile } from './styles';

export default function Header() {
  const node = useRef(); 
  useOnClickOutside(node, () => setOpen(false));
  const [open, setOpen] = useState(false);
  const profile = useSelector(state => state.auth.user);
  let image = '';

  if (profile.avatar) {
    image = profile.avatar.url;
  }

  return (
    <Container ref={node}>
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} />
      
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <Link to="/dashboard">TechnoApp</Link>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img
              src={
                image || 'https://api.adorable.io/avatars/50/abott@adorable.png'
              }
              alt="Diego Fernandes"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
