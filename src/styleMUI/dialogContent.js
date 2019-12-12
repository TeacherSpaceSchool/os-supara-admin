export default theme => ({
    main:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    mainLine:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    button: {
        margin: theme.spacing(1),
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    message: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        textAlign: 'center',
        color: 'indigo',
        fontWeight: 'bold',
        cursor: 'pointer',
        overflowWrap: 'break-word',
        fontSize: '1rem'
    },
    itogo: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        textAlign: 'left',
        fontSize: '1rem',
        fontWeight: 500
    },
    error_message: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        color: 'red',
        fontWeight: 'bold'
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
    fabGeo: {
        position: 'fixed',
        bottom: 70,
        right: 35
    },
    geo: {
        width: 170,
        textAlign: 'center',
        marginTop: -5,
        marginBottom: 10,
        fontSize: '0.875rem',
        fontFamily: 'Roboto',
        whiteSpace: 'pre-wrap',
        cursor: 'pointer',
        borderBottom: '1px dashed #ffb300'
    },
    counterbtn: {
        marginRight: 10,
        marginLeft: 10,
        userSelect: 'none',
        cursor: 'pointer',
        width: 16,
        height: 16,
        fontSize: '0.875rem',
        fontWeight: 700,
        background: '#e6e6e6',
        color: '#212121',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    chip: {
        margin: theme.spacing(0.5),
        cursor: 'pointer',
    },
});