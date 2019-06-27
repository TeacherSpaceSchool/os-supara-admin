import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Event from '@material-ui/icons/ListAlt';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { mainWindow } from '../App'
import * as tableActions from '../redux/actions/table'
import * as userActions from '../redux/actions/user'
import * as appActions from '../redux/actions/app'
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/UnfoldLess';
import ExpandMore from '@material-ui/icons/UnfoldMore';
import Face from '@material-ui/icons/Face';
import Info from '@material-ui/icons/Info';
import ArtTrack from '@material-ui/icons/Web';
import QuestionAnswer from '@material-ui/icons/QuestionAnswer';
import Storage from '@material-ui/icons/Storage';
import Assignment from '@material-ui/icons/Assignment';
import Timeline from '@material-ui/icons/Timeline';
import Assessment from '@material-ui/icons/Assessment';
import List1 from '@material-ui/icons/List';
import AssignmentInd from '@material-ui/icons/AssignmentInd';
import Commute from '@material-ui/icons/Commute';
import AccountBalance from '@material-ui/icons/AccountBalanceWallet';
import LocationOn from '@material-ui/icons/LocationOn';
import Receipt from '@material-ui/icons/Receipt';
import LocationCity from '@material-ui/icons/LocationCity';


const drawerWidth = 240;

const styles = theme => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    toolbar: theme.mixins.toolbar,
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    nested: {
        paddingLeft: theme.spacing.unit * 4,
    },
});

const MyDrawer = React.memo(
    (props) =>{
        const { drawer } = props.app;
        const { status } = props.user;
        const { showDrawer } = props.appActions;
        const { getData, setSelected } = props.tableActions;
        const { classes } = props;
        let [secondMenuOpen, setSecondMenuOpen] = useState({});
        let collapse = (name)=>{
            let open = !secondMenuOpen[name]
            let keys = Object.keys(secondMenuOpen)
            for(let i = 0; i<keys.length; i++){
                secondMenuOpen[keys[i]] = false
            }
            secondMenuOpen[name] = open
            setSecondMenuOpen(secondMenuOpen)

        }
        const { authenticated } = props.user;
        let variant= ''
        if(mainWindow.current.offsetWidth>800)
            variant= 'permanent'
        return (
            <div>
                <Drawer
                    variant= {variant}
                    className={classes.drawer}
                    open={drawer}
                    onClose={()=>showDrawer(false)}
                    classes={{paper: classes.drawerPaper,}}
                >
                    {
                        mainWindow.current.offsetWidth>800?
                            <div className={classes.toolbar}/>
                        :
                            null
                    }
                    {authenticated?
                        <List>
                            {
                                status.status==='active'&&['реализатор', 'организатор'].includes(status.role)?
                                    <div>
                                        <ListItem button key={'event'} onClick={()=>{props.history.push('/');showDrawer(false); getData({search: '', sort: '', page: 0, name: ''}); setSelected(-1)}}>
                                            <ListItemIcon>
                                                <Face />
                                            </ListItemIcon>
                                            <ListItemText primary={'Профиль'} />
                                        </ListItem>
                                        <Divider variant='inset'/>
                                    </div>
                                    :
                                    null
                            }
                            {
                                status.status==='active'&&['admin', 'реализатор', 'организатор', 'завсклада'].includes(status.role)?
                                    <div>
                                        <ListItem button key={'event'} onClick={()=>{collapse('информация')}}>
                                            <ListItemIcon><Info /></ListItemIcon>
                                            <ListItemText primary={'Информация'} />
                                            {secondMenuOpen['информация'] ? <ExpandLess /> : <ExpandMore />}
                                        </ListItem>
                                        <Divider variant='inset'/>
                                        <Collapse in={secondMenuOpen['информация']} timeout='auto' unmountOnExit>
                                            <List component='div' disablePadding>
                                                <ListItem className={classes.nested} button key={'event'} onClick={()=>{
                                                    if(status.role === 'admin') {
                                                        props.history.push('/');
                                                        getData({search: '', sort: '', page: 0, name: 'Блог'});
                                                    } else {
                                                        props.history.push('/blog');
                                                    }
                                                    showDrawer(false);
                                                   
                                                    setSelected(-1);
                                                }}>
                                                    <ListItemIcon><ArtTrack /></ListItemIcon>
                                                    <ListItemText primary={'Новости'} />
                                                </ListItem>
                                                <Divider variant='inset'/>
                                                <ListItem className={classes.nested} button key={'event'} onClick={()=>{
                                                    if(status.role === 'admin') {
                                                        props.history.push('/');
                                                        getData({search: '', sort: '', page: 0, name: 'FAQ'});
                                                    } else {
                                                        props.history.push('/FAQ');
                                                    }
                                                    showDrawer(false);
                                                   
                                                    setSelected(-1);
                                                }}>
                                                    <ListItemIcon><QuestionAnswer /></ListItemIcon>
                                                    <ListItemText primary={'FAQ'} />
                                                </ListItem>
                                                <Divider variant='inset'/>
                                            </List>
                                        </Collapse>
                                    </div>
                                    :
                                    null
                            }
                            {
                                status.status==='active'&&['admin', 'реализатор', 'организатор'].includes(status.role)?
                                    <div>
                                        <ListItem button key={'event'} onClick={()=>{collapse('Данные')}}>
                                            <ListItemIcon><Storage /></ListItemIcon>
                                            <ListItemText primary={'Данные'} />
                                            {secondMenuOpen['Данные'] ? <ExpandLess /> : <ExpandMore />}
                                        </ListItem>
                                        <Divider variant='inset'/>
                                        <Collapse in={secondMenuOpen['Данные']} timeout='auto' unmountOnExit>
                                            <List component='div' disablePadding>
                                                {
                                                    ['admin'].includes(status.role)?
                                                        <>
                                                        <ListItem className={classes.nested} button key={'event'} onClick={()=>{props.history.push('/');showDrawer(false); getData({search: '', sort: '', page: 0, name: 'Регион'}); setSelected(-1)}}>
                                                            <ListItemIcon><LocationCity /></ListItemIcon>
                                                            <ListItemText primary={'Регион'} />
                                                        </ListItem>
                                                        <Divider variant='inset'/>
                                                        </>
                                                        :
                                                        null
                                                }
                                                {
                                                    ['admin', 'организатор'].includes(status.role)?
                                                        <>
                                                        <ListItem className={classes.nested} button key={'event'} onClick={()=>{props.history.push('/');showDrawer(false); getData({search: '', sort: '', page: 0, name: 'Точка'}); setSelected(-1)}}>
                                                            <ListItemIcon><LocationOn /></ListItemIcon>
                                                            <ListItemText primary={'Точка'} />
                                                        </ListItem>
                                                        <Divider variant='inset'/>
                                                        </>
                                                        :
                                                        null
                                                }
                                                {
                                                    ['admin'].includes(status.role)?
                                                        <>
                                                        <ListItem className={classes.nested} button key={'event'} onClick={()=>{props.history.push('/');showDrawer(false); getData({search: '', sort: '', page: 0, name: 'Организатор'}); setSelected(-1)}}>
                                                            <ListItemIcon><AssignmentInd /></ListItemIcon>
                                                            <ListItemText primary={'Организатор'} />
                                                        </ListItem>
                                                        <Divider variant='inset'/>
                                                        </>
                                                        :
                                                        null
                                                }
                                                {
                                                    ['admin', 'организатор'].includes(status.role)?
                                                        <>
                                                        <ListItem className={classes.nested} button key={'event'} onClick={()=>{props.history.push('/');showDrawer(false); getData({search: '', sort: '', page: 0, name: 'Реализатор'}); setSelected(-1)}}>
                                                            <ListItemIcon><AssignmentInd /></ListItemIcon>
                                                            <ListItemText primary={'Реализатор'} />
                                                        </ListItem>
                                                        <Divider variant='inset'/>
                                                        </>
                                                        :
                                                        null
                                                }
                                                {
                                                    ['admin'].includes(status.role)?
                                                        <>
                                                        <ListItem className={classes.nested} button key={'event'} onClick={()=>{props.history.push('/');showDrawer(false); getData({search: '', sort: '', page: 0, name: 'Завсклада'}); setSelected(-1)}}>
                                                            <ListItemIcon><AssignmentInd /></ListItemIcon>
                                                            <ListItemText primary={'Завсклада'} />
                                                        </ListItem>
                                                        <Divider variant='inset'/>
                                                        </>
                                                        :
                                                        null
                                                }
                                                {
                                                    ['admin'].includes(status.role)?
                                                        <>
                                                        <ListItem className={classes.nested} button key={'event'} onClick={()=>{props.history.push('/');showDrawer(false); getData({search: '', sort: '', page: 0, name: 'Машина'}); setSelected(-1)}}>
                                                            <ListItemIcon><Commute /></ListItemIcon>
                                                            <ListItemText primary={'Машина'} />
                                                        </ListItem>
                                                        <Divider variant='inset'/>
                                                        </>
                                                        :
                                                        null
                                                }
                                                {
                                                    ['admin'].includes(status.role)?
                                                        <>
                                                        <ListItem className={classes.nested} button key={'event'} onClick={()=>{props.history.push('/');showDrawer(false); getData({search: '', sort: '', page: 0, name: 'Цена'}); setSelected(-1)}}>
                                                            <ListItemIcon><AccountBalance /></ListItemIcon>
                                                            <ListItemText primary={'Цена'} />
                                                        </ListItem>
                                                        <Divider variant='inset'/>
                                                        </>
                                                        :
                                                        null
                                                }
                                            </List>
                                        </Collapse>
                                    </div>
                                    :
                                    null
                            }
                            {
                                status.status==='active'&&['admin', 'реализатор', 'организатор', 'завсклада'].includes(status.role)?
                                    <div>
                                        <ListItem button key={'event'} onClick={()=>{collapse('Накладные')}}>
                                            <ListItemIcon><Assignment /></ListItemIcon>
                                            <ListItemText primary={'Накладные'} />
                                            {secondMenuOpen['Накладные'] ? <ExpandLess /> : <ExpandMore />}
                                        </ListItem>
                                        <Divider variant='inset'/>
                                        <Collapse in={secondMenuOpen['Накладные']} timeout='auto' unmountOnExit>
                                            <List component='div' disablePadding>
                                                {
                                                    ['admin', 'организатор'].includes(status.role)?
                                                        <>
                                                        <ListItem className={classes.nested} button key={'event'} onClick={()=>{props.history.push('/');showDrawer(false); getData({search: '', sort: '', page: 0, name: 'План'}); setSelected(-1)}}>
                                                            <ListItemIcon><Event /></ListItemIcon>
                                                            <ListItemText primary={'План'} />
                                                        </ListItem>
                                                        <Divider variant='inset'/>
                                                        </>
                                                        :
                                                        null
                                                }
                                                {
                                                    ['admin', 'организатор', 'завсклада'].includes(status.role)?
                                                        <>
                                                        <ListItem className={classes.nested} button key={'event'} onClick={()=>{props.history.push('/');showDrawer(false); getData({search: '', sort: '', page: 0, name: 'Накладная на вечерний возврат'}); setSelected(-1)}}>
                                                            <ListItemIcon><Receipt /></ListItemIcon>
                                                            <ListItemText primary={'Накладная на вечерний возврат'} />
                                                        </ListItem>
                                                        <Divider variant='inset'/>
                                                        </>
                                                        :
                                                        null
                                                }
                                                {
                                                    ['admin', 'организатор', 'завсклада'].includes(status.role)?
                                                        <>
                                                        <ListItem className={classes.nested} button key={'event'} onClick={()=>{props.history.push('/');showDrawer(false); getData({search: '', sort: '', page: 0, name: 'Накладная на пустую тару'}); setSelected(-1)}}>
                                                            <ListItemIcon><Receipt /></ListItemIcon>
                                                            <ListItemText primary={'Накладная на пустую тару'} />
                                                        </ListItem>
                                                        <Divider variant='inset'/>
                                                        </>
                                                        :
                                                        null
                                                }
                                                {
                                                    ['admin', 'организатор', 'завсклада'].includes(status.role)?
                                                        <>
                                                        <ListItem className={classes.nested} button key={'event'} onClick={()=>{props.history.push('/');showDrawer(false); getData({search: '', sort: '', page: 0, name: 'Накладная склад №1'}); setSelected(-1)}}>
                                                            <ListItemIcon><Receipt /></ListItemIcon>
                                                            <ListItemText primary={'Накладная склад №1'} />
                                                        </ListItem>
                                                        <Divider variant='inset'/>
                                                        </>
                                                        :
                                                        null
                                                }
                                                {
                                                    ['admin', 'организатор', 'завсклада'].includes(status.role)?
                                                        <>
                                                        <ListItem className={classes.nested} button key={'event'} onClick={()=>{props.history.push('/');showDrawer(false); getData({search: '', sort: '', page: 0, name: 'Накладная склад №2'}); setSelected(-1)}}>
                                                            <ListItemIcon><Receipt /></ListItemIcon>
                                                            <ListItemText primary={'Накладная склад №2'} />
                                                        </ListItem>
                                                        <Divider variant='inset'/>
                                                        </>
                                                        :
                                                        null
                                                }
                                                {
                                                    ['admin', 'организатор', 'завсклада'].includes(status.role)?
                                                        <>
                                                        <ListItem className={classes.nested} button key={'event'} onClick={()=>{props.history.push('/');showDrawer(false); getData({search: '', sort: '', page: 0, name: 'Отчет организатора'}); setSelected(-1)}}>
                                                            <ListItemIcon><Receipt /></ListItemIcon>
                                                            <ListItemText primary={'Отчет организатора'} />
                                                        </ListItem>
                                                        <Divider variant='inset'/>
                                                        </>
                                                        :
                                                        null
                                                }
                                                {
                                                    ['admin', 'организатор', 'завсклада'].includes(status.role)?
                                                        <>
                                                        <ListItem className={classes.nested} button key={'event'} onClick={()=>{props.history.push('/');showDrawer(false); getData({search: '', sort: '', page: 0, name: 'Отчет реализатора'}); setSelected(-1)}}>
                                                            <ListItemIcon><Receipt /></ListItemIcon>
                                                            <ListItemText primary={'Отчет реализатора'} />
                                                        </ListItem>
                                                        <Divider variant='inset'/>
                                                        </>
                                                        :
                                                        null
                                                }
                                            </List>
                                        </Collapse>
                                    </div>
                                    :
                                    null
                            }
                            {
                                status.status==='active'&&['admin', 'реализатор', 'организатор'].includes(status.role)?
                                    <div>
                                        <ListItem button key={'event'} onClick={()=>{collapse('Статистика')}}>
                                            <ListItemIcon><Assessment /></ListItemIcon>
                                            <ListItemText primary={'Статистика'} />
                                            {secondMenuOpen['Статистика'] ? <ExpandLess /> : <ExpandMore />}
                                        </ListItem>
                                        <Divider variant='inset'/>
                                        <Collapse in={secondMenuOpen['Статистика']} timeout='auto' unmountOnExit>
                                            <List component='div' disablePadding>
                                                {
                                                    ['admin'].includes(status.role)?
                                                        <>
                                                        <ListItem className={classes.nested} button key={'event'} onClick={()=>{props.history.push('/statistic');showDrawer(false);setSelected(-1)}}>
                                                            <ListItemIcon><Timeline /></ListItemIcon>
                                                            <ListItemText primary={'Статистика'} />
                                                        </ListItem>
                                                        <Divider variant='inset'/>
                                                        </>
                                                        :
                                                        null
                                                }
                                                {
                                                    ['admin', 'организатор'].includes(status.role)?
                                                        <>
                                                        <ListItem className={classes.nested} button key={'event'} onClick={()=>{props.history.push('/ro');showDrawer(false);setSelected(-1)}}>
                                                            <ListItemIcon><List1 /></ListItemIcon>
                                                            <ListItemText primary={'Рейтинг регионов'} />
                                                        </ListItem>
                                                        <Divider variant='inset'/>
                                                        </>
                                                        :
                                                        null
                                                }
                                                {
                                                    ['admin', 'организатор', 'реализатор'].includes(status.role)?
                                                        <>
                                                        <ListItem className={classes.nested} button key={'event'} onClick={()=>{props.history.push('/rr');showDrawer(false);setSelected(-1)}}>
                                                            <ListItemIcon><List1 /></ListItemIcon>
                                                            <ListItemText primary={'Рейтинг точек'} />
                                                        </ListItem>
                                                        <Divider variant='inset'/>
                                                        </>
                                                        :
                                                        null
                                                }
                                            </List>
                                        </Collapse>
                                    </div>
                                    :
                                    null
                            }
                        </List>
                        :
                        null
                    }
                </Drawer>
            </div>
        );
    }
)

function mapStateToProps (state) {
    return {
        app: state.app,
        user: state.user
    }
}

function mapDispatchToProps(dispatch) {
    return {
        appActions: bindActionCreators(appActions, dispatch),
        tableActions: bindActionCreators(tableActions, dispatch),
        userActions: bindActionCreators(userActions, dispatch),
    }
}

MyDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default  connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(MyDrawer));