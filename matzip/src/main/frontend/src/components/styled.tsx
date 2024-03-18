import { styled } from '@mui/material/styles';
import BackIcon from '../img/iconBack.svg';

export const MenuContainer = styled('div')({
    width: '100%',
    height: '60px',
    display: 'flex',
    padding: '10px',
    justifyContent: 'space-around',
    backgroundColor: "purple",
    boxSizing: 'border-box',
    '& img': {
        width: '100%',
        height: '100%'
    },
});

export const SearchButton = styled('div')({
    height: '100%',
    boxSizing: 'border-box',
    backgroundColor: 'red'
});

export const MapButton = styled('div')({
    height: '100%',
    boxSizing: 'border-box',
    backgroundColor:'blue'
});

export const RecordButton = styled('div')({
    height: '100%',
    boxSizing: 'border-box',
    backgroundColor:'green'
});



export const HeaderBox = styled('div')({
    position: 'absolute',
    top: '0',
    left: '0',
    width: '30px',
    height: '30px',
    backgroundColor: '#fff',
    padding: '10px',
});

export const BackBtn = styled('button')({
    width: '100%',
    height: '100%',
    background: `url(${BackIcon}) no-repeat center center`,
    backgroundSize: 'contain',
    border: 'none',
});