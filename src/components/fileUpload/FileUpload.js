import { useDropzone } from 'react-dropzone';

import {
    Box,
    Typography,
    IconButton,
} from '@mui/material';


import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import styles from './fileUpload.module.css'


const FileUpload = ({ files, errors, touched, setFieldValue }) => {

    const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/*',

        onDrop: (acceptedFile) => {
            const newFiles = acceptedFile.map((file) => {
                return Object.assign(file, {
                    preview: URL.createObjectURL(file)
                });
            });

            setFieldValue('files', [
                ...files,
                ...newFiles,
            ]);
        }
    });

    const handleRemoveFile = (filePath) => {
        const newFileState = files.filter((file) => {
            return file.name !== filePath
        });

        setFieldValue('files', newFileState);
    }

    return (
        <>
            <Typography component='h6' variant='h6' color='primary' gutterBottom className={styles.title}>
                Imagens
            </Typography>
            <Typography component='div' variant='body2' gutterBottom color={errors && touched ? 'error' : 'inherit'}>
                A primeira imagem é a foto principal do seu anúncio.
            </Typography>
            {
                errors && touched
                    ? < Typography variant='body2' color='error' gutterBottom>{errors}</Typography>
                    : null
            }
            <Box className={styles.thumbsContainer}>
                <Box className={styles.dropzone} {...getRootProps()}>
                    <input name='files' {...getInputProps()} />
                    <Typography variant='body2' color={errors && touched ? 'error' : 'inherit'}>
                        Clique para adicionar ou arraste uma imagem
                    </Typography>
                </Box>

                {
                    files.map((file, index) => {
                        return (
                            <Box
                                key={file.name}
                                className={styles.thumb}
                                style={{ backgroundImage: `url(${file.preview})` }}
                            >

                                {
                                    index === 0 ?
                                        <Box className={styles.mainImage}>
                                            <Typography variant='body2'>
                                                Principal
                                            </Typography>
                                        </Box>
                                        : null
                                }

                                <Box className={styles.mask}>
                                    <IconButton onClick={() => handleRemoveFile(file.path)}>
                                        <DeleteForeverIcon fontSize='large' color='primary' />
                                    </IconButton>
                                </Box>

                            </Box>
                        )
                    })
                }
            </Box>
        </>
    )
}

export default FileUpload