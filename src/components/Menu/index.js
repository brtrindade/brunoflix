import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/img/logo.png'
import { MenuWrapper, LogoImage } from './styles';
import Button from '../Button';

export default function Menu() {
  return (
    <MenuWrapper>
      <Link to="/">
        <LogoImage className="Logo" src={Logo} alt="Logo BrunoFlix" />
      </Link>
      <Button as={Link} to="/cadastro/video">
        Novo vídeo
      </Button>
    </MenuWrapper>
  )
}
