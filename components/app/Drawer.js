import React, {useState} from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import drawerStyle from '../../src/styleMUI/drawer'
import * as appActions from '../../redux/actions/app'
import * as userActions from '../../redux/actions/user'
import Drawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as mini_dialogActions from '../../redux/actions/mini_dialog'
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore';
import UnfoldLessIcon from '@material-ui/icons/UnfoldLess';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Badge from '@material-ui/core/Badge';
import Collapse from '@material-ui/core/Collapse';

const MyDrawer = React.memo((props) => {
    const { classes, unread } = props
    const { drawer, isMobileApp } = props.app;
    const { profile, authenticated } = props.user;
    const { showDrawer } = props.appActions;
    let variant = isMobileApp?'temporary' : 'permanent';
    const open = isMobileApp?drawer:true;
    const router = useRouter();
    let [uncover, setUncover] = useState({'Объекты': false, 'Инструменты': false, 'Документы': false, 'Статистика': false});
    const uncoverItem = (item)=>{
        if(uncover[item])
            uncover = {'Объекты': false, 'Инструменты': false, 'Документы': false, 'Статистика': false}
        else {
            uncover = {'Объекты': false, 'Инструменты': false, 'Документы': false, 'Статистика': false}
            uncover[item] = true
        }
        setUncover({...uncover})
    };
    return (
        <Drawer
            disableSwipeToOpen = {true}
            disableBackdropTransition = {true}
            onOpen={()=>showDrawer(true)}
            disableDiscovery={true}
            variant= {variant}
            className={classes.drawer}
            open={open}
            onClose={()=>showDrawer(false)}
            classes={{paper: classes.drawerPaper,}}
        >
            {
                isMobileApp?
                    null
                    :
                    <div className={classes.toolbar}/>
            }
            {
                authenticated?
                    <List>
                        <Divider />
                        <ListItem style={{background: (router.pathname.includes('expensereport')||router.pathname.includes('waybill')||router.pathname.includes('application')||router.pathname.includes('cashconsumable'))&&router.pathname!=='/routes'?'#f5f5f5':'#ffffff'}} button onClick={()=>{uncoverItem('Документы')}}>
                            <ListItemText primary='Документы' />
                            <ListItemIcon>{uncover['Документы']?<UnfoldMoreIcon color='inherit'/>:<UnfoldLessIcon color='inherit'/>}</ListItemIcon>
                            <Badge color='secondary' variant='dot' invisible={!unread.applications&&!unread.cashConsumables&&!unread.waybills&&!unread.expenseReports}/>
                        </ListItem>
                        <Divider/>
                        <Collapse in={uncover['Документы']} timeout='auto' unmountOnExit>
                            <List component='div' disablePadding>
                                <Link href={'/applications'}>
                                    <ListItem style={{marginLeft: 16, background:router.pathname.includes('application')&&!router.pathname.includes('itemsfromapplications')?'#f5f5f5':'#ffffff'}} button onClick={()=>{showDrawer(false)}}>
                                        <Badge color='secondary' variant='dot' invisible={!unread.applications}/>
                                        <ListItemText primary={'Заявки'} />
                                    </ListItem>
                                </Link>
                                <Divider/>
                                {
                                    ['admin', 'менеджер', 'кассир', 'бухгалтерия', 'снабженец'].includes(profile.role)?
                                        <>
                                        <Link href={'/cashconsumables'}>
                                            <ListItem style={{marginLeft: 16, background:router.pathname.includes('cashconsumable')?'#f5f5f5':'#ffffff'}} button onClick={()=>{showDrawer(false)}}>
                                                <Badge color='secondary' variant='dot' invisible={!unread.cashConsumables}/>
                                                <ListItemText primary={'Кассовые расходники'} />
                                            </ListItem>
                                        </Link>
                                        <Divider/>
                                        </>
                                        :
                                        null
                                }
                                {
                                    ['снабженец'].includes(profile.role)?
                                        <>
                                        <Link href={'/itemsfromapplications'}>
                                            <ListItem style={{marginLeft: 16, background:router.pathname.includes('itemsfromapplications')?'#f5f5f5':'#ffffff'}} button onClick={()=>{showDrawer(false)}}>
                                                <ListItemText primary={'Лист закупки'} />
                                            </ListItem>
                                        </Link>
                                        <Divider/>
                                        </>
                                        :
                                        null
                                }
                                {
                                    ['admin', 'менеджер', 'специалист', 'снабженец'].includes(profile.role)?
                                        <>
                                        <Link href={'/waybills'}>
                                            <ListItem style={{marginLeft: 16, background:router.pathname.includes('waybill')?'#f5f5f5':'#ffffff'}} button onClick={()=>{showDrawer(false)}}>
                                                <Badge color='secondary' variant='dot' invisible={!unread.waybills}/>
                                                <ListItemText primary={'Накладные'} />
                                            </ListItem>
                                        </Link>
                                        <Divider/>
                                        </>
                                        :
                                        null
                                }
                                {
                                    ['admin', 'менеджер', 'начальник отдела', 'снабженец'].includes(profile.role)?
                                        <>
                                        <Link href={'/expensereports'}>
                                            <ListItem style={{marginLeft: 16, background:router.pathname.includes('expensereport')?'#f5f5f5':'#ffffff'}} button onClick={()=>{showDrawer(false)}}>
                                                <Badge color='secondary' variant='dot' invisible={!unread.expenseReports}/>
                                                <ListItemText primary={'Авансовые отчеты'} />
                                            </ListItem>
                                        </Link>
                                        <Divider/>
                                        </>
                                        :
                                        null
                                }
                            </List>
                        </Collapse>
                        {
                            ['admin', 'менеджер', 'специалист', 'снабженец'].includes(profile.role)?
                                <>
                                <ListItem style={{background: ['/categorys', '/divisions', '/units', '/items', '/routes', '/users', '/roles'].includes(router.pathname)?'#f5f5f5':'#ffffff'}} button onClick={()=>{uncoverItem('Объекты')}}>
                                    <ListItemText primary='Объекты' />
                                    <ListItemIcon>{uncover['Объекты']?<UnfoldMoreIcon color='inherit'/>:<UnfoldLessIcon color='inherit'/>}</ListItemIcon>
                                </ListItem>
                                <Divider/>
                                </>
                                :
                                null
                        }
                        <Collapse in={uncover['Объекты']} timeout='auto' unmountOnExit>
                            <List component='div' disablePadding>
                                {
                                    ['admin', 'менеджер', 'специалист', 'снабженец'].includes(profile.role)?
                                        <>
                                        <Link href={'/units'}>
                                            <ListItem style={{marginLeft: 16, background:router.pathname==='/units'?'#f5f5f5':'#ffffff'}} button onClick={()=>{showDrawer(false)}}>
                                                <ListItemText primary={'Единицы измерения'} />
                                            </ListItem>
                                        </Link>
                                        <Divider/>
                                        </>
                                        :
                                        null
                                }
                                {
                                    ['admin', 'менеджер', 'специалист', 'снабженец'].includes(profile.role)?
                                        <>
                                        <Link href={'/categorys'}>
                                            <ListItem style={{marginLeft: 16, background:router.pathname==='/categorys'?'#f5f5f5':'#ffffff'}} button onClick={()=>{showDrawer(false)}}>
                                                <ListItemText primary={'Категории'} />
                                            </ListItem>
                                        </Link>
                                        <Divider/>
                                        </>
                                        :
                                        null
                                }
                                {
                                    ['admin', 'менеджер'].includes(profile.role)?
                                        <>
                                        <Link href={'/routes'}>
                                            <ListItem style={{marginLeft: 16, background:router.pathname==='/routes'?'#f5f5f5':'#ffffff'}} button onClick={()=>{showDrawer(false)}}>
                                                <ListItemText primary={'Маршруты'} />
                                            </ListItem>
                                        </Link>
                                        <Divider/>
                                        </>
                                        :
                                        null
                                }
                                {
                                    ['admin', 'менеджер'].includes(profile.role)?
                                        <>
                                        <Link href={'/divisions'}>
                                            <ListItem style={{marginLeft: 16, background:router.pathname==='/divisions'?'#f5f5f5':'#ffffff'}} button onClick={()=>{showDrawer(false)}}>
                                                <ListItemText primary={'Подразделения'} />
                                            </ListItem>
                                        </Link>
                                        <Divider/>
                                        </>
                                        :
                                        null
                                }
                                {
                                    ['admin', 'менеджер', 'специалист', 'снабженец'].includes(profile.role)?
                                        <>
                                        <Link href={'/subdivisions'}>
                                            <ListItem style={{marginLeft: 16, background:router.pathname==='/subdivisions'?'#f5f5f5':'#ffffff'}} button onClick={()=>{showDrawer(false)}}>
                                                <ListItemText primary={'Под-подразделения'} />
                                            </ListItem>
                                        </Link>
                                        <Divider/>
                                        </>
                                        :
                                        null
                                }
                                <Link href={'/users'}>
                                    <ListItem style={{marginLeft: 16, background:router.pathname==='/users'?'#f5f5f5':'#ffffff'}} button onClick={()=>{showDrawer(false)}}>
                                        <ListItemText primary={'Пользователи'} />
                                    </ListItem>
                                </Link>
                                <Divider/>
                                {
                                    ['admin', 'менеджер'].includes(profile.role)?
                                        <>
                                        <Link href={'/roles'}>
                                            <ListItem style={{marginLeft: 16, background:router.pathname==='/roles'?'#f5f5f5':'#ffffff'}} button onClick={()=>{showDrawer(false)}}>
                                                <ListItemText primary={'Роли'} />
                                            </ListItem>
                                        </Link>
                                        <Divider/>
                                        </>
                                        :
                                        null
                                }
                                {
                                    ['admin', 'менеджер', 'специалист', 'снабженец'].includes(profile.role)?
                                        <>
                                        <Link href={'/items'}>
                                            <ListItem style={{marginLeft: 16, background:router.pathname==='/items'?'#f5f5f5':'#ffffff'}} button onClick={()=>{showDrawer(false)}}>
                                                <ListItemText primary={'Товары'} />
                                            </ListItem>
                                        </Link>
                                        <Divider/>
                                        </>
                                        :
                                        null
                                }
                            </List>
                        </Collapse>
                        <ListItem style={{background: ['/faqs', '/errors', '/trash', '/setting'].includes(router.pathname)?'#f5f5f5':'#ffffff'}} button onClick={()=>{uncoverItem('Инструменты')}}>
                            <ListItemText primary='Инструменты' />
                            <ListItemIcon>{uncover['Инструменты']?<UnfoldMoreIcon color='inherit'/>:<UnfoldLessIcon color='inherit'/>}</ListItemIcon>
                        </ListItem>
                        <Divider/>
                        <Collapse in={uncover['Инструменты']} timeout='auto' unmountOnExit>
                            <List component='div' disablePadding>
                                <Link href={'/faqs'}>
                                    <ListItem style={{marginLeft: 16, background:router.pathname==='/faqs'?'#f5f5f5':'#ffffff'}} button onClick={()=>{showDrawer(false)}}>
                                        <ListItemText primary={'Инструкции'} />
                                    </ListItem>
                                </Link>
                                <Divider/>
                                {
                                    ['admin', 'менеджер'].includes(profile.role)?
                                        <>
                                        <Link href={'/unloadingitem'}>
                                            <ListItem style={{marginLeft: 16, background:router.pathname==='/unloadingitem'?'#f5f5f5':'#ffffff'}} button onClick={()=>{showDrawer(false)}}>
                                                <ListItemText primary={'Загрузка товаров'} />
                                            </ListItem>
                                        </Link>
                                        <Divider/>
                                        </>
                                        :
                                        null
                                }
                                {
                                    ['admin', 'менеджер'].includes(profile.role)?
                                        <>
                                        <Link href={'/trash'}>
                                            <ListItem style={{marginLeft: 16, background:router.pathname==='/trash'?'#f5f5f5':'#ffffff'}} button onClick={()=>{showDrawer(false)}}>
                                                <ListItemText primary={'Корзина'} />
                                            </ListItem>
                                        </Link>
                                        <Divider/>
                                        </>
                                        :
                                        null
                                }
                                {
                                    ['admin', 'менеджер'].includes(profile.role)?
                                        <>
                                        <Link href={'/setting'}>
                                            <ListItem style={{marginLeft: 16, background:router.pathname==='/setting'?'#f5f5f5':'#ffffff'}} button onClick={()=>{showDrawer(false)}}>
                                                <ListItemText primary={'Настройки'} />
                                            </ListItem>
                                        </Link>
                                        <Divider/>
                                        </>
                                        :
                                        null
                                }
                                {
                                    ['admin', 'менеджер'].includes(profile.role)?
                                        <>
                                        <Link href={'/errors'}>
                                            <ListItem style={{marginLeft: 16, background:router.pathname==='/errors'?'#f5f5f5':'#ffffff'}} button onClick={()=>{showDrawer(false)}}>
                                                <ListItemText primary={'Сбои'} />
                                            </ListItem>
                                        </Link>
                                        <Divider/>
                                        </>
                                        :
                                        null
                                }
                            </List>
                        </Collapse>
                        {
                            ['admin', 'менеджер', 'снабженец'].includes(profile.role)?
                                <>
                                <ListItem style={{background: ['/balances', '/statisticsupplier'].includes(router.pathname)?'#f5f5f5':'#ffffff'}} button onClick={()=>{uncoverItem('Статистика')}}>
                                    <ListItemText primary='Статистика' />
                                    <ListItemIcon>{uncover['Статистика']?<UnfoldMoreIcon color='inherit'/>:<UnfoldLessIcon color='inherit'/>}</ListItemIcon>
                                    <Badge color='secondary' variant='dot' invisible={!unread.balances}/>
                                </ListItem>
                                <Divider/>
                                </>
                            :null
                        }
                        <Collapse in={uncover['Статистика']} timeout='auto' unmountOnExit>
                            <List component='div' disablePadding>
                                <Link href={'/balances'}>
                                    <ListItem style={{marginLeft: 16, background:router.pathname==='/balances'?'#f5f5f5':'#ffffff'}} button onClick={()=>{showDrawer(false)}}>
                                        <Badge color='secondary' variant='dot' invisible={!unread.balances}/>
                                        <ListItemText primary={'Баланс'} />
                                    </ListItem>
                                </Link>
                                <Divider/>
                                <Link href={'/statisticsupplier'}>
                                    <ListItem style={{marginLeft: 16, background:router.pathname==='/statisticsupplier'?'#f5f5f5':'#ffffff'}} button onClick={()=>{showDrawer(false)}}>
                                        <Badge color='secondary' variant='dot' invisible={!unread.balances}/>
                                        <ListItemText primary={'Статистика снабженцев'} />
                                    </ListItem>
                                </Link>
                                <Divider/>
                            </List>
                        </Collapse>
                    </List>
                    :
                    null
            }
        </Drawer>
    )
})

function mapStateToProps (state) {
    return {
        app: state.app,
        user: state.user,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        appActions: bindActionCreators(appActions, dispatch),
        userActions: bindActionCreators(userActions, dispatch),
        mini_dialogActions: bindActionCreators(mini_dialogActions, dispatch),
    }
}

MyDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(drawerStyle)(MyDrawer))