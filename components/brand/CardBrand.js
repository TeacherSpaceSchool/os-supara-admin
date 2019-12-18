import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import cardOrganizationStyle from '../../src/styleMUI/organization/cardOrganization.js'
import { connect } from 'react-redux'
import Link from 'next/link';


const CardBrand = React.memo((props) => {
    const classes = cardOrganizationStyle();
    const { element } = props;
    const { isMobileApp } = props.app;
    return (
        <Card className={isMobileApp?classes.cardM:classes.cardD}>
            <CardActionArea>
                <Link href='/brand/[id]' as={`/brand/${element._id}`}>
                    <div className={classes.line}>
                        <img
                            className={classes.mediaO}
                            src={element.image}
                            alt={element.name}
                        />
                        <h3 className={classes.input}>
                            {element.name}
                        </h3>
                    </div>
                </Link>
            </CardActionArea>
        </Card>
    );
})

function mapStateToProps (state) {
    return {
        app: state.app,
        user: state.user
    }
}


export default connect(mapStateToProps)(CardBrand)