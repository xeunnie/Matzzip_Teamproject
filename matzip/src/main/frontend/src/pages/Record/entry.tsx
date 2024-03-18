import { Container, TitleBlock, RateBlock, StarBox, TextAreaBox, BtnBlock } from "./styled"

export default function Entry() {
    return(
        <Container>
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
                <div>여기는 사진을 추가영역이에요오오오옹</div>
                <TextAreaBox>
                    <textarea name="" id="" placeholder="후기를 작성해 주세요."></textarea>
                </TextAreaBox>
                <BtnBlock>
                    <button type="button">취소하기</button>
                    <button type="button">등록하기</button>
                </BtnBlock>
            </form>
        </Container>
    )
}