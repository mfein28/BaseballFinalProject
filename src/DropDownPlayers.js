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

export default function DropDownPlayers(props) {
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
                <MenuItem value={"BAL"}>Baltimore Orioles</MenuItem>
                <MenuItem value={"BOS"}>Boston Red Sox</MenuItem>
                <MenuItem value={"CHA"}>Chicago White Sox</MenuItem>
                <MenuItem value={"CLE"}>Cleveland Indians</MenuItem>
                <MenuItem value={"DET"}>Detroit Tigers</MenuItem>
                <MenuItem value={"HOU"}>Houston Astros</MenuItem>
                <MenuItem value={"KCA"}>Kansas City Royals</MenuItem>
                <MenuItem value={"LAA"}>Los Angeles Angels</MenuItem>
                <MenuItem value={"MIN"}>Minnesota Twins</MenuItem>
                <MenuItem value={"NYY"}>New York Yankees</MenuItem>
                <MenuItem value={"OAK"}>Oakland Athletics</MenuItem>
                <MenuItem value={"SEA"}>Seattle Mariners</MenuItem>
                <MenuItem value={"TBA"}>Tampa Bay Rays</MenuItem>
                <MenuItem value={"TEX"}>Texas Rangers</MenuItem>
                <MenuItem value={"TOR"}>Toronto Bluejays</MenuItem>
            </Select>
            <FormHelperText>American League</FormHelperText>
        </FormControl>
    );
}