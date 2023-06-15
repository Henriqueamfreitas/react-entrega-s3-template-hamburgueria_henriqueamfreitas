import styled from "styled-components"
import { GlobalStyle } from "../../Styles/globalStyle"

export const StyledLi = styled.li`
    border-radius: 5px;
    background-color: var(--Color-white);
    display: flex;
    height: 6.6rem;

    div:nth-child(1){
        background-color: var(--grey-100);
        display: flex;
        justify-content: center;
        align-items: center;
        width: 5.1413rem;
        height: 5rem;
        border-radius: .3125rem;
        margin-right: .625rem;
    }
    img{
        width: 3.4375rem;
        height: 3.3431rem;
    }

    h3{
        margin-bottom: .5rem;
        margin-top: -5px;
        width: 100px;
    }

    p{}

    div:nth-child(3){
        margin-top: 0rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        span{
            margin-top: .625rem;
            margin-bottom: .625rem;
        }
        button{
            background-color: transparent;
            color: var(--Color-primary);
            border: none;
        }
    }
    :hover{
    }
`