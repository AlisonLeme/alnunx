import { Formik } from 'formik';

import {
  Box,
  Button,
  Container,
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
  Select,
  Typography,
  MenuItem,
  InputAdornment
} from '@mui/material';

import TemplateDefault from '../../../src/templates/default/Default';
import FileUpload from '../../../src/components/fileUpload/FileUpload';
import { initialValues, validationSchema } from './formValues';

import styles from './publish.module.css';

const Publish = () => {

  return (
    <TemplateDefault>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values)
        }}
      >
        {
          ({
            touched,
            values,
            errors,
            handleChange,
            handleSubmit,
            setFieldValue,
          }) => {

            return (
              <form onSubmit={handleSubmit}>
                <Container component='section' maxWidth='lg' className={styles.containerTitle}>
                  <Typography component='h1' variant='h2' align='center' gutterBottom>
                    Publicar Anúncio
                  </Typography>
                  <Typography component='h5' variant='h5' align='center'>
                    Quanto mais detalhado, maior as chances de vender!
                  </Typography>
                </Container>

                <Container maxWidth='md' className={styles.boxContainer}>
                  <Box className={styles.box}>
                    <Typography component='h6' variant='h6' color='primary' gutterBottom className={styles.title}>
                      Titulo do Anúncio
                    </Typography>
                    <FormControl fullWidth variant='outlined' error={errors.title && touched.title}>
                      <InputLabel>
                        Ex: Video game Playstation com garantia
                      </InputLabel>
                      <OutlinedInput
                        name='title'
                        value={values.title}
                        onChange={handleChange}
                        label='Ex..: Video game Playstation com garantia'
                      >
                      </OutlinedInput>
                      <FormHelperText>
                        {errors.title && touched.title ? errors.title : null}
                      </FormHelperText>
                    </FormControl>

                    <Typography component='h6' variant='h6' color='primary' gutterBottom className={styles.title}>
                      Categoria
                    </Typography>
                    <FormControl fullWidth variant='outlined' error={errors.category && touched.category}>
                      <InputLabel>
                        Escolha a categoria do seu anúncio
                      </InputLabel>
                      <Select
                        name='category'
                        value={values.category}
                        fullWidth
                        onChange={handleChange}
                        label='Escolha a categoria do seu anúncio'
                      >
                        <MenuItem value="Bebê e Crianças">Bebê e Crianças</MenuItem>
                        <MenuItem value="Agricultura">Agricultura</MenuItem>
                        <MenuItem value="Moda">Moda</MenuItem>
                        <MenuItem value="Carros, Motos e Barcos">Carros, Motos e Barcos</MenuItem>
                        <MenuItem value="Serviços">Serviços</MenuItem>
                        <MenuItem value="Lazer">Lazer</MenuItem>
                        <MenuItem value="Animais">Animais</MenuItem>
                        <MenuItem value="Móveis, Casa e Jardim">Móveis, Casa e Jardim</MenuItem>
                        <MenuItem value="Imóveis">Imóveis</MenuItem>
                        <MenuItem value="Equipamentos e Ferramentas">Equipamentos e Ferramentas</MenuItem>
                        <MenuItem value="Celulares e Tablets">Celulares e Tablets</MenuItem>
                        <MenuItem value="Esporte">Esporte</MenuItem>
                        <MenuItem value="Tecnologia">Tecnologia</MenuItem>
                        <MenuItem value="Emprego">Emprego</MenuItem>
                        <MenuItem value="Outros">Outros</MenuItem>
                      </Select>
                      <FormHelperText>
                        {errors.category && touched.category ? errors.category : null}
                      </FormHelperText>
                    </FormControl>
                  </Box>
                </Container>

                <Container maxWidth='md' className={styles.boxContainer}>
                  <Box className={styles.box}>
                   <FileUpload
                    files={values.files}
                    errors={errors.files}
                    touched={touched.files}
                    setFieldValue={setFieldValue}
                   />
                  </Box>
                </Container>

                <Container maxWidth='md' className={styles.boxContainer}>
                  <Box className={styles.box}>
                    <Typography component='h6' variant='h6' color='primary' gutterBottom className={styles.title}>
                      Descrição
                    </Typography>
                    <FormControl fullWidth variant='outlined' error={errors.description && touched.description}>
                      <InputLabel>
                        Escrevva os detalhes do que está vendendo
                      </InputLabel>
                      <OutlinedInput
                        name='description'
                        multiline
                        rows={6}
                        onChange={handleChange}
                        variant='outlined'
                        label='Escrevva os detalhes do que está vendendo'
                      />
                      <FormHelperText>
                        {errors.description && touched.description ? errors.description : null}
                      </FormHelperText>
                    </FormControl>
                  </Box>
                </Container>

                <Container maxWidth='md' className={styles.boxContainer}>
                  <Box className={styles.box}>
                    <Typography component='h6' variant='h6' color='primary' gutterBottom className={styles.title}>
                      Preço
                    </Typography>
                    <FormControl fullWidth variant='outlined' error={errors.price && touched.price}>
                      <InputLabel>
                        Ex: 20000
                      </InputLabel>
                      <OutlinedInput
                        name='price'
                        onChange={handleChange}
                        startAdornment={<InputAdornment position='start'>R$</InputAdornment>}
                        variant='outlined'
                        label='Ex..: 20000'
                      />
                      <FormHelperText>
                        {errors.price && touched.price ? errors.price : null}
                      </FormHelperText>
                    </FormControl>
                  </Box>
                </Container>

                <Container maxWidth='md' className={styles.boxContainer}>
                  <Box className={styles.box}>
                    <Typography component='h5' variant='h5' color='primary' gutterBottom align='center' className={styles.title}>
                      Dados de contato
                    </Typography>

                    <Typography component='h6' variant='h6' color='primary' gutterBottom className={styles.title}>
                      Nome
                    </Typography>
                    <FormControl fullWidth variant='outlined' error={errors.name && touched.name}>
                      <InputLabel>Digite o nome do vendedor</InputLabel>
                      <OutlinedInput
                        name='name'
                        value={values.name}
                        onChange={handleChange}
                        label='Digite o nome do vendedor'
                      />
                      <FormHelperText>
                        {errors.name && touched.name ? errors.name : null}
                      </FormHelperText>
                    </FormControl>

                    <Typography component='h6' variant='h6' color='primary' gutterBottom className={styles.title}>
                      E-mail
                    </Typography>
                    <FormControl fullWidth variant='outlined' error={errors.email && touched.email}>
                      <InputLabel>Digite o e-mail do vendedor</InputLabel>
                      <OutlinedInput
                        name='email'
                        value={values.email}
                        onChange={handleChange}
                        label='Digite o e-mail do vendedor'
                      />
                      <FormHelperText>
                        {errors.email && touched.email ? errors.email : null}
                      </FormHelperText>
                    </FormControl>

                    <Typography component='h6' variant='h6' color='primary' gutterBottom className={styles.title}>
                      Telefone
                    </Typography>
                    <FormControl fullWidth variant='outlined' error={errors.phone && touched.phone}>
                      <InputLabel>Digite o telefone do vendedor - ex: (99)99999-9999</InputLabel>
                      <OutlinedInput
                        name='phone'
                        value={values.phone}
                        onChange={handleChange}
                        label='Digite o telefone do vendedor - ex: (99)99999-9999'
                      />
                      <FormHelperText>
                        {errors.phone && touched.phone ? errors.phone : null}
                      </FormHelperText>
                    </FormControl>
                  </Box>
                </Container>

                <Container maxWidth='md'>
                  <Box textAlign='right'>
                    <Button type='submit' variant='contained' color='primary'>
                      Publicar Anúncio
                    </Button>
                  </Box>
                </Container>
              </form>
            )
          }
        }
      </Formik>
    </TemplateDefault>
  );
}

Publish.requireAuth = true

export default Publish;