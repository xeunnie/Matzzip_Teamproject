/* import { styled } from '@mui/material/styles'; */
import styled from 'styled-components';

import StarOffIcon from '../../img/icon_star_off.svg'
import StarOnIcon from '../../img/icon_star_on.svg'
import DeletIcon from '../../img/icon_close.svg'

export const Container = styled('div')({
    width: '100%',
    height: '100%',
    boxSizing: 'border-box',
    padding: '50px 16px 80px',
    position: 'relative',
});

export const EtcBtn = styled.button`
    border: 0;
    border-radius: 10px;
    position: absolute;
    top: 0;
    right: 0;
    padding: 20px 0;
    text-align: center;
    box-sizing: border-box;
`;

export const TitleBlock = styled.div`
    padding: 20px 0;
    text-align: center;
    box-sizing: border-box;
    h3 {
        margin: 0;
        font-weight: 500;
        font-size: 22px;
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
    box-sizing: border-box;
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

export const ImgFileBox = styled.div`
    margin: 0 0 20px;
    input[type=file] {
        overflow: hidden;
        position: absolute;
        width: 1px;
        height: 1px;
        margin: -1px;
    }
    label {
        display: block;
        width: 100%;
        height: 140px;
        padding: 20px;
        border-radius: 10px;
        box-sizing: border-box;
        text-align: center;
        background-color: #FFF8E0;
        span {
            font-size: 18px;
            font-weight: 600;
        }
        i {
            display: block;
            margin: 30px auto 0;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background-color: #FFE897;
            position: relative;
            &::before {
                content: '';
                position: absolute;
                top: 0; bottom: 0; left: 0; right: 0;
                margin: auto;
                width: 2px;
                height: 18px;
                background-color: #fff;
            }
            &::after {
                content: '';
                position: absolute;
                top: 0; bottom: 0; left: 0; right: 0;
                margin: auto;
                width: 18px;
                height: 2px;
                background-color: #fff;
            }
        }
    }
`;

export const ImgContWrap = styled.div`
    margin: 0 0 20px;
    overflow-x: auto;
    display: flex;
    gap: 10px;
    padding-bottom: 10px;
    &::-webkit-scrollbar {
		height: 6px;
        border-radius: 4px;
		background: #eaeaea;
	}
	&::-webkit-scrollbar-thumb {
		height: 4px;
		border-radius: 4px;
		background: #d9d9d9;
	}
`;

export const ImgCont = styled.div`
    flex: 0 0 auto;
    width: 100px;
    height: 100px;
    border: 1px solid #d9d9d9;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;

export const DeletBtn = styled.button`
    position: absolute;
    top: 4px;
    right: 4px;
    width: 16px;
    height: 16px;
    border: 0;
    font-size: 0;
    background: url("${DeletIcon}") no-repeat center center;
    background-size: contain;
`;

export const TextAreaBox = styled.div`
    margin: 20px 0;
    textarea {
        width: 100%;
        height: 200px;
        border: 1px solid #d9d9d9;
        border-radius: 10px;
        resize: none;
        padding: 10px;
        box-sizing: border-box;
        &::placeholder {
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
        text-align: center;
        font-weight: 600;
        height: 50px;
        font-size: 18px;
    }
`;

export const CancelBtn = styled.button`
    border: 1px solid #999;
    background-color: #fff;
    color: #999;
`;

export const SavelBtn = styled.button`
    border: 1px solid #FFE897;
    background-color: #FFE897;
`;