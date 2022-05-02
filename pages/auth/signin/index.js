import { Formik } from 'formik';
import axios from 'axios';
import { useRouter } from 'next/dist/client/router';

import {
    Box,
    Container,
    Typography,
    FormControl,
    Input,
    FormHelperText,
    InputLabel,
    Button,
    Link,
    CircularProgress,
} from '@mui/material';


import TemplateDefalut from '../../../src/templates/default/Default';
import { initialValues, validationSchema } from './formValues';
import useToasty from '../../../src/contexts/Toasty';

import styles from './signin.module.css'

const Signin = () => {
    const router = useRouter();

    // trazendo o valor que ele está injetando dentro da nossa aplicação
    const { setToasty } = useToasty();

    const handleFormSubmit = async (values) => {
    }

    return (
        <TemplateDefalut>
            <Container maxWidth="md">
                <Typography component="h1" variant="h2" align="center" color="textPrimary">
                    Entre na sua conta
                </Typography>
            </Container>

            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleFormSubmit}
            >
                {
                    ({
                        touched,
                        values,
                        errors,
                        handleChange,
                        handleSubmit,
                        isSubmitting, // se for true ele está enviando o formulário, se for false não está
                    }) => {

                        return (
                            <form onSubmit={handleSubmit}>
                                <Container maxWidth="md">
                                    <Box className={styles.box}>

                                        <FormControl variant='standard' className={styles.formControl} error={errors.email && touched.email} fullWidth>
                                            <InputLabel>E-mail</InputLabel>
                                            <Input
                                                name="email"
                                                type="email"
                                                value={values.email}
                                                onChange={handleChange}
                                            />
                                            <FormHelperText>
                                                {errors.email && touched.email ? errors.email : null}
                                            </FormHelperText>
                                        </FormControl>

                                        <FormControl variant='standard' className={styles.formControl} error={errors.password && touched.password} fullWidth>
                                            <InputLabel>Senha</InputLabel>
                                            <Input
                                                name="password"
                                                type="password"
                                                value={values.password}
                                                onChange={handleChange}
                                            />
                                            <FormHelperText>
                                                {errors.password && touched.password ? errors.password : null}
                                            </FormHelperText>
                                        </FormControl>

                                        {
                                            isSubmitting
                                                ? (
                                                    <CircularProgress className={styles.loading} />
                                                )
                                                : (
                                                    <Button type="submit" variant="contained" color="primary" fullWidth className={styles.button}>
                                                        Entrar
                                                    </Button>
                                                )
                                        }

                                        <Link href="/auth/signup" passHref>
                                            <Typography align="left" color="textPrimary">
                                                Não tem uma conta? Crie aqui
                                            </Typography>
                                        </Link>
                                    </Box>
                                </Container>
                            </form>
                        )
                    }
                }
            </Formik>
        </TemplateDefalut>
    )
}

export default Signin