export default theme => ({
    drawer: {
        width: 300,
        flexShrink: 0,
        overflowX: 'hidden'
    },
    drawerPaper: {
        width: 300,
        overflowX: 'hidden'
    },
    toolbar: theme.mixins.toolbar,
});