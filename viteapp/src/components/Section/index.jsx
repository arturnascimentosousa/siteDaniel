import * as S from './styles'

export const Section = ({title, subtitle, days, hours, minutes, seconds}) => {
    return(
        <>
        <S.bigDiv>
            <S.subDiv>
                <S.redBar></S.redBar>
                <p>{subtitle}</p>
            </S.subDiv>
            <S.divTitle>
                <h1>{title}</h1>
                <S.bigTime>
                    <S.smallTime>
                        <p>Days</p>
                        <h1>{days}</h1>
                   </S.smallTime>
                   <S.TwoPoints>:</S.TwoPoints>
                    <S.smallTime>
                        <p>Hours</p>
                        <h1>{hours}</h1>
                    </S.smallTime>
                    <S.TwoPoints>:</S.TwoPoints>
                    <S.smallTime>
                        <p>Minutes</p>
                        <h1>{minutes}</h1>
                    </S.smallTime>
                    <S.TwoPoints>:</S.TwoPoints>
                    <S.smallTime>
                        <p>Seconds</p>
                        <h1>{seconds}</h1>
                    </S.smallTime>
                </S.bigTime>
            </S.divTitle>
        </S.bigDiv>
        </>
    )
}