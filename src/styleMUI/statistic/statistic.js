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
        width: 'calc(50% - 10px)',
        margin: 5
    },

})