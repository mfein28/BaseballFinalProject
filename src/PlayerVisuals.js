import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import batterData from './Data/batters2016NYY.json'
import Grid from "@material-ui/core/Grid";
import {ResponsiveRadar} from '@nivo/radar';
import BALData from './Data/AL_Batters/batters2016BAL.json';
import BOSData from './Data/AL_Batters/batters2016BOS.json';
import CHAData from './Data/AL_Batters/batters2016CHA.json';
import CLEData from './Data/AL_Batters/batters2016CLE.json';
import DETData from './Data/AL_Batters/batters2016DET.json';
import HOUData from './Data/AL_Batters/batters2016HOU.json';
import KCData from './Data/AL_Batters/batters2016KCA.json';
import LAAData from './Data/AL_Batters/batters2016LAA.json';
import MINData from './Data/AL_Batters/batters2016MIN.json';
import NYYData from './Data/AL_Batters/batters2016NYY.json';
import OAKData from './Data/AL_Batters/batters2016OAK.json';
import SEAData from './Data/AL_Batters/batters2016SEA.json';
import TBAData from './Data/AL_Batters/batters2016TBA.json';
import TEXData from './Data/AL_Batters/batters2016TEX.json';
import TORData from './Data/AL_Batters/batters2016TOR.json';
import SimpleSelect from "./DropDown";
import AmericanLeague from "./AmericanLeague";
import NationalLeague from "./NationalLeague";
import DropDownPlayers from "./DropDownPlayers";

import ARIData from './Data/NL_Batters/batters2016ARI.json';
import ATLData from './Data/NL_Batters/batters2016ATL.json';
import CINData from './Data/NL_Batters/batters2016CIN.json';
import COLData from './Data/NL_Batters/batters2016COL.json';
import LADData from './Data/NL_Batters/batters2016LAD.json';
import MIAData from './Data/NL_Batters/batters2016MIA.json';
import MILData from './Data/NL_Batters/batters2016MIL.json';
import NYMData from './Data/NL_Batters/batters2016NYM.json';
import PHIData from './Data/NL_Batters/batters2016PHI.json';
import PITData from './Data/NL_Batters/batters2016PIT.json';
import SDNData from './Data/NL_Batters/batters2016SDN.json';
import SFNData from './Data/NL_Batters/batters2016SFN.json';
import SLNData from './Data/NL_Batters/batters2016SLN.json';
import WASData from './Data/NL_Batters/batters2016WAS.json';
import DropDownPlayersNL from "./DropDownPlayersNL";



const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const theme = {
    axis: {
        ticks: {
            text: {
                fill: 'rgba(2,0,0,0.35)'
            }
        },
    },
    grid: {
        line: {
            stroke: "rgb(0,0,0)",
            strokeDasharray: "6 4"
        }
    },
    dots: {
        text: {
            fill: "#2d374d",
            fontSize: 12,
            fontWeight: 800
        }
    },
    tooltip: {
        container: {
            background: '#2d374d',
            color: 'white',
            boxShadow: '0 3px 9px rgba(0, 0, 0, 0.5)',
            fontFamily: "monospace"
        }
    }
};

export default function PlayerVisuals() {
    const classes = useStyles();
    let playerArray = []
    const [selectionAL, setSelectionAL] = React.useState("NYY");
    const [selectionNL, setSelectionNL] = React.useState("NYM");

    return (
            <Grid container justify="center">
                <Grid container justify="center">
                <h3>Comparing Each Teams Top 5 Highest Paid Players Batting Statistics</h3>
                    <h4><div>Notes: Each player's corresponding values is read following their name into the center. <br/> Player Salaries are in hundred thousand dollar increments.</div></h4>
                </Grid>
                <DropDownPlayers
                selection = {selectionAL}
                setSelection = {setSelectionAL}>

            </DropDownPlayers>

                {(() => {
        switch (selectionAL) {
            case "BAL":
                return (
                    <div style={{height: 450, width: 1000}}>
                        <ResponsiveRadar
                            width={1000}
                            height={500}
                            margin={{top: 60, right: 60, bottom: 60, left: 60}}
                            data={BALData}
                            indexBy="fullName"
                            keys={["H", "HR", "RBI", "salary"]}
                            colors={{scheme: 'category10'}}
                            theme={theme}
                            dotSize={12}
                            enableDotLabel={true}
                            dotLabelYOffset={4}
                            gridShape="linear"></ResponsiveRadar>
                    </div>                );
            case "BOS":
                return (
                    <div style={{height: 450, width: 1000}}>
                        <ResponsiveRadar
                            width={1000}
                            height={500}
                            margin={{top: 60, right: 60, bottom: 60, left: 60}}
                            data={BOSData}
                            indexBy="fullName"
                            keys={["H", "HR", "RBI", "salary"]}
                            colors={{scheme: 'category10'}}
                            theme={theme}
                            dotSize={12}
                            enableDotLabel={true}
                            dotLabelYOffset={4}
                            gridShape="linear"></ResponsiveRadar>
                    </div>                );
            case "CHA":
                return (
                    <div style={{height: 450, width: 1000}}>
                        <ResponsiveRadar
                            width={1000}
                            height={500}
                            margin={{top: 60, right: 60, bottom: 60, left: 60}}
                            data={CHAData}
                            indexBy="fullName"
                            keys={["H", "HR", "RBI", "salary"]}
                            colors={{scheme: 'category10'}}
                            theme={theme}
                            dotSize={12}
                            enableDotLabel={true}
                            dotLabelYOffset={4}
                            gridShape="linear"></ResponsiveRadar>
                    </div>                );
            case "CLE":
                return (
                    <div style={{height: 450, width: 1000}}>
                        <ResponsiveRadar
                            width={1000}
                            height={500}
                            margin={{top: 60, right: 60, bottom: 60, left: 60}}
                            data={CLEData}
                            indexBy="fullName"
                            keys={["H", "HR", "RBI", "salary"]}
                            colors={{scheme: 'category10'}}
                            theme={theme}
                            dotSize={12}
                            enableDotLabel={true}
                            dotLabelYOffset={4}
                            gridShape="linear"></ResponsiveRadar>
                    </div>                );
            case "DET":
                return (
                    <div style={{height: 450, width: 1000}}>
                        <ResponsiveRadar
                            width={1000}
                            height={500}
                            margin={{top: 60, right: 60, bottom: 60, left: 60}}
                            data={DETData}
                            indexBy="fullName"
                            keys={["H", "HR", "RBI", "salary"]}
                            colors={{scheme: 'category10'}}
                            theme={theme}
                            dotSize={12}
                            enableDotLabel={true}
                            dotLabelYOffset={4}
                            gridShape="linear"></ResponsiveRadar>
                    </div>                );
            case "HOU":
                return (
                    <div style={{height: 450, width: 1000}}>
                        <ResponsiveRadar
                            width={1000}
                            height={500}
                            margin={{top: 60, right: 60, bottom: 60, left: 60}}
                            data={HOUData}
                            indexBy="fullName"
                            keys={["H", "HR", "RBI", "salary"]}
                            colors={{scheme: 'category10'}}
                            theme={theme}
                            dotSize={12}
                            enableDotLabel={true}
                            dotLabelYOffset={4}
                            gridShape="linear"></ResponsiveRadar>
                    </div>                );
            case "KCA":
                return (
                    <div style={{height: 450, width: 1000}}>
                        <ResponsiveRadar
                            width={1000}
                            height={500}
                            margin={{top: 60, right: 60, bottom: 60, left: 60}}
                            data={KCData}
                            indexBy="fullName"
                            keys={["H", "HR", "RBI", "salary"]}
                            colors={{scheme: 'category10'}}
                            theme={theme}
                            dotSize={12}
                            enableDotLabel={true}
                            dotLabelYOffset={4}
                            gridShape="linear"></ResponsiveRadar>
                    </div>                );
            case "LAA":
                return (
                    <div style={{height: 450, width: 1000}}>
                        <ResponsiveRadar
                            width={1000}
                            height={500}
                            margin={{top: 60, right: 60, bottom: 60, left: 60}}
                            data={LAAData}
                            indexBy="fullName"
                            keys={["H", "HR", "RBI", "salary"]}
                            colors={{scheme: 'category10'}}
                            theme={theme}
                            dotSize={12}
                            enableDotLabel={true}
                            dotLabelYOffset={4}
                            gridShape="linear"></ResponsiveRadar>
                    </div>                );
            case "MIN":
                return (
                    <div style={{height: 450, width: 1000}}>
                        <ResponsiveRadar
                            width={1000}
                            height={500}
                            margin={{top: 60, right: 60, bottom: 60, left: 60}}
                            data={MINData}
                            indexBy="fullName"
                            keys={["H", "HR", "RBI", "salary"]}
                            colors={{scheme: 'category10'}}
                            theme={theme}
                            dotSize={12}
                            enableDotLabel={true}
                            dotLabelYOffset={4}
                            gridShape="linear"></ResponsiveRadar>
                    </div>                );
            case "NYY":
                return (
                    <div style={{height: 450, width: 1000}}>
                        <ResponsiveRadar
                            width={1000}
                            height={500}
                            margin={{top: 60, right: 60, bottom: 60, left: 60}}
                            data={NYYData}
                            indexBy="fullName"
                            keys={["H", "HR", "RBI", "salary"]}
                            colors={{scheme: 'category10'}}
                            theme={theme}
                            dotSize={12}
                            enableDotLabel={true}
                            dotLabelYOffset={4}
                            gridShape="linear"></ResponsiveRadar>
                    </div>                );
            case "OAK":
                return (
                    <div style={{height: 450, width: 1000}}>
                        <ResponsiveRadar
                            width={1000}
                            height={500}
                            margin={{top: 60, right: 60, bottom: 60, left: 60}}
                            data={OAKData}
                            indexBy="fullName"
                            keys={["H", "HR", "RBI", "salary"]}
                            colors={{scheme: 'category10'}}
                            theme={theme}
                            dotSize={12}
                            enableDotLabel={true}
                            dotLabelYOffset={4}
                            gridShape="linear"></ResponsiveRadar>
                    </div>                );
            case "SEA":
                return (
                    <div style={{height: 450, width: 1000}}>
                        <ResponsiveRadar
                            width={1000}
                            height={500}
                            margin={{top: 60, right: 60, bottom: 60, left: 60}}
                            data={SEAData}
                            indexBy="fullName"
                            keys={["H", "HR", "RBI", "salary"]}
                            colors={{scheme: 'category10'}}
                            theme={theme}
                            dotSize={12}
                            enableDotLabel={true}
                            dotLabelYOffset={4}
                            gridShape="linear"></ResponsiveRadar>
                    </div>                );
            case "TBA":
                return (
                    <div style={{height: 450, width: 1000}}>
                        <ResponsiveRadar
                            width={1000}
                            height={500}
                            margin={{top: 60, right: 60, bottom: 60, left: 60}}
                            data={TBAData}
                            indexBy="fullName"
                            keys={["H", "HR", "RBI", "salary"]}
                            colors={{scheme: 'category10'}}
                            theme={theme}
                            dotSize={12}
                            enableDotLabel={true}
                            dotLabelYOffset={4}
                            gridShape="linear"></ResponsiveRadar>
                    </div>                );
            case "TEX":
                return (
                    <div style={{height: 450, width: 1000}}>
                        <ResponsiveRadar
                            width={1000}
                            height={500}
                            margin={{top: 60, right: 60, bottom: 60, left: 60}}
                            data={TEXData}
                            indexBy="fullName"
                            keys={["H", "HR", "RBI", "salary"]}
                            colors={{scheme: 'category10'}}
                            theme={theme}
                            dotSize={12}
                            enableDotLabel={true}
                            dotLabelYOffset={4}
                            gridShape="linear"></ResponsiveRadar>
                    </div>                );
            case "TOR":
                return (
                    <div style={{height: 450, width: 1000}}>
                        <ResponsiveRadar
                            width={1000}
                            height={500}
                            margin={{top: 60, right: 60, bottom: 60, left: 60}}
                            data={TORData}
                            indexBy="fullName"
                            keys={["H", "HR", "RBI", "salary"]}
                            colors={{scheme: 'category10'}}
                            theme={theme}
                            dotSize={12}
                            enableDotLabel={true}
                            dotLabelYOffset={4}
                            gridShape="linear"></ResponsiveRadar>
                    </div>                );
        }      })()}
                <DropDownPlayersNL
                    selection = {selectionNL}
                    setSelection = {setSelectionNL}>

                </DropDownPlayersNL>
                {(() => {
                    switch (selectionNL) {
                        case "ARI":
                            return (
                                <div style={{height: 450, width: 1000}}>
                                    <ResponsiveRadar
                                        width={1000}
                                        height={500}
                                        margin={{top: 60, right: 60, bottom: 60, left: 60}}
                                        data={ARIData}
                                        indexBy="fullName"
                                        keys={["H", "HR", "RBI", "salary"]}
                                        colors={{scheme: 'category10'}}
                                        theme={theme}
                                        dotSize={12}
                                        enableDotLabel={true}
                                        dotLabelYOffset={4}
                                        gridShape="linear"></ResponsiveRadar>
                                </div>                );
                        case "ATL":
                            return (
                                <div style={{height: 450, width: 1000}}>
                                    <ResponsiveRadar
                                        width={1000}
                                        height={500}
                                        margin={{top: 60, right: 60, bottom: 60, left: 60}}
                                        data={ATLData}
                                        indexBy="fullName"
                                        keys={["H", "HR", "RBI", "salary"]}
                                        colors={{scheme: 'category10'}}
                                        theme={theme}
                                        dotSize={12}
                                        enableDotLabel={true}
                                        dotLabelYOffset={4}
                                        gridShape="linear"></ResponsiveRadar>
                                </div>                );
                        case "CIN":
                            return (
                                <div style={{height: 450, width: 1000}}>
                                    <ResponsiveRadar
                                        width={1000}
                                        height={500}
                                        margin={{top: 60, right: 60, bottom: 60, left: 60}}
                                        data={CINData}
                                        indexBy="fullName"
                                        keys={["H", "HR", "RBI", "salary"]}
                                        colors={{scheme: 'category10'}}
                                        theme={theme}
                                        dotSize={12}
                                        enableDotLabel={true}
                                        dotLabelYOffset={4}
                                        gridShape="linear"></ResponsiveRadar>
                                </div>                );
                        case "COL":
                            return (
                                <div style={{height: 450, width: 1000}}>
                                    <ResponsiveRadar
                                        width={1000}
                                        height={500}
                                        margin={{top: 60, right: 60, bottom: 60, left: 60}}
                                        data={COLData}
                                        indexBy="fullName"
                                        keys={["H", "HR", "RBI", "salary"]}
                                        colors={{scheme: 'category10'}}
                                        theme={theme}
                                        dotSize={12}
                                        enableDotLabel={true}
                                        dotLabelYOffset={4}
                                        gridShape="linear"></ResponsiveRadar>
                                </div>                );
                        case "LAD":
                            return (
                                <div style={{height: 450, width: 1000}}>
                                    <ResponsiveRadar
                                        width={1000}
                                        height={500}
                                        margin={{top: 60, right: 60, bottom: 60, left: 60}}
                                        data={LADData}
                                        indexBy="fullName"
                                        keys={["H", "HR", "RBI", "salary"]}
                                        colors={{scheme: 'category10'}}
                                        theme={theme}
                                        dotSize={12}
                                        enableDotLabel={true}
                                        dotLabelYOffset={4}
                                        gridShape="linear"></ResponsiveRadar>
                                </div>                );
                        case "MIA":
                            return (
                                <div style={{height: 450, width: 1000}}>
                                    <ResponsiveRadar
                                        width={1000}
                                        height={500}
                                        margin={{top: 60, right: 60, bottom: 60, left: 60}}
                                        data={MIAData}
                                        indexBy="fullName"
                                        keys={["H", "HR", "RBI", "salary"]}
                                        colors={{scheme: 'category10'}}
                                        theme={theme}
                                        dotSize={12}
                                        enableDotLabel={true}
                                        dotLabelYOffset={4}
                                        gridShape="linear"></ResponsiveRadar>
                                </div>                );
                        case "MIL":
                            return (
                                <div style={{height: 450, width: 1000}}>
                                    <ResponsiveRadar
                                        width={1000}
                                        height={500}
                                        margin={{top: 60, right: 60, bottom: 60, left: 60}}
                                        data={MILData}
                                        indexBy="fullName"
                                        keys={["H", "HR", "RBI", "salary"]}
                                        colors={{scheme: 'category10'}}
                                        theme={theme}
                                        dotSize={12}
                                        enableDotLabel={true}
                                        dotLabelYOffset={4}
                                        gridShape="linear"></ResponsiveRadar>
                                </div>                );
                        case "NYM":
                            return (
                                <div style={{height: 450, width: 1000}}>
                                    <ResponsiveRadar
                                        width={1000}
                                        height={500}
                                        margin={{top: 60, right: 60, bottom: 60, left: 60}}
                                        data={NYMData}
                                        indexBy="fullName"
                                        keys={["H", "HR", "RBI", "salary"]}
                                        colors={{scheme: 'category10'}}
                                        theme={theme}
                                        dotSize={12}
                                        enableDotLabel={true}
                                        dotLabelYOffset={4}
                                        gridShape="linear"></ResponsiveRadar>
                                </div>                );
                        case "PHI":
                            return (
                                <div style={{height: 450, width: 1000}}>
                                    <ResponsiveRadar
                                        width={1000}
                                        height={500}
                                        margin={{top: 60, right: 60, bottom: 60, left: 60}}
                                        data={PHIData}
                                        indexBy="fullName"
                                        keys={["H", "HR", "RBI", "salary"]}
                                        colors={{scheme: 'category10'}}
                                        theme={theme}
                                        dotSize={12}
                                        enableDotLabel={true}
                                        dotLabelYOffset={4}
                                        gridShape="linear"></ResponsiveRadar>
                                </div>                );
                        case "PIT":
                            return (
                                <div style={{height: 450, width: 1000}}>
                                    <ResponsiveRadar
                                        width={1000}
                                        height={500}
                                        margin={{top: 60, right: 60, bottom: 60, left: 60}}
                                        data={PITData}
                                        indexBy="fullName"
                                        keys={["H", "HR", "RBI", "salary"]}
                                        colors={{scheme: 'category10'}}
                                        theme={theme}
                                        dotSize={12}
                                        enableDotLabel={true}
                                        dotLabelYOffset={4}
                                        gridShape="linear"></ResponsiveRadar>
                                </div>                );
                        case "SDN":
                            return (
                                <div style={{height: 450, width: 1000}}>
                                    <ResponsiveRadar
                                        width={1000}
                                        height={500}
                                        margin={{top: 60, right: 60, bottom: 60, left: 60}}
                                        data={SDNData}
                                        indexBy="fullName"
                                        keys={["H", "HR", "RBI", "salary"]}
                                        colors={{scheme: 'category10'}}
                                        theme={theme}
                                        dotSize={12}
                                        enableDotLabel={true}
                                        dotLabelYOffset={4}
                                        gridShape="linear"></ResponsiveRadar>
                                </div>                );
                        case "SFN":
                            return (
                                <div style={{height: 450, width: 1000}}>
                                    <ResponsiveRadar
                                        width={1000}
                                        height={500}
                                        margin={{top: 60, right: 60, bottom: 60, left: 60}}
                                        data={SFNData}
                                        indexBy="fullName"
                                        keys={["H", "HR", "RBI", "salary"]}
                                        colors={{scheme: 'category10'}}
                                        theme={theme}
                                        dotSize={12}
                                        enableDotLabel={true}
                                        dotLabelYOffset={4}
                                        gridShape="linear"></ResponsiveRadar>
                                </div>                );
                        case "SLN":
                            return (
                                <div style={{height: 450, width: 1000}}>
                                    <ResponsiveRadar
                                        width={1000}
                                        height={500}
                                        margin={{top: 60, right: 60, bottom: 60, left: 60}}
                                        data={SLNData}
                                        indexBy="fullName"
                                        keys={["H", "HR", "RBI", "salary"]}
                                        colors={{scheme: 'category10'}}
                                        theme={theme}
                                        dotSize={12}
                                        enableDotLabel={true}
                                        dotLabelYOffset={4}
                                        gridShape="linear"></ResponsiveRadar>
                                </div>                );
                        case "WAS":
                            return (
                                <div style={{height: 450, width: 1000}}>
                                    <ResponsiveRadar
                                        width={1000}
                                        height={500}
                                        margin={{top: 60, right: 60, bottom: 60, left: 60}}
                                        data={WASData}
                                        indexBy="fullName"
                                        keys={["H", "HR", "RBI", "salary"]}
                                        colors={{scheme: 'category10'}}
                                        theme={theme}
                                        dotSize={12}
                                        enableDotLabel={true}
                                        dotLabelYOffset={4}
                                        gridShape="linear"></ResponsiveRadar>
                                </div>                );
                    }      })()}

            </Grid>
        );
}