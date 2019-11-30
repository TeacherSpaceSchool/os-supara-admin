import { makeStyles } from '@material-ui/core/styles';
export default makeStyles({
    page: {
        margin: '20px'
    },
    row:{
        display: 'flex',
        flexDirection: 'row',
    },
    column:{
        display: 'flex',
        flexDirection: 'column',
    },
    media: {
        objectFit: 'cover',
        height: 300,
        width: 300,
        marginRight: 10,
        marginBottom: 10,
    },
    name: {
        marginBottom: 10,
        fontWeight: 'bold',
        fontSize: '20px',
        fontFamily: 'Roboto'
    },
    value: {
        marginBottom: 10,
        fontWeight: 'bold',
        fontSize: '16px',
        fontFamily: 'Roboto'
    },
    nameField: {
        width: 80,
        marginBottom: 10,
        fontWeight: 'bold',
        fontSize: '16px',
        fontFamily: 'Roboto',
        color: '#A0A0A0'
    },
    info: {
        color: '#455A64',
        marginBottom: 10,
        fontSize: '16px',
        fontFamily: 'Roboto',
        whiteSpace: 'pre-wrap'
    },
    inputM: {
        marginBottom: 10,
        width: 'calc(100vw - 82px)',
    },
    inputD: {
        marginBottom: 10,
        width: 'calc(100vw - 700px)'
    },
    inputDF: {
        marginBottom: 10,
        width: 'calc(100vw - 382px)'
    },

})