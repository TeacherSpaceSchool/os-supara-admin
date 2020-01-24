import { makeStyles } from '@material-ui/core/styles';
export default makeStyles({
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
        width: '100%',
        maxWidth: 150,
        margin: 5
    },


})