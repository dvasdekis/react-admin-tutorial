import * as React from "react";
import { makeStyles } from '@material-ui/core/styles';
import  BathtubIcon from '@material-ui/icons/Bathtub';

const useStyles = makeStyles({
    link: {
        textDecoration: 'none',
    },
    icon: {
        width: '0.5em',
        paddingLeft: 2,
    },
})

const MyUrlField = ({ record = {}, source }) =>{
    const classes = useStyles();
    return (
            <a href={record[source]} className={classes.link}>
                <BathtubIcon color="secondary" className={classes.icon} />
                {record[source]}
            </a>
    );
}

export default MyUrlField;