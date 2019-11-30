import { makeStyles } from '@material-ui/core/styles';
export default makeStyles({
    page: {
        margin: '20px'
    },
    row:{
        display: 'flex',
        flexDirection: 'row'
    },
    rowCenter:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    column:{
        display: 'flex',
        flexDirection: 'column',
    },
    mediaM: {
        objectFit: 'cover',
        height: 'calc(100vw - 72px)',
        width: 'calc(100vw - 72px)',
    },
    mediaD: {
        cursor: 'pointer',
        objectFit: 'cover',
        height: 300,
        width: 300,
        marginRight: 10,
        marginBottom: 10,
    },
    name: {
        marginBottom: 10,
        fontWeight: 'bold',
        fontSize: '1.25rem',
        fontFamily: 'Roboto'
    },
    share: {
        fontWeight: 'bold',
        fontSize: '1rem',
        fontFamily: 'Roboto',
        marginBottom: 10,
        color: '#C0C0C0'
    },
    price: {
        fontWeight: 'bold',
        fontFamily: 'Roboto',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        marginBottom: 10,
        fontSize: '2rem',
    },
    crossedPrice: {
        color: '#C0C0C0',
        textDecoration: 'line-through',
        fontSize: '1.25rem',
        fontFamily: 'Roboto',
        marginLeft: 10,
        marginTop: 12,
        overflow: 'hidden',
        marginBottom: 10
    },
    stockPrice: {
        color: '#ff0000',
        fontWeight: 'bold',
        fontSize: '2rem',
        fontFamily: 'Roboto',
        marginBottom: 10
    },
    counter: {
        width: 145,
        borderRadius: 5,
        overflow: 'hidden',
        border: '1px solid #e6e6e6',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    counterbtn: {
        userSelect: 'none',
        cursor: 'pointer',
        width: 34,
        height: 34,
        fontSize: 20,
        fontWeight: 700,
        background: '#e6e6e6',
        color: '#212121',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    counternmbr: {
        width: 77,
        height: 34,
        outline: 'none',
        border: 'none',
        fontSize: 20,
        textAlign: 'center',
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
    inputSwitch: {
        margin: 10,
        width: 100
    },
    buttonToggle: {
        height: 40,
        width: 40,
        position: 'absolute',
        top: 10,
        left: 10,
        cursor: 'pointer'
    },
    divImage: {
        position: 'relative'
    }
})