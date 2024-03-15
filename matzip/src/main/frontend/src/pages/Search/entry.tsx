import { Container } from "./styled"
import React from 'react';
import axios from "axios";
export default function Entry() {
    return(
        <Container>
            <p>search</p>
            <button onClick={() => {
                axios.get('http://localhost:8080.json').then((e)=>{
                    console.log(e.data)
                })
                    .catch(()=>{
                        console.log('fail')
                    })
            }}>btn</button>
        </Container>
    )
}