import { makeStyles } from '@material-ui/core/styles';
export default makeStyles({
    cardM: {
        width: 'calc(100vw - 40px)',
        marginBottom: 20
    },
    cardD: {
        width: 400,
        margin: 10
    },
    mediaO: {
        borderRadius: '30px',
        objectFit: 'cover',
        height: '60px',
        width: '60px',
        marginRight: 10
    },
    avatar: {
        borderRadius: '50px',
        objectFit: 'cover',
        height: '100px',
        width: '100px',
        margin: 10
    },
    text: {
        fontWeight: 'bold',
        fontSize: '1rem',
        fontFamily: 'Roboto'
    },
    input: {
        marginBottom: 5,
        width: 'calc(100% - 70px)',
        fontSize: '1rem',
        fontFamily: 'Roboto'
    },
    line: {
        margin: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
})