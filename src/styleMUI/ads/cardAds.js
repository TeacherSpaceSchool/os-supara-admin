import { makeStyles } from '@material-ui/core/styles';
export default makeStyles({
    cardM: {
        width: 'calc(100vw - 40px)',
        marginBottom: 20
    },
    cardD: {
        width: 600,
        margin: 10
    },
    mediaM: {
        objectFit: 'cover',
        height: 'calc(100vw / 3)',
        width: 'calc(100vw - 20px)'
    },
    mediaD: {
        objectFit: 'cover',
        height: 200,
        width: 600,
        cursor: 'pointer'
    },
    inputM: {
        width: 'calc(100vw - 32px)',
    },
    inputD: {
        width: 600-32,
    },
})