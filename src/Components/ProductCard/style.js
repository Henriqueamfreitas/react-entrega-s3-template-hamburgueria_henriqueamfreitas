import styled from "styled-components"
import { GlobalStyle } from "../../Styles/globalStyle"


export const StyledLi = styled.li`
    border: var(--grey-100) solid 2px;
    border-radius: 5px;
    height: 21.625rem;
    width: 350px;
    display: flex;
    flex-direction: column;
    background-color: var(--Color-white);
    p:nth-child(1) {
        color: var(--Color-primary);
    }
    p{
        margin-bottom: .9375rem;
        margin-left: 1.3125rem;
        margin-right: 1.1875rem;
    }

    img{
        width: 9.8125rem;
        height: 9.8125rem;
        margin-left: 3.75rem;
        margin-right: 3.75rem;
    }
    div:nth-child(1){
        background-color: var(--grey-0);
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom: 1.6669rem;
    }
    h3{
        margin-bottom: .9375rem;
        margin-left: 1.3125rem;
        margin-right: 1.1875rem;
    }
    div{
        display: flex;
        justify-content: center;
        button{
            background-color: transparent;
            border: none;
            color: var(--Color-primary);
        }
        span{
            margin-left: 1.25rem;
            margin-right: 1.25rem;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
    :hover{
        border: solid 2px var(--Color-primary);
    }
`