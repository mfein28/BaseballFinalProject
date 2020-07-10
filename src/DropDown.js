import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import makeStyles from "@material-ui/core/styles/makeStyles";
import FormHelperText from "@material-ui/core/FormHelperText";

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function SimpleSelect(props) {
    const classes = useStyles();
    const {setSelection, selection} = props;
    const handleChange = (event) => {
        setSelection(event.target.value);
    };
    return (
        <FormControl variant="outlined" className={classes.formControl}>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                onChange={handleChange}
                value={props.selection}
            >
                <MenuItem value={"American League"}>American League</MenuItem>
                <MenuItem value={"National League"}>National League</MenuItem>
            </Select>
            <FormHelperText>Visualization Subject</FormHelperText>
        </FormControl>
    );
}