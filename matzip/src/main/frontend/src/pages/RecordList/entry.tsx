import { Container, AccountWrap, ProfileImgBox, TabMenuWrap, TabBtn, ContWrap, ImgBox } from "./styled"

import ProfileImg from '../../img/iconRecord.svg'
import ImgSample from '../../img/img_sample.svg'

import { useNavigate, Link } from "react-router-dom";

export default function Entry() {

    let navigate= useNavigate();

    return(
        <Container>
            <AccountWrap>
                <ProfileImgBox>
                    <img src={ProfileImg} alt="" />
                </ProfileImgBox>
                <p>닉네임</p>
            </AccountWrap>
            <TabMenuWrap>
                <TabBtn type="button" className="on" onClick={()=>{navigate('/record_list')}}>내가 쓴 글</TabBtn>
                <TabBtn type="button"  onClick={()=>{navigate('/scrap_list')}}>스크랩</TabBtn>
            </TabMenuWrap>
            <ContWrap>
                <ImgBox className="img_wrap">
                    <Link to={'/record'}>
                        <img src={ImgSample} alt=""/>
                    </Link>
                </ImgBox>
                <ImgBox className="img_wrap">
                    <Link to={'/record'}>
                        <img src={ImgSample} alt=""/>
                    </Link>
                </ImgBox>
                <ImgBox className="img_wrap">
                    <Link to={'/record'}>
                        <img src={ProfileImg} alt=""/>
                    </Link>
                </ImgBox>
                <ImgBox className="img_wrap">
                    <Link to={'/record'}>
                        <img src={ImgSample} alt=""/>
                    </Link>
                </ImgBox>
                
            </ContWrap>
        </Container>
    )
}