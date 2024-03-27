import { styled } from '@mui/material/styles';
import BackIcon from '../img/iconBack.svg';

export const MenuContainer = styled('div')({
    width: '100%',
    height: '60px',
    display: 'flex',
    padding: '10px',
    justifyContent: 'space-around',
    position: 'fixed',
    bottom: 0,
    zIndex: 100,
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
    width: '100%',
    height: '50px',
    backgroundColor: '#fff',
    padding: '10px',
    boxSizing: 'border-box',
});

export const BackBtn = styled('button')({
    position: 'absolute',
    top: '10px',
    left: '10px',
    width: '30px',
    height: '30px',
    padding: '0',
    background: `url(${BackIcon}) no-repeat center center`,
    backgroundSize: 'contain',
    border: 'none',
    float: 'left',
});

export const HeaderTitle = styled('p')({
    textAlign: 'center',
    fontSize: '20px',
    fontWeight: '600',
    margin: '0',
    lineHeight: '30px',
});