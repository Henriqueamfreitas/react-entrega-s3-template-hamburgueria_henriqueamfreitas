import styled from 'styled-components'

export const StyledHeader = styled.header`
    background-color: var(--grey-0);
    height: 4.75rem;
    div:nth-child(1) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 1.6875rem;
        padding-right: 1.375rem;
        height: 4.75rem;
    }
    div:nth-child(2) {
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
       div:nth-child(1) {
            padding-left: 7.375rem;
            padding-right: 7.675rem;
            height: 4.75rem;
       }
       div:nth-child(2) {
            span{
                right: 7.375rem;
            }
       }
    }

`
