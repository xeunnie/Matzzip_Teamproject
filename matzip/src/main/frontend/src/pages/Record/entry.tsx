import { Container, TitleBlock, RateBlock, StarBox, ImgFileBox, ImgContWrap, ImgCont, DeletBtn, TextAreaBox, BtnBlock, CancelBtn, SavelBtn, EtcBtn } from "./styled"

import ImgSample from '../../img/img_sample.svg'

import { useNavigate } from "react-router-dom";

export default function Entry() {

    let navigate= useNavigate();

    return(
        <Container>
            <EtcBtn type="button" onClick={()=>{navigate('/record_list')}}>리스트이동</EtcBtn>
            <form>
                <TitleBlock>
                    <h3><strong>식당이름</strong>의 <br />방문경험은 어땠나요?</h3>
                </TitleBlock>
                <RateBlock>
                    <StarBox>
                        <input type="checkbox" id="star01" name="star" />
                        <label htmlFor="star01">별점</label>
                        <input type="checkbox" id="star02" name="star" />
                        <label htmlFor="star02">별점</label>
                        <input type="checkbox" id="star03" name="star" />
                        <label htmlFor="star03">별점</label>
                        <input type="checkbox" id="star04" name="star" />
                        <label htmlFor="star04">별점</label>
                        <input type="checkbox" id="star05" name="star" />
                        <label htmlFor="star05">별점</label>
                    </StarBox>
                    <span>별점을 선택해주세요.</span>
                </RateBlock>
                <TitleBlock>
                    <h4><strong>방문 후기를 자세히 기록해보세요.</strong></h4>
                </TitleBlock>
                <ImgFileBox>
                    <input type="file" id="imgPlus" />
                    <label htmlFor="imgPlus">
                        <span>사진을 추가해주세요&#40;0/4&#41;</span>
                        <i></i>
                    </label>
                </ImgFileBox>
                <ImgContWrap>
                    <ImgCont>
                        <img src={ImgSample} alt="" />
                        <DeletBtn type="button">삭제</DeletBtn>
                    </ImgCont>
                    <ImgCont>
                        <img src={ImgSample} alt="" />
                        <DeletBtn type="button">삭제</DeletBtn>
                    </ImgCont>
                    <ImgCont>
                        <img src={ImgSample} alt="" />
                        <DeletBtn type="button">삭제</DeletBtn>
                    </ImgCont>
                    <ImgCont>
                        <img src={ImgSample} alt="" />
                        <DeletBtn type="button">삭제</DeletBtn>
                    </ImgCont>
                </ImgContWrap>
                <TextAreaBox>
                    <textarea name="" id="" placeholder="후기를 작성해 주세요."></textarea>
                </TextAreaBox>
                <BtnBlock>
                    <CancelBtn type="button">취소하기</CancelBtn>
                    <SavelBtn type="button">등록하기</SavelBtn>
                </BtnBlock>
            </form>
        </Container>
    )
}