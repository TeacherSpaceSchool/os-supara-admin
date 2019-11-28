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
    media: {
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
        fontSize: '16px',
        fontFamily: 'Roboto'
    },
    inputM: {
        marginBottom: 5,
        width: 'calc(100vw - 82px)',
        fontSize: '16px',
        fontFamily: 'Roboto'
    },
    inputD: {
        marginBottom: 5,
        width: 400-82,
        fontSize: '16px',
        fontFamily: 'Roboto'
    },
    line: {
        margin: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    nameField: {
        marginBottom: 10,
        fontWeight: 'bold',
        fontSize: '0.875rem',
        fontFamily: 'Roboto',
        color: '#A0A0A0'
    },
    value: {
        marginBottom: 10,
        fontWeight: '500',
        fontSize: '0.875rem',
        fontFamily: 'Roboto'
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'baseline'
    },
})