import { useState } from 'react';
import { Formik } from 'formik';
import { useRouter } from 'next/dist/client/router';
import { useSession, signIn } from "next-auth/react"
import Image from 'next/image';

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
    Alert
} from '@mui/material';


import TemplateDefalut from '../../../src/templates/default/Default';
import { initialValues, validationSchema } from './formValues';
import useToasty from '../../../src/contexts/Toasty';

import styles from './signin.module.css'

const Signin = () => {
    const router = useRouter();

    // trazendo o valor que ele está injetando dentro da nossa aplicação
    const { setToasty } = useToasty();
    const { data: session } = useSession()
    const [alert, setAlert] = useState(false)

    console.log(session)

    const handleGoogleLogin = async () => {
        await signIn('google', {
            callbackUrl: 'http://localhost:3000/user/dashboard'
        })
    }

    const handleFormSubmit = async (values) => {
        await signIn('credentials', {
            email: values.email,
            password: values.password,
            redirect: false,
        })
        .then( async ({ error }) => {
            if(error) {
                setAlert(true)
                setToasty({
                    open: true,
                    severity: 'error',
                    text: 'E-mail ou senhas inválidos',
                })
            }else {
                setAlert(false)
                router.push('/user/dashboard')
            }
        })
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
                                    {
                                        alert
                                            ? (
                                                <Alert severity='error' className={styles.errorMessage}>
                                                    E-mail ou senha inválidos
                                                </Alert>
                                            )
                                            : null
                                    }
                                    <Box className={styles.box}>
                                        <Box display='flex' justifyContent='center'>
                                            <Button 
                                                variant='contained'
                                                startIcon={
                                                    <Image  alt='Login Google' src='/images/Logo_google.png' width={20} height={20}/>
                                                }
                                                onClick={handleGoogleLogin}
                                            >
                                                Entrar com Google
                                            </Button>
                                        </Box>

                                        <Box className={styles.orSeparator}>
                                            <span>ou</span>
                                        </Box>

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

                                        <Link href="/auth/signup">
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