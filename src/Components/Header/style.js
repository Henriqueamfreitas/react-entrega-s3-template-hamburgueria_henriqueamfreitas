import styled from 'styled-components'

export const StyledHeader = styled.header`
    background-color: var(--grey-0);
    height: 4.75rem;
    .header__div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 4.75rem;
        img{
            margin-left: 1.6875rem;
        }
        div{
            margin-right: 1.375rem;
        }
    }
    .header__div--div {
        button{
            background-color: transparent;
            border: none;
        }
        span{
            position: absolute;
            right: 1rem;
            top: .625rem;
            padding: .375rem;
            background-color: var(--Color-primary);
            border-radius: .4375rem;
            color: var(--Color-white);
            font-size: .875rem;
        }
    }
    @media (min-width: 43.75rem) {
        .header__div {
        img{
            margin-left: 7.375rem;
        }
        div{
            margin-right: 7.675rem;
        }
       }
       .header__div--div {
            span{
                right: 7.375rem;
            }
       }
    }

`
