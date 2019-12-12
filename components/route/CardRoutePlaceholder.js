import React from 'react';
import { connect } from 'react-redux'
import cardStyle from '../../src/styleMUI/route/cardRoute'
import Skeleton from '@material-ui/lab/Skeleton';

const CardRoutePlaceholder = React.memo((props) => {
    const classes = cardStyle();
    return (
        <div className={classes.card} style={{height: 210}}>
            <Skeleton variant='rect' height='100%'/>
        </div>
    );
})

function mapStateToProps (state) {
    return {
        user: state.user,
        app: state.app
    }
}

export default connect(mapStateToProps)(CardRoutePlaceholder)