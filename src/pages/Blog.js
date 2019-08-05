import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as tableActions from '../redux/actions/table'
import * as mini_dialogActions from '../redux/actions/mini_dialog'
import Button from '@material-ui/core/Button';
import { mainWindow } from '../App'
import renderHTML from 'react-render-html';
export const datePicker = React.createRef();

const width = mainWindow===undefined||mainWindow.current.offsetWidth>800? 500: 240;
const width1 = mainWindow===undefined||mainWindow.current.offsetWidth>800? 240: 120;
const styles = theme => ({
    button: {
        width: '200px',
        margin: theme.spacing.unit,
    },
    textFieldSmall: {
        display: 'inline-block',
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: width1
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: width,
    },
    textFieldDate: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: width/2,
    },
    urls: {
        margin: theme.spacing.unit,
        width: width,
        maxHeight: 100,
        overflow: 'auto'
    },
    message: {
        width: width,
        marginTop: theme.spacing.unit,
        marginBottom: theme.spacing.unit,
        marginLeft: 'calc((100% - '+width+'px)/2)',
        marginRight: 'calc((100% - '+width+'px)/2)'
    },
    MuiPickersToolbar: {
        toolbar: {
            backgroundColor: '#000',
        },
    },
    MuiPickersModal: {
        dialogAction: {
            color: '#000',
        },
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
});

const Plan = React.memo(
    (props) =>{
        let handleScroll =  async () => {
            if(window.pageYOffset+window.outerHeight>document.documentElement.offsetHeight-100) {
                let _data = await tableActions.getDataSimple({name: 'Блог', skip: list.length})
                setList(_data)
            }
        }
        const { classes } = props;
        let [list, setList] = useState([]);
        const { status } = props.user;
        useEffect(()=>{
            window.addEventListener('scroll', handleScroll);
            return ()=>{
                window.removeEventListener('scroll', handleScroll);
            }
        });
        useEffect(()=>{
            async function fetchData() {
                if (!(status.status==='active'&&['admin', 'организатор', 'реализатор'].includes(status.role))) {
                    props.history.push('/')
                }
                let _data = await tableActions.getDataSimple({name: 'Блог', skip: list.length})
                if(_data!==undefined)
                    setList(_data)
            }
            fetchData();
        },[])
        let show = (id, show)=> {
            list[id].show = show
            setList(list)
        }

         return (
            <div>
                <br/>
                <h1>Новости</h1>
                {
                    list!=undefined&&list.length>0?
                        list.map((element, idx)=> {
                            return(
                                <center>
                                    <div className='blog'>
                                        <img className="blog-image" src={element.image}/>
                                        <br/>
                                        <b className="blog-title">
                                            {element.name}
                                        </b>
                                        <br/>
                                        <div>
                                            {element.text!==undefined&&element.show!==undefined&&element.show?
                                                <>
                                                <div className='blog-text'>
                                                    {renderHTML(element.text)}
                                                </div>
                                                <Button variant='outlined' onClick={()=>{show(idx, false)}} className={classes.button}>
                                                    спрятать
                                                </Button>
                                                </>
                                                :
                                                <Button variant='outlined' onClick={()=>{show(idx, true)}} className={classes.button}>
                                                    показать
                                                </Button>
                                            }
                                        </div>
                                    </div>
                                    <br/>
                                </center>
                            )
                        }):
                        null
                }
            </div>
        );
  })

function mapStateToProps (state) {
    return {
        user: state.user,
        table: state.table,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        tableActions: bindActionCreators(tableActions, dispatch),
        mini_dialogActions: bindActionCreators(mini_dialogActions, dispatch),
    }
}

Event.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Plan));
