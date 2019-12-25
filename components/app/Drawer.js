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
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ReorderIcon from '@material-ui/icons/ViewList';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import CopyrightIcon from '@material-ui/icons/Loyalty';
import InfoIcon from '@material-ui/icons/Info';
import GroupIcon from '@material-ui/icons/Group';
import ReceiptIcon from '@material-ui/icons/Receipt';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import ArtTrackIcon from '@material-ui/icons/ArtTrack';
import MoneyIcon from '@material-ui/icons/Money';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore';
import UnfoldLessIcon from '@material-ui/icons/UnfoldLess';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as mini_dialogActions from '../../redux/actions/mini_dialog'


const MyDrawer = React.memo((props) => {
    const { classes } = props
    const { drawer, isMobileApp } = props.app;
    const { profile, authenticated } = props.user;
    const { showDrawer } = props.appActions;
    let variant = isMobileApp?'temporary' : 'permanent';
    const open = isMobileApp?drawer:true;
    const router = useRouter();
    const [uncoverBonus, setUncoverBonus] = useState(null);
    return (
        <Drawer
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
            <Divider />
            <List>
                {
                    ['экспедитор', 'организация', 'менеджер', 'агент'].includes(profile.role)?
                        <Link href={profile.role==='агент'?'/catalog':'/items/[id]'} as={profile.role==='агент'?'/catalog':'/items/all'}>
                            <ListItem style={{background:
                                router.pathname===('/')
                                ||
                                router.pathname.includes('subcategory')
                                ||
                                router.pathname.includes('item')
                                ||
                                router.pathname.includes('catalog')?
                                    '#f5f5f5':'#ffffff'}} button onClick={()=>{showDrawer(false)}}>
                                <ListItemIcon><ReorderIcon color='inherit'/></ListItemIcon>
                                <ListItemText primary={profile.role!=='агент'?'Товары':'Каталог'} />
                            </ListItem>
                        </Link>
                        :
                        <Link href='/'>
                            <ListItem style={{background: router.pathname===('/')
                            ||
                            router.pathname.includes('subcategory')
                            ||
                            router.pathname.includes('item')?'#f5f5f5':'#ffffff'}} button onClick={()=>{showDrawer(false)}}>
                                <ListItemIcon><ReorderIcon color='inherit'/></ListItemIcon>
                                <ListItemText primary='Товары' />
                            </ListItem>
                        </Link>
                }
                <Divider/>
                {
                    ['admin', 'client', 'организация', 'менеджер', 'агент'].includes(profile.role)||!authenticated?
                        <>
                        <ListItem style={{background: router.pathname.includes('bonus')?'#f5f5f5':'#ffffff'}} button onClick={()=>{setUncoverBonus(!uncoverBonus)}}>
                            <ListItemIcon><MoneyIcon color='inherit'/></ListItemIcon>
                            <ListItemText primary='Бонусы' />
                            <ListItemIcon>{uncoverBonus?<UnfoldMoreIcon color='inherit'/>:<UnfoldLessIcon color='inherit'/>}</ListItemIcon>
                        </ListItem>
                        <Divider/>
                        {
                            uncoverBonus?
                                <>
                                <Link href='/bonus'>
                                    <ListItem style={{marginLeft: 16, background: router.pathname==='/bonus'?'#f5f5f5':'#ffffff'}} button onClick={()=>{showDrawer(false)}}>
                                        <ListItemText primary={['организация', 'менеджер', 'агент'].includes(profile.role)?'Бонусы компании':'Бонусы компаний'}/>
                                    </ListItem>
                                </Link>
                                <Divider/>
                                {
                                    ['admin', 'client', 'организация', 'менеджер', 'агент'].includes(profile.role)?
                                        <>
                                        <Link href='/bonusclient'>
                                            <ListItem style={{marginLeft: 16, background: router.pathname==='/bonusclient'?'#f5f5f5':'#ffffff'}} button onClick={()=>{showDrawer(false)}}>
                                                <ListItemText primary={['admin', 'организация', 'менеджер', 'агент'].includes(profile.role)?'Бонусы клиентов':'Мои бонусы'}/>
                                            </ListItem>
                                        </Link>
                                        <Divider/>
                                        </>
                                        :null
                                }
                                </>
                                :
                                null
                        }
                        </>
                        :null
                }
                {
                    ['admin', 'client'].includes(profile.role)||!authenticated?
                        <>
                        <Link href='/ads'>
                            <ListItem style={{background: router.pathname==='/ads'?'#f5f5f5':'#ffffff'}} button onClick={()=>{setUncoverBonus(false);showDrawer(false)}}>
                                <ListItemIcon><WhatshotIcon color='inherit'/></ListItemIcon>
                                <ListItemText primary='Акции' />
                            </ListItem>
                        </Link>
                        <Divider/>
                        </>
                        :null
                }
                {
                    ['admin', 'организация', 'менеджер', 'агент'].includes(profile.role)?
                        <>
                        <Link href={'/clients'}>
                            <ListItem style={{background: router.pathname.includes('client')&&router.pathname!=='/bonusclient'?'#f5f5f5':'#ffffff'}} button onClick={()=>{setUncoverBonus(false);showDrawer(false)}}>
                                <ListItemIcon><GroupIcon color='inherit'/></ListItemIcon>
                                <ListItemText primary='Клиенты' />
                            </ListItem>
                        </Link>
                        <Divider/>
                        </>
                        :null
                }
                {
                    ['client', 'admin', 'организация', 'менеджер', 'агент'].includes(profile.role)?
                        <>
                        <Link href='/orders'>
                            <ListItem style={{background: router.pathname==='/orders'?'#f5f5f5':'#ffffff'}} button onClick={()=>{setUncoverBonus(false);showDrawer(false)}}>
                                <ListItemIcon><ReceiptIcon color='inherit'/></ListItemIcon>
                                <ListItemText primary='Заказы' />
                            </ListItem>
                        </Link>
                        <Divider/>
                        </>
                        :null
                }
                {
                    ['admin', 'организация', 'менеджер', 'экспедитор'].includes(profile.role)?
                        <>
                        <Link href='/routes'>
                            <ListItem style={{background: router.pathname==='/routes'?'#f5f5f5':'#ffffff'}} button onClick={()=>{setUncoverBonus(false);showDrawer(false)}}>
                                <ListItemIcon><FormatListNumberedIcon color='inherit'/></ListItemIcon>
                                <ListItemText primary='Маршрутные листы' />
                            </ListItem>
                        </Link>
                        <Divider/>
                        </>
                        :null
                }
                {
                    ['экспедитор', 'организация', 'менеджер', 'агент'].includes(profile.role)?
                        <Link href='/organization/[id]' as={`/organization/${profile.organization}`}>
                            <ListItem style={{background: router.pathname.includes('organization')?'#f5f5f5':'#ffffff'}} button onClick={()=>{setUncoverBonus(false);showDrawer(false)}}>
                                <ListItemIcon><LocationCityIcon color='inherit'/></ListItemIcon>
                                <ListItemText primary='Организация' />
                            </ListItem>
                        </Link>
                        :
                        <Link href='/organizations'>
                            <ListItem style={{background: router.pathname.includes('organization')?'#f5f5f5':'#ffffff'}} button onClick={()=>{setUncoverBonus(false);showDrawer(false)}}>
                                <ListItemIcon><LocationCityIcon color='inherit'/></ListItemIcon>
                                <ListItemText primary='Организации' />
                            </ListItem>
                        </Link>
                }
                <Divider/>
                {
                    ['admin', 'client'].includes(profile.role)||!authenticated?
                        <>
                        <Link href='/brands'>
                            <ListItem style={{background: (router.pathname).includes('brand')?'#f5f5f5':'#ffffff'}} button onClick={()=>{setUncoverBonus(false);showDrawer(false)}}>
                                <ListItemIcon><CopyrightIcon color='inherit'/></ListItemIcon>
                                <ListItemText primary='Бренды' />
                            </ListItem>
                        </Link>
                        <Divider/>
                        </>
                        :null
                }
                {
                    ['admin', 'организация'].includes(profile.role)?
                        <>
                        <Link href={'/employments'}>
                            <ListItem style={{background: router.pathname.includes('employment')?'#f5f5f5':'#ffffff'}} button onClick={()=>{setUncoverBonus(false);showDrawer(false)}}>
                                <ListItemIcon><GroupIcon color='inherit'/></ListItemIcon>
                                <ListItemText primary='Сотрудники' />
                            </ListItem>
                        </Link>
                        <Divider/>
                        </>
                        :null
                }
                {
                    ['admin', 'client'].includes(profile.role)||!authenticated?
                        <>
                        <Link href='/blog'>
                            <ListItem style={{background: router.pathname==='/blog'?'#f5f5f5':'#ffffff'}} button onClick={()=>{setUncoverBonus(false);showDrawer(false)}}>
                                <ListItemIcon><ArtTrackIcon color='inherit'/></ListItemIcon>
                                <ListItemText primary='Блог' />
                            </ListItem>
                        </Link>
                        <Divider/>
                        </>
                        :null
                }
                <Link href={'/contact'}>
                    <ListItem style={{background: router.pathname==='/contact'?'#f5f5f5':'#ffffff'}} button onClick={()=>{setUncoverBonus(false);showDrawer(false)}}>
                        <ListItemIcon><InfoIcon color='inherit'/></ListItemIcon>
                        <ListItemText primary='Контакты' />
                    </ListItem>
                </Link>
                <Divider/>
            </List>
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