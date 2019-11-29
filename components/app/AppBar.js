import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import MenuIcon from '@material-ui/icons/Menu';
import LocalGroceryStore from '@material-ui/icons/LocalGroceryStore';
import Star from '@material-ui/icons/Star';
import ExitToApp from '@material-ui/icons/ExitToApp';
import AssignmentInd from '@material-ui/icons/AssignmentInd';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as mini_dialogActions from '../../redux/actions/mini_dialog'
import * as userActions from '../../redux/actions/user'
import * as appActions from '../../redux/actions/app'
import appbarStyle from '../../src/styleMUI/appbar'
import { getCountBasket } from '../../src/gql/basket'
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Paper from '@material-ui/core/Paper';
import Cancel from '@material-ui/icons/Cancel';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import Search from '@material-ui/icons/SearchRounded';
import Sort from '@material-ui/icons/SortRounded';
import FilterList from '@material-ui/icons/FilterListRounded';
import PermIdentity from '@material-ui/icons/PermIdentity';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import dynamic from 'next/dynamic'
import Badge from '@material-ui/core/Badge';

const Sign = dynamic(
    () => import('../dialog/Sign')
)
const Confirmation = dynamic(
    () => import('../dialog/Confirmation')
)

const MyAppBar = React.memo((props) => {
    //props
    const classes = appbarStyle();
    const { filters, sorts, pageName } = props
    const { drawer, search, filter, sort, isMobileApp, countBasket } = props.app;
    const { showDrawer, setSearch, setFilter, setSort } = props.appActions;
    const { authenticated, profile } = props.user;
    const { setMiniDialog, showMiniDialog } = props.mini_dialogActions;
    const { logout } = props.userActions;
    //state
    const [anchorElMobileMenu, setAnchorElMobileMenu] = React.useState(null);
    const openMobileMenu = Boolean(anchorElMobileMenu);
    let handleMobileMenu = (event) => {
        setAnchorElMobileMenu(event.currentTarget);
    }
    let handleCloseMobileMenu = () => {
        setAnchorElMobileMenu(null);
    }
    const [anchorElSort, setAnchorElSort] = useState(null);
    const openSort = Boolean(anchorElSort);
    let handleMenuSort = (event) => {
        setAnchorElSort(event.currentTarget);
    }
    let handleCloseSort = () => {
        setAnchorElSort(null);
    }
    const [anchorElProfile, setAnchorElProfile] = useState(null);
    const openProfile = Boolean(anchorElProfile);
    let handleMenuProfile = (event) => {
        setAnchorElProfile(event.currentTarget);
    }
    let handleCloseProfile = () => {
        setAnchorElProfile(null);
    }
    const [anchorElFilter, setAnchorElFilter] = useState(null);
    const openFilter = Boolean(anchorElFilter);
    let handleMenuFilter = (event) => {
        setAnchorElFilter(event.currentTarget);
    }
    let handleCloseFilter = () => {
        setAnchorElFilter(null);
    }
    const [openSearch, setOpenSearch] = useState(false);
    let handleSearch = (event) => {
        setSearch(event.target.value)
    };
    useEffect(()=>{
        (async()=>{
            getCountBasket()
        })()
    },[])
    return (
        <div className={classes.root}>
            <AppBar position='fixed' className={classes.appBar}>
                <Toolbar>
                    {isMobileApp?
                        <IconButton
                            edge='start'
                            aria-owns='menu-appbar'
                            aria-haspopup='true'
                            onClick={() => {showDrawer(!drawer)}}
                            color='inherit'
                        >
                            <MenuIcon/>
                        </IconButton>
                        :
                        <IconButton
                            aria-owns='menu-appbar'
                            aria-haspopup='true'
                            onClick={() => {showDrawer(!drawer)}}
                            color='inherit'
                        >
                            <MenuIcon/>
                        </IconButton>
                    }
                    <Typography variant='h6' className={classes.title}>
                        {pageName}
                    </Typography>
                    {isMobileApp?
                        openSearch?
                            <Paper className={classes.searchM}>
                                <FormControl className={classes.textField}>
                                    <Input
                                        id='adornment-password'
                                        type={'login'}
                                        value={search}
                                        onChange={handleSearch}
                                        endAdornment={
                                            <InputAdornment position='end'>
                                                <IconButton aria-label='Search' onClick={()=>{setSearch('');setOpenSearch(false)}}>
                                                    <Cancel />
                                                </IconButton>
                                            </InputAdornment>
                                        }/>
                                </FormControl>
                            </Paper>
                            :
                            <>
                            <IconButton
                                aria-owns={openMobileMenu ? 'menu-appbar' : undefined}
                                aria-haspopup='true'
                                onClick={handleMobileMenu}
                                color='inherit'
                            >
                                <Search />
                            </IconButton>
                            <Menu
                                id='menu-appbar'
                                anchorEl={anchorElMobileMenu}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'right',
                                }}
                                transformOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'right',
                                }}
                                open={openMobileMenu}
                                onClose={handleCloseMobileMenu}
                            >
                                <MenuItem onClick={()=>{
                                    setOpenSearch(true);handleCloseMobileMenu()
                                }}>
                                    <div style={{display: 'flex', color: '#606060'}}>
                                        <Search/>&nbsp;Поиск
                                    </div>
                                </MenuItem>
                                {filters&&filters.length>0?
                                    [
                                        <MenuItem onClick={handleMenuFilter}>
                                            <div style={{display: 'flex', color: '#606060'}}>
                                                <FilterList/>&nbsp;Фильтр
                                            </div>
                                        </MenuItem>,
                                        <Menu
                                            key='filters2'
                                            id='menu-appbar'
                                            anchorEl={anchorElFilter}
                                            anchorOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right',
                                            }}
                                            transformOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right',
                                            }}
                                            open={openFilter}
                                            onClose={handleCloseFilter}
                                        >
                                            {filters.map((elem, idx)=><MenuItem key={idx} style={{background: filter===elem.value?'rgba(51, 143, 255, 0.29)': '#fff'}}  onClick={()=>{setFilter(elem.value);handleCloseFilter();}}>{elem.name}</MenuItem>)}
                                        </Menu>
                                    ]
                                    :null
                                }
                                {sorts&&sorts.length>0?
                                    [
                                        <MenuItem onClick={handleMenuSort}>
                                            <div style={{display: 'flex', color: '#606060'}}>
                                                <Sort/>&nbsp;Сортировка
                                            </div>
                                        </MenuItem>,
                                        <Menu
                                            key='sort2'
                                            id='menu-appbar'
                                            anchorEl={anchorElSort}
                                            anchorOrigin={{
                                                vertical: 'top',
                                                horizontal: 'left',
                                            }}
                                            transformOrigin={{
                                                vertical: 'top',
                                                horizontal: 'left',
                                            }}
                                            open={openSort}
                                            onClose={handleCloseSort}
                                        >
                                            {sorts.map((elem, idx)=><MenuItem key={idx} onClick={()=>{sort===`-${elem.field}`?setSort(elem.field):setSort(`-${elem.field}`);/*handleCloseSort();handleCloseMobileMenu()*/}}>{sort===`-${elem.field}`?<ArrowDownward />:sort===elem.field?<ArrowUpward />:<div style={{width: '24px'}}/>}{elem.name}</MenuItem>)}
                                        </Menu>
                                    ]
                                    :null
                                }
                            </Menu>
                                    <Tooltip title='Профиль'>
                                        <IconButton
                                            aria-owns='menu-appbar'
                                            aria-haspopup='true'
                                            color='inherit'
                                            onClick={handleMenuProfile}
                                        >
                                            <Badge badgeContent={countBasket} color='secondary'>
                                                <PermIdentity/>
                                            </Badge>
                                        </IconButton>
                                    </Tooltip>
                                    <Menu
                                        id='menu-appbar'
                                        anchorEl={anchorElProfile}
                                        anchorOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        open={openProfile}
                                        onClose={handleCloseProfile}
                                    >
                                        {
                                            !authenticated||profile.role==='client'?
                                                [
                                                <MenuItem>
                                                    <Badge badgeContent={countBasket} color='secondary'>
                                                        <Link href='/basket'>
                                                            <a style={{display: 'flex', color: '#606060'}}>
                                                                <LocalGroceryStore/>
                                                                &nbsp;Корзина&nbsp;&nbsp;
                                                            </a>
                                                        </Link>
                                                    </Badge>
                                                </MenuItem>,
                                                <MenuItem>
                                                    <Link href='/favorite'>
                                                        <a style={{display: 'flex', color: '#606060'}}>
                                                            <Star/>&nbsp;Избранное
                                                        </a>
                                                    </Link>
                                                </MenuItem>
                                                ]
                                                :
                                                null
                                        }
                                        {
                                            authenticated&&profile.role!=='admin'?
                                                <MenuItem>
                                                    <Link href={`/${profile.role==='client'?'client':'employment'}/[id]`} as={`/${profile.role==='client'?'client':'employment'}/${profile._id}`}>
                                                        <a style={{display: 'flex', color: '#606060'}}>
                                                            <AssignmentInd/>&nbsp;Профиль
                                                        </a>
                                                    </Link>
                                                </MenuItem>
                                                :
                                                null
                                        }
                                        {
                                            authenticated?
                                                <MenuItem onClick={()=>{
                                                    const action = async() => {
                                                        logout()
                                                    }
                                                    setMiniDialog('Вы уверенны?', <Confirmation action={action}/>)
                                                    showMiniDialog(true)
                                                }}>
                                                    <div style={{display: 'flex', color: '#606060'}}>
                                                        <ExitToApp/>&nbsp;Выйти
                                                    </div>
                                                </MenuItem>
                                            :
                                                <MenuItem onClick={()=>{
                                                    setMiniDialog('Вход', <Sign isMobileApp={isMobileApp}/>)
                                                    showMiniDialog(true)
                                                }}>
                                                    <div style={{display: 'flex', color: '#606060'}}>
                                                        <ExitToApp/>&nbsp;Войти
                                                    </div>
                                                </MenuItem>
                                        }
                                    </Menu>

                            </>
                        :
                        openSearch?
                            <Paper className={classes.searchD}>
                                <FormControl className={classes.textField}>
                                    <Input
                                        id='adornment-password'
                                        type={'login'}
                                        value={search}
                                        onChange={handleSearch}
                                        endAdornment={
                                            <InputAdornment position='end'>
                                                <IconButton aria-label='Search' onClick={()=>{setSearch('');setOpenSearch(false)}}>
                                                    <Cancel />
                                                </IconButton>
                                            </InputAdornment>
                                        }/>
                                </FormControl>
                            </Paper>
                            :
                            <>
                            {filters&&filters.length>0?
                                <>
                                <Tooltip title='Фильтр'>
                                    <IconButton
                                        aria-owns={openFilter ? 'menu-appbar' : undefined}
                                        aria-haspopup='true'
                                        onClick={handleMenuFilter}
                                        color='inherit'
                                    >
                                        <FilterList/>
                                    </IconButton>
                                </Tooltip>
                                <Menu
                                    id='menu-appbar'
                                    anchorEl={anchorElFilter}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={openFilter}
                                    onClose={handleCloseFilter}
                                >
                                    {filters.map((elem, idx)=><MenuItem key={idx} style={{background: filter===elem.value?'rgba(51, 143, 255, 0.29)': '#fff'}} onClick={()=>{setFilter(elem.value);handleCloseFilter();}}>{elem.name}</MenuItem>)}
                                </Menu>
                                &nbsp;
                                </>
                                :null
                            }
                            {sorts&&sorts.length>0?
                                <>
                                <Tooltip title='Сортировка'>
                                    <IconButton
                                        aria-owns={openSort ? 'menu-appbar' : undefined}
                                        aria-haspopup='true'
                                        onClick={handleMenuSort}
                                        color='inherit'
                                    >
                                        <Sort />
                                    </IconButton>
                                </Tooltip>
                                <Menu
                                    id='menu-appbar'
                                    anchorEl={anchorElSort}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={openSort}
                                    onClose={handleCloseSort}
                                >
                                    {sorts.map((elem, idx)=><MenuItem key={idx} onClick={()=>{sort===`-${elem.field}`?setSort(elem.field):setSort(`-${elem.field}`);handleCloseSort();}}>{sort===`-${elem.field}`?<ArrowDownward />:sort===elem.field?<ArrowUpward />:<div style={{width: '24px'}}/>}{elem.name}</MenuItem>)}
                                </Menu>
                                &nbsp;
                                </>
                                :null
                            }
                            <Tooltip title='Поиск'>
                                <IconButton
                                    aria-owns={openSearch ? 'menu-appbar' : undefined}
                                    aria-haspopup='true'
                                    onClick={()=>{setOpenSearch(true)}}
                                    color='inherit'
                                >
                                    <Search />
                                </IconButton>
                            </Tooltip>
                                       <Tooltip title='Профиль'>
                                            <IconButton
                                                aria-owns='menu-appbar'
                                                aria-haspopup='true'
                                                color='inherit'
                                                onClick={handleMenuProfile}
                                            >
                                                <Badge badgeContent={countBasket} color='secondary'>
                                                    <PermIdentity/>
                                                </Badge>
                                            </IconButton>
                                        </Tooltip>
                                    <Menu
                                        id='menu-appbar'
                                        anchorEl={anchorElProfile}
                                        anchorOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        open={openProfile}
                                        onClose={handleCloseProfile}
                                    >
                                        {
                                            !authenticated||profile.role==='client'?
                                                [
                                                    <MenuItem>
                                                        <Badge badgeContent={countBasket} color='secondary'>
                                                        <Link href='/basket'>
                                                            <a style={{display: 'flex', color: '#606060'}}>
                                                                  <LocalGroceryStore/>
                                                                &nbsp;Корзина&nbsp;&nbsp;
                                                            </a>
                                                        </Link>
                                                </Badge>
                                                    </MenuItem>,
                                                <MenuItem>
                                                    <Link href='/favorite'>
                                                        <a style={{display: 'flex', color: '#606060'}}>
                                                            <Star/>&nbsp;Избранное
                                                        </a>
                                                    </Link>
                                                </MenuItem>
                                                ]
                                                :
                                                null
                                        }
                                        {
                                            authenticated&&profile.role!=='admin'?
                                                <MenuItem>
                                                    <Link href={`/${profile.role==='client'?'client':'employment'}/[id]`} as={`/${profile.role==='client'?'client':'employment'}/${profile._id}`}>
                                                        <a style={{display: 'flex', color: '#606060'}}>
                                                            <AssignmentInd/>&nbsp;Профиль
                                                        </a>
                                                    </Link>
                                                </MenuItem>
                                                :
                                                null
                                        }
                                        {
                                            authenticated?
                                                <MenuItem onClick={()=>{
                                                    showDrawer(false);
                                                    const action = async() => {
                                                        logout()
                                                    }
                                                    setMiniDialog('Вы уверенны?', <Confirmation action={action}/>)
                                                    showMiniDialog(true)
                                                }}>
                                                    <div style={{display: 'flex', color: '#606060'}}>
                                                        <ExitToApp/>&nbsp;Выйти
                                                    </div>
                                                </MenuItem>
                                                :
                                                <MenuItem onClick={()=>{
                                                    setMiniDialog('Вход', <Sign isMobileApp={isMobileApp}/>)
                                                    showMiniDialog(true)
                                                }}>
                                                    <div style={{display: 'flex', color: '#606060'}}>
                                                        <ExitToApp/>&nbsp;Войти
                                                    </div>
                                                </MenuItem>
                                        }
                                    </Menu>

                            </>
                    }
                </Toolbar>
            </AppBar>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(MyAppBar);
