import {
    Container, SearchBtn, SearchInput,
    SearchOptionItem,
    SearchOptionPick,
    SearchOptionPickWrap,
    SearchOptionTitle,
    SearchOptionWrap,
    SearchWrap
} from "./styled"
import React from 'react';
import axios from "axios";
export default function Entry() {
    return(
        <Container>
            <SearchWrap>
                <SearchBtn onClick={() => {
                    axios.get('http://localhost:8080.json').then((e)=>{
                        console.log(e.data)
                    })
                        .catch(()=>{
                            console.log('fail')
                        })
                }}></SearchBtn>
                <SearchInput placeholder={'검색어를 입력하세요'}></SearchInput>
            </SearchWrap>
            <SearchOptionWrap>
                <SearchOptionItem>
                    <SearchOptionTitle>음식 종류</SearchOptionTitle>
                    <SearchOptionPickWrap>
                        <SearchOptionPick>한식</SearchOptionPick>
                        <SearchOptionPick>파스타</SearchOptionPick>
                        <SearchOptionPick>디저트</SearchOptionPick>
                        <SearchOptionPick>일식</SearchOptionPick>
                        <SearchOptionPick>중식</SearchOptionPick>
                        <SearchOptionPick>치킨</SearchOptionPick>
                        <SearchOptionPick>피자</SearchOptionPick>
                        <SearchOptionPick>안주</SearchOptionPick>
                    </SearchOptionPickWrap>
                </SearchOptionItem>
            </SearchOptionWrap>
        </Container>
    )
}