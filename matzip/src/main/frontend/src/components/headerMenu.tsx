import {HeaderBox, BackBtn, HeaderTitle} from "./styled";

import { useNavigate } from "react-router-dom";

interface HeaderMenuProps {
    name: string; // name 파라미터의 타입을 명시적으로 지정
}

export default function HeaderMenu({name}: HeaderMenuProps){
    
    let navigate= useNavigate()
    
    return(
        <HeaderBox>
            <BackBtn onClick={()=>{navigate(-1)}} />
            <HeaderTitle>{name}</HeaderTitle>
        </HeaderBox>
    )
}