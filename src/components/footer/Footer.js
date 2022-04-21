import { useState } from "react";
import Link from "next/link";

import {
  Box,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";

import styles from './Footer.module.css'

const Footer = () => {

  const [isLogged, setIsLogged] = useState(false); // TODO

  return (
    <Container maxWidth="lg" component="footer" className={styles.footer}>
      <Grid container spacing={3}>
        <Grid item xs={6} sm={3}>
          <Box textAlign="center">
            <a href="https://alisonletos.github.io/SiteAlisonLetos/" target="_blank" rel="noreferrer">
              <IconButton>
                <Typography variant="subtitle1" color="textSecondary">
                  Ajuda e contato
                </Typography>
              </IconButton>
            </a>
          </Box>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Box textAlign="center">
            <a href="https://alisonletos.github.io/SiteAlisonLetos/" target="_blank" rel="noreferrer">
              <IconButton>
                <Typography variant="subtitle1" color="textSecondary">
                  Dicas de segurança
                </Typography>
              </IconButton>
            </a>
          </Box>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Box textAlign="center">
            <Link href={ isLogged ? "/user/publish" : "/user/signin" }>
              <IconButton>
                <Typography variant="subtitle1" color="textSecondary">
                  Anúnciar e vender
                </Typography>
              </IconButton>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Box textAlign="center">
            <a href="https://alisonletos.github.io/SiteAlisonLetos/" target="_blank" rel="noreferrer">
              <IconButton>
                <Typography variant="subtitle1" color="textSecondary">
                  Site do desenvolvedor
                </Typography>   
              </IconButton>
            </a>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Footer;