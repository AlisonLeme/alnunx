import { useState } from 'react';
import Link from 'next/link';
import { useSession, signOut } from "next-auth/react"

import { 
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  Divider,
} from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import styles from './Header.module.css'

const Header = () => {

    const [anchorUserMenu, setAnchorUserMenu] = useState(false);
    const { data: session } = useSession()

    const openUserMenu = Boolean(anchorUserMenu);

    return (
      <>
        <AppBar position='static' elevation={3}>
          <Container maxWidth='lg'>
            <Toolbar className={styles.toobar}>
              <Link href='/' passHref>
                <IconButton>
                  <Typography color='textPrimary' variant='h5' className={styles.title}>
                    Alnunx
                  </Typography>
                </IconButton>
              </Link>
              <Link href='/search' passHref>
                <Button variant='outlined' startIcon={<SearchIcon />} color='btn'>
                  Buscar
                </Button>
              </Link>
              <Link isLogged href={ session ? '/user/publish' : '/auth/signin' } passHref>
                <Button variant='outlined' color='btn'>
                  Anunciar e vender
                </Button>
              </Link>
              {
                session
                  ? (
                      <IconButton onClick={(e) => setAnchorUserMenu(e.currentTarget)}>
                        {
                          session.user.image
                            ? <Avatar src={session.user.image} className={styles.avatar}/>
                            : <AccountCircleIcon className={styles.avatar}/>
                        }
                        <Typography variant='body2' color='textPrimary' className={styles.userName}>
                          {session.user.name}
                        </Typography>
                      </IconButton>
                  ) : null
              }

              <Menu
                // ancorando o e menu do botão
                anchorEl={anchorUserMenu}
                open={openUserMenu}
                onClose={() => setAnchorUserMenu(null)}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
              >
                <Link href={ session ? '/user/dashboard' : '/auth/signin' } passHref>
                  <MenuItem>Meus anúncios</MenuItem>
                </Link>
                <Link href={ session ? '/user/publish' : '/auth/signin' } passHref>
                  <MenuItem>Publicar novo anúncio</MenuItem>
                </Link>
                <Divider className={styles.divider}/>
                <MenuItem onClick={() => signOut({
                  callbackUrl: 'http://localhost:3000/'
                })}>Sair</MenuItem>
              </Menu>
            </Toolbar>
          </Container>
      </AppBar>
      </>
    );
}

export default Header;