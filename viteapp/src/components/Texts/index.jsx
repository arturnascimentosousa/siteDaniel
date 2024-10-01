import * as S from './styles'

export const Texts = ({title, subtitle}) => {
    return(
        <>
        <S.bigDiv>
          <S.subDiv>
                <S.redBar></S.redBar>
                <p>{subtitle}</p>
            </S.subDiv>
            <S.divTitle>
                <h1>{title}</h1>
            </S.divTitle>
        </S.bigDiv>
        </>
    )
}