import {HeaderBox, BackBtn} from "./styled";

import { useNavigate } from "react-router-dom";

export default function HeaderMenu(){
    
    let navigate= useNavigate()
    
    return(
        <HeaderBox>
            <BackBtn onClick={()=>{navigate(-1)}} />
        </HeaderBox>
    )
}