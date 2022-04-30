import {
    Snackbar,
} from '@mui/material'

import MuiAlert from '@mui/material/Alert';


// open = true ou false (abrir ou fechar)
// text = texto dentro  do toasty
// severity = cor do toasty
// onClose = se caso eu quiser passar uma função de call back pra ele, para que quando ele feche faça alguma coisa.

const Toasty = ({ open, text, severity, onClose=null}) => {

    const handleClose = (event, reason) => {
        if (reason === 'clickaway')
        {
            return
        }

        if(onClose)
        {
            onClose();
        }
    }

    return  (
        <Snackbar
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            open={open}
            autoHideDuration={5000}
            onClose={handleClose}
        >
            <MuiAlert elevation={6} variant="filled" severity={severity}>
                {text}
            </MuiAlert>
        </Snackbar>
    )
}

export default Toasty;