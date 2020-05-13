import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
    page: {
        paddingTop: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        position: 'relative',
        flexWrap: 'wrap'
    },
    populars: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        overflowX: 'scroll',
        flex: 'none',
        '&::-webkit-scrollbar': {
            display: 'none',
        },
    },
    allAdss: {
        position: 'absolute',
        height: 36,
        bottom: 0,
        left: 0,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        overflowX: 'scroll',
        flex: 'none',
        background: 'white',
        '&::-webkit-scrollbar': {
            display: 'none',
        },
    },
    ads: {
        fontSize: '0.875rem',
        margin: 8,
        fontWeight: 'bold',
    },
    fab: {
        position: 'fixed!important',
        bottom: '20px',
        right: '20px'
    },
})