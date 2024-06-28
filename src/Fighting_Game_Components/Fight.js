import React, { useState, useEffect } from "react";
import './Fight.css'
import player1 from './Images/1.jpeg'
import player2 from './Images/2.jpg'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import { Typography } from "@mui/material";
import reset from './Images/reset.jpeg'
import a from './Images/a.gif'
import b from './Images/b.gif'

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
}));

const Fight = () => {
    const [selected, setSelected] = useState('A');
    let [counta,setCounta] = useState(0);
    let [countb,setCountb] = useState(0);
    let [totaling,setTotaling] = useState('');

    const handleresetclick = () => {
        setSelected('A')
        setCounta(0)
        setCountb(0)
        setTotaling('')
    }

    const handlestimulate = () => {
        {counta > countb ? setTotaling('The Player 1 Won') : setTotaling('The Player 2 Won')}
    }

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'q') {
                console.log('You Pressed Q')
                setSelected('q')
                setCounta(() => counta++)
            } else if (e.key === 'o') {
                console.log('You Pressed O')
                setSelected('o')
                setCountb(() => countb++)
            }else if (e.key === 'w') {
                console.log('You Pressed W')
                setSelected('o')
                setCounta(() => counta--)
            }else if (e.key === 'p') {
                console.log('You Pressed P')
                setSelected('o')
                setCountb(() => countb--)
            }
        };

        const total = () =>{
            if(counta > countb){
                setTotaling('The Player 1 Won')
            }
            else{
                setTotaling('The Player 2 Won')
            }
        }

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    const handleClick = (value) => {
        if (value === 'q') {
            setSelected('q')
        } else {
            setSelected('o')
        }
    }

    return (
        <>
            <div className="heading">Use the Keys to Play the Game</div>
            <div className="main-div">
                {selected === 'A' && (
                    <>
                        <div className="player1">
                            <h1>Player 1</h1>
                            <img src={player1} alt="player1" style={{ height: '200px', width: '200px' }} />
                        </div>
                        <div className="player2">
                            <h1>Player 2</h1>
                            <img src={player2} alt="player2" style={{ height: '200px', width: '200px' }} />
                        </div>
                    </>
                )}
                {selected === 'q' && (
                    <div className="player1">
                        <h1>Player 1 Attacking</h1>
                        <img src={a} alt="player1" style={{ height: '200px', width: '400px' }} />
                    </div>
                )}
                {selected === 'o' && (
                    <div className="player2">
                        <h1>Player 2 Attacking</h1>
                        <img src={b} alt="player2" style={{ height: '200px', width: '400px' }} />
                    </div>
                )}
            </div>
            <div className="buttons">
                <div className="button1">
                    <label>Q----</label>&nbsp;&nbsp;<ColorButton variant="contained" onClick={() => handleClick('Q')}>Attack</ColorButton><br /><br />
                    <label>W----</label>&nbsp;&nbsp;<Button variant="contained">Heal</Button>
                </div>
                <div className="button2">
                    <label>O----</label>&nbsp;&nbsp;<ColorButton variant="contained" onClick={() => handleClick('O')}>Attack</ColorButton><br /><br />
                    <label>P----</label>&nbsp;&nbsp;<Button variant="contained">Heal</Button>
                </div>
            </div>
            <div className="reset">
                <div className="score">
                    <Typography variant="h5" style={{ color: 'blue' }}>Player 1 Score - {counta}</Typography>&nbsp;&nbsp;&nbsp;&nbsp;
                    <Typography variant="h5" style={{ color: 'darkviolet' }}>Player 2 Score - {countb}</Typography>
                </div>
                <Button variant="contained" onClick={handlestimulate}>Stimulate</Button>
                <Typography variant="h4">{totaling}</Typography>
                <Button onClick={handleresetclick}><img src={reset} style={{ height: '100px', width: '100px' }} alt="reset" /></Button>
            </div>
        </>
    );
}

export default Fight;