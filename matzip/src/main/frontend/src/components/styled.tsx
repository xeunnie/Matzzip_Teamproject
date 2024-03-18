import { styled } from '@mui/material/styles';

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