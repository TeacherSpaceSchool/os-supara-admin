import { makeStyles } from '@material-ui/core/styles';
export default makeStyles({
    listInvoices: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        width: '100%'
    },
    page: {
        overflowX: 'auto',
        marginBottom: 8,
    },
    row:{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        flexWrap: 'wrap'
    },
    column:{
        display: 'flex',
        flexDirection: 'column',
    },
    input: {
        width: 'calc(50% - 10px)',
        margin: 5
    },
    rowStatic: {
        margin: 5
    },
    fab: {
        position: 'fixed!important',
        bottom: '20px',
        right: '20px'
    },

})