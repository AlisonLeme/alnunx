import { Box } from '@mui/material';

import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

import styles from './Default.module.css'

const Default = ({ children }) => {

  return (
      <>
          <Header />
          <Box className={styles.container}>
            {children}
          </Box>
          <Footer />
      </>
  );
}

export default Default;