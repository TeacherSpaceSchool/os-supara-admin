import { makeStyles } from '@material-ui/core/styles';
export default makeStyles({
    cardM: {
        width: 'calc(100vw - 40px)',
        marginBottom: 20,
        position: 'relative'
    },
    cardD: {
        width: 400,
        margin: 10,
        position: 'relative'
    },
    data: {
        marginTop: 15,
        width: '100%',
        fontWeight: '500',
        fontSize: '0.875rem',
        fontFamily: 'Roboto',
        wordBreak: 'break-all'
    },
    date: {
        position: 'absolute',
        top: 10,
        right: 10,
    },
})