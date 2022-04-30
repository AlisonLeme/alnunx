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

import styles from './signup.module.css'

const Signup = () => {
    const router = useRouter();

    // trazendo o valor que ele está injetando dentro da nossa aplicação
    const { setToasty } = useToasty();

    const handleFormSubmit = async (values) => {
        const response = await axios.post('/api/users', values);

        if (response.data.success) {
            setToasty({
                open: true,
                severity: 'success',
                text: 'Cadastro relizado com sucesso!',
            })

            //redirecionar o usuario para a página de login
            router.push('/user/dashboard');
        }
    }

    return (
        <TemplateDefalut>
            <Container maxWidth="md">
                <Typography component="h1" variant="h2" align="center" color="textPrimary">
                    Crie sua conta
                </Typography>
                <Typography component="h2" variant="h6" align="center" color="textPrimary">
                    E anuncie para todo o Brasil
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
                                        <FormControl className={styles.formControl} error={errors.name && touched.name} fullWidth>
                                            <InputLabel>Nome</InputLabel>
                                            <Input
                                                name="name"
                                                value={values.name}
                                                onChange={handleChange}
                                            />
                                            <FormHelperText>
                                                {errors.name && touched.name ? errors.name : null}
                                            </FormHelperText>
                                        </FormControl>

                                        <FormControl className={styles.formControl} error={errors.email && touched.email} fullWidth>
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

                                        <FormControl className={styles.formControl} error={errors.password && touched.password} fullWidth>
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

                                        <FormControl className={styles.formControl} error={errors.passwordConf && touched.passwordConf} fullWidth>
                                            <InputLabel>Confirmação de senha</InputLabel>
                                            <Input
                                                name="passwordConf"
                                                type="password"
                                                value={values.passwordConf}
                                                onChange={handleChange}
                                            />
                                            <FormHelperText>
                                                {errors.passwordConf && touched.passwordConf ? errors.passwordConf : null}
                                            </FormHelperText>
                                        </FormControl>

                                        {
                                            isSubmitting
                                                ? (
                                                    <CircularProgress className={styles.loading} />
                                                )
                                                : (
                                                    <Button type="submit" variant="contained" color="primary" fullWidth className={styles.button}>
                                                        Cadastrar
                                                    </Button>
                                                )
                                        }

                                        <Link href="/auth/signin" passHref>
                                            <Typography align="left" color="textPrimary">
                                                Já tem uma conta? Entre aqui
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

export default Signup