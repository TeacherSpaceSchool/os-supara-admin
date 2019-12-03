import React from 'react';
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
import InfoIcon from '@material-ui/icons/Info';
import GroupIcon from '@material-ui/icons/Group';
import ReceiptIcon from '@material-ui/icons/Receipt';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import ArtTrackIcon from '@material-ui/icons/ArtTrack';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
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
    const open = isMobileApp?drawer:true
    const router = useRouter();
    return (
        <Drawer
            variant= {variant}
            className={classes.drawer}
            open={open}
            onClose={()=>showDrawer(false)}
            classes={{paper: classes.drawerPaper,}}
            onOpen={()=>showDrawer(true)}
            swipeAreaWidth={20}
            hysteresis={0.5}
            disableDiscovery={true}
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
                    ['экспедитор', 'организация', 'менеджер'].includes(profile.role)?
                        <Link href='/items/[id]' as='/items/all'>
                            <ListItem style={{background:
                                router.pathname===('/')
                                ||
                                router.pathname.includes('subcategory')
                                ||
                                router.pathname.includes('item')?
                                    '#f5f5f5':'#ffffff'}} button onClick={()=>{showDrawer(false)}}>
                                <ListItemIcon><ReorderIcon color='inherit'/></ListItemIcon>
                                <ListItemText primary='Товары' />
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
                    ['admin', 'client'].includes(profile.role)||!authenticated?
                        <>
                        <Link href='/ads'>
                            <ListItem style={{background: router.pathname==='/ads'?'#f5f5f5':'#ffffff'}} button onClick={()=>{showDrawer(false)}}>
                                <ListItemIcon><WhatshotIcon color='inherit'/></ListItemIcon>
                                <ListItemText primary='Акции' />
                            </ListItem>
                        </Link>
                        <Divider/>
                        </>
                        :null
                }
                {
                    ['admin', 'организация', 'менеджер'].includes(profile.role)?
                        <>
                        <Link href={'/clients'}>
                            <ListItem style={{background: router.pathname.includes('client')?'#f5f5f5':'#ffffff'}} button onClick={()=>{showDrawer(false)}}>
                                <ListItemIcon><GroupIcon color='inherit'/></ListItemIcon>
                                <ListItemText primary='Клиенты' />
                            </ListItem>
                        </Link>
                        <Divider/>
                        </>
                        :null
                }
                {
                    ['client', 'admin', 'организация', 'менеджер'].includes(profile.role)?
                        <>
                        <Link href='/orders'>
                            <ListItem style={{background: router.pathname==='/orders'?'#f5f5f5':'#ffffff'}} button onClick={()=>{showDrawer(false)}}>
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
                            <ListItem style={{background: router.pathname==='/routes'?'#f5f5f5':'#ffffff'}} button onClick={()=>{showDrawer(false)}}>
                                <ListItemIcon><FormatListNumberedIcon color='inherit'/></ListItemIcon>
                                <ListItemText primary='Маршрутные листы' />
                            </ListItem>
                        </Link>
                        <Divider/>
                        </>
                        :null
                }
                {
                    ['экспедитор', 'организация', 'менеджер'].includes(profile.role)?
                        <Link href='/organization/[id]' as={`/organization/${profile.organization}`}>
                            <ListItem style={{background: router.pathname.includes('organization')?'#f5f5f5':'#ffffff'}} button onClick={()=>{showDrawer(false)}}>
                                <ListItemIcon><LocationCityIcon color='inherit'/></ListItemIcon>
                                <ListItemText primary='Организация' />
                            </ListItem>
                        </Link>
                        :
                        <Link href='/organizations'>
                            <ListItem style={{background: router.pathname.includes('organization')?'#f5f5f5':'#ffffff'}} button onClick={()=>{showDrawer(false)}}>
                                <ListItemIcon><LocationCityIcon color='inherit'/></ListItemIcon>
                                <ListItemText primary='Организации' />
                            </ListItem>
                        </Link>
                }
                <Divider/>
                {
                    ['admin', 'организация'].includes(profile.role)?
                        <>
                        <Link href={'/employments'}>
                            <ListItem style={{background: router.pathname.includes('employment')?'#f5f5f5':'#ffffff'}} button onClick={()=>{showDrawer(false)}}>
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
                            <ListItem style={{background: router.pathname==='/blog'?'#f5f5f5':'#ffffff'}} button onClick={()=>{showDrawer(false)}}>
                                <ListItemIcon><ArtTrackIcon color='inherit'/></ListItemIcon>
                                <ListItemText primary='Блог' />
                            </ListItem>
                        </Link>
                        <Divider/>
                        </>
                        :null
                }
                <Link href={'/contact'}>
                    <ListItem style={{background: router.pathname==='/contact'?'#f5f5f5':'#ffffff'}} button onClick={()=>{showDrawer(false)}}>
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