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

export default function DropDownPlayersNL(props) {
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
                <MenuItem value={"ARI"}>Arizona Diamondbacks</MenuItem>
                <MenuItem value={"ATL"}>Atlanta Braves</MenuItem>
                <MenuItem value={"CIN"}>Cincinnati Reds</MenuItem>
                <MenuItem value={"COL"}>Colorado Rockies</MenuItem>
                <MenuItem value={"LAD"}>Los Angeles Dodgers</MenuItem>
                <MenuItem value={"HOU"}>Miami Marlins</MenuItem>
                <MenuItem value={"MIL"}>Milwaukee Brewers</MenuItem>
                <MenuItem value={"NYM"}>New York Mets</MenuItem>
                <MenuItem value={"PHI"}>Philadelphia Phillies</MenuItem>
                <MenuItem value={"PIT"}>Pittsburgh Pirates</MenuItem>
                <MenuItem value={"SDN"}>San Diego Padres</MenuItem>
                <MenuItem value={"SFN"}>San Francisco Giants</MenuItem>
                <MenuItem value={"SLN"}>St. Louis Cardinals</MenuItem>
                <MenuItem value={"WAS"}>Washington Nationals</MenuItem>
            </Select>
            <FormHelperText>American League</FormHelperText>
        </FormControl>
    );
}