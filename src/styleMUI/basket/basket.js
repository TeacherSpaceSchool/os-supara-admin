import { makeStyles } from '@material-ui/core/styles';
export default makeStyles({
    page: {
        margin: '10px',
        overflowX: 'auto'
    },
    row:{
        display: 'flex',
        flexDirection: 'row'
    },
    itemM:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    cancelM: {
        position: 'absolute',
        top: 0,
        right: 0,
        cursor: 'pointer'
    },
    column:{
        display: 'flex',
        flexDirection: 'column',
    },
    input: {
        width: '100%',
    },
    divImage: {
        position: 'relative',
        width: '100%'
    },
    mediaM: {
        objectFit: 'contain',
        width: '100%',
        height: 150,
    },
    mediaD: {
        objectFit: 'contain',
        width: 70,
        height: 70
    },
    nameD: {
        height: 80,
        width: 200,
        overflow: 'hidden',
        wordWrap: 'break-word',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        fontWeight: 500,
        fontFamily: 'Roboto'
    },
    nameM: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        fontWeight: 'bold',
        fontSize: '1.125rem',
        fontFamily: 'Roboto'
    },
    value: {
        marginBottom: 5,
        fontSize: '1rem',
        fontFamily: 'Roboto',
        wordBreak: 'break-all'
    },
    nameField: {
        width: 100,
        marginBottom: 5,
        fontWeight: 'bold',
        fontSize: '1rem',
        fontFamily: 'Roboto',
        color: '#A0A0A0'
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
    hrA: {
        width: '100%',
        background: 'black',
        height: 1,
        marginBottom: 5,
        marginTop: 5

    },
    bottomBasketM: {
        width: '100vw',
        borderTop: '1px #aeaeae solid',
        background: '#fff',
        height: 70,
        position: 'fixed',
        bottom: 0,
        right: 0,
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        zIndex: 10000
    },
    buyM:{
        width: 140,
        height: 44,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        fontSize: '1.125rem',
        fontFamily: 'Roboto',
        background: '#ffb300',
        marginRight: 15

    },
    allPriceM:{
        marginLeft: 10,
        width: 'calc(100vw - 100px)',
    },
    bottomBasketD: {
        width: 'calc(100vw - 300px)',
        background: '#fff',
        borderTop: '1px #aeaeae solid',
        height: 70,
        position: 'fixed',
        bottom: 0,
        right: 0,
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        zIndex: 10000
    },
    allPriceD:{
        marginLeft: 20,
        width: 'calc(100vw - 500px)',
    },
    buyD:{
        width: 140,
        height: 44,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        fontSize: '1rem',
        fontFamily: 'Roboto',
        background: '#ffb300',
        marginRight: 15

    },
    priceAll:{
        fontWeight: 'bold',
        fontSize: '1rem',
        fontFamily: 'Roboto'

    },
    priceAllText:{
        fontSize: '1rem',
        fontFamily: 'Roboto'

    },

    counterD: {
        width: 113,
        borderRadius: 5,
        overflow: 'hidden',
        border: '1px solid #e6e6e6',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    counterbtnD: {
        fontSize: '1rem',
        userSelect: 'none',
        cursor: 'pointer',
        width: 28,
        height: 28,
        fontWeight: 700,
        background: '#e6e6e6',
        color: '#212121',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    counternmbrD: {
        fontSize: '0.875rem',
        width: 57,
        height: 28,
        outline: 'none',
        border: 'none',
        textAlign: 'center',
    },


})