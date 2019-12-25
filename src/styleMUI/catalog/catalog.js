import { makeStyles } from '@material-ui/core/styles';
export default makeStyles({
    page: {
        overflowX: 'auto'
    },
    row:{
        display: 'flex',
        flexDirection: 'row'
    },
    column:{
        display: 'flex',
        flexDirection: 'column',
    },
    input: {
        width: '100%',
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
    line: {
        display: 'flex',
        alignItems: 'start',
        justifyContent: 'start',
        flexDirection: 'row',
    },
    media: {
        width: 100,
        height: 100,
        objectFit: 'contain',
        marginRight: 10
    },
    counter: {
        width: 127,
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
        width: 25,
        height: 25,
        fontSize: '1rem',
        fontWeight: 700,
        background: '#e6e6e6',
        color: '#212121',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    counternmbr: {
        width: 77,
        height: 25,
        outline: 'none',
        border: 'none',
        fontSize: '1rem',
        textAlign: 'center',
    },
    addPackaging: {
        marginTop: 10,
        textAlign: 'center',
        fontSize: '0.875rem',
        fontFamily: 'Roboto',
        whiteSpace: 'pre-wrap',
        cursor: 'pointer',
        borderBottom: '1px dashed #ffb300',
        userSelect: 'none',
        width: 140
    },

})