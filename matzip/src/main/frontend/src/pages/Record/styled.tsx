/* import { styled } from '@mui/material/styles'; */
import styled from 'styled-components';

import StarOffIcon from '../../img/icon_star_off.svg'
import StarOnIcon from '../../img/icon_star_on.svg'

export const Container = styled('div')({
    width: '100%',
    height: '100%',

});

export const TitleBlock = styled.div`
    padding: 20px 0;
    text-align: center;
    h3 {
        margin: 0;
        font-weight: 500;
        font-size: 18px;
        strong {
            font-weight: 600;
        }
    }
    h4 {
        margin: 0;
        font-size: 16px;
    }
`;

export const RateBlock = styled.div`
    padding: 0 0 20px;
    text-align: center;
    border-bottom: 1px solid #D9D9D9;
    > span {
        font-size: 14px;
        color: #999999;
    }
`;
export const StarBox = styled.div`
    display: flex; 
    align-items: center; 
    justify-content: center;
    input {
        overflow: hidden;
        position: absolute;
        width: 1px;
        height: 1px;
        margin: -1px;
        &:checked + label {
			background-image: url("${StarOnIcon}");
		}
    }
    label {
        cursor: pointer;
        font-size: 0;
        width: 50px;
        height: 50px;
        background: url("${StarOffIcon}") no-repeat center center;
        background-size: contain;
    }
`;

export const TextAreaBox = styled.div`
    textarea {
        display: block;
        width: 100%;
        height: 200px;
        border: 1px solid #d9d9d9;
        border-radius: 10px;
        resize: none;
        padding: 10px;
        &::placeholder {
            font-size: 12px;
            color: #999999;
            font-weight: 500;
        }
    }
`;

export const BtnBlock = styled.div`
    display: flex; 
    align-items: center; 
    justify-content: center;
    gap: 10px;
    button {
        flex: 1;
        border-radius: 10px;
    }
`;