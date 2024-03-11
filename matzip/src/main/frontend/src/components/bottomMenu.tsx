import {MapButton, MenuContainer, RecordButton, SearchButton} from "./styled";

export default function BottomMenu(){
    return(
        <MenuContainer>
            <SearchButton/>
            <MapButton/>
            <RecordButton/>
        </MenuContainer>
    )
}