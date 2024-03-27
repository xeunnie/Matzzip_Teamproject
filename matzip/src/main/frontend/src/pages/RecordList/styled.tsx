/* import { styled } from '@mui/material/styles'; */
import styled from 'styled-components';

export const Container = styled('div')({
    width: '100%',
    height: '100%',
    boxSizing: 'border-box',
    padding: '50px 0 80px',
});


export const AccountWrap = styled.div`
    padding: 20px 0;
    text-align: center;
    p {
        font-size: 20px;
        font-weight: 600;
        margin: 0;
    }
`;

export const ProfileImgBox = styled.div`
    margin: 0 auto 20px;
    width: 160px;
    height: 160px;
    border-radius: 50%;
    background: #d9d9d9;
    overflow: hidden;
    img {
        display: block;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit: contain;
    }
`;

export const TabMenuWrap = styled.div`
    display: flex;
    height: 50px;
`;

export const TabBtn = styled.button`
    flex: 1;
    text-align: center;
    font-size: 18px;
    font-weight: 500;
    border: 0;
    background: #FFF8E0;
    &.on {
        background: #FFAF66;
        font-weight: 600;
    }
`;

export const ContWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const ImgBox = styled.div`
    flex: 0 0 auto;
    width: 33.33%;
    overflow: hidden;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;