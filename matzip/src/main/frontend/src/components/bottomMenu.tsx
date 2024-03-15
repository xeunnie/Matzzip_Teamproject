import {MapButton, MenuContainer, RecordButton, SearchButton} from "./styled";

import searchIcon from '../img/iconSearch.svg'
import mapIcon from '../img/iconMap.svg'
import recordIcon from '../img/iconRecord.svg'

export default function BottomMenu(){
    return(
        <MenuContainer>
            <SearchButton>
                <img src={searchIcon} alt=''></img>
            </SearchButton>
            <MapButton>
                <img src={mapIcon} alt=''></img>
            </MapButton>
            <RecordButton>
                <img src={recordIcon} alt=''></img>
            </RecordButton>
        </MenuContainer>
    )
}