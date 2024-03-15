import {MapButton, MenuContainer, RecordButton, SearchButton} from "./styled";

import searchIcon from '../img/iconSearch.svg'
import mapIcon from '../img/iconMap.svg'
import recordIcon from '../img/iconRecord.svg'
import { useNavigate } from "react-router-dom";

export default function BottomMenu(){
    
    let navigate= useNavigate()
    
    return(
        <MenuContainer>
            <SearchButton onClick={()=>{navigate('/search')}}>
                <img src={searchIcon} alt=''></img>
            </SearchButton>
            <MapButton onClick={()=>{navigate('/map')}}>
                <img src={mapIcon} alt=''></img>
            </MapButton>
            <RecordButton onClick={()=>{navigate('/record')}}>
                <img src={recordIcon} alt=''></img>
            </RecordButton>
        </MenuContainer>
    )
}