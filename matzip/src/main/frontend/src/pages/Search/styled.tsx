import { styled } from '@mui/material/styles';

export const Container = styled('div')({
    width: '100%',
    height: '100%',
    backgroundColor: "skyblue",
    display: "flex",
    flexDirection: 'column'
  });

export const SearchWrap = styled('div')({
    height: '50px',
    backgroundColor: "salmon",
    margin: '16px',
    position: 'relative'
});

export const SearchInput = styled("input")({
    width: '100%',
    height: '50px',
    boxSizing: 'border-box',
    paddingLeft: '50px',
    borderRadius: '25px',
    border: '1px solid #999'
})

export const SearchBtn = styled('button')({
    width: '20px',
    height: '20px',
    position: 'absolute',
    top: '15px',
    left: '20px',
})

export const SearchOptionWrap = styled('div')({
    height: '100%',
    padding: '16px',
    backgroundColor:'fuchsia'
});

export const SearchOptionItem = styled('div')({
    marginBottom: '20px',
    backgroundColor: 'mediumseagreen'
})

export const SearchOptionTitle = styled('div')({
    fontWeight: "bold",
    fontSize: "20px",
    marginBottom: '10px'
})

export const SearchOptionPickWrap = styled('div')({
    display: 'flex',
    gap: '5px',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    backgroundColor: 'cornflowerblue'
})

export const SearchOptionPick = styled('div')({
    padding: '5px',
    border: '1px solid #999',
    borderRadius: '25px',
    minWidth: '70px',
    textAlign: 'center',
    fontSize: '15px',
    backgroundColor: 'lavender'
})