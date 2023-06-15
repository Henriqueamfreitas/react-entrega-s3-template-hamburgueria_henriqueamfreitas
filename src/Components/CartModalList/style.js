import styled from "styled-components"
import { GlobalStyle } from "../../Styles/globalStyle"

export const StyledP = styled.p`
    margin-left: 1.1819rem;
`

export const StyledCartModalList = styled.section`
    width: 93%;
    position: fixed;
    display: flex;
    flex-direction: column;
    background-color: var(--Color-white);
    border: 3px solid black;
    border-radius: .5rem;

    div:nth-child(1){
        margin: 0;
        margin-bottom: 20px;
        padding: 0;
        display: flex;
        padding: .8125rem 1.1819rem .8125rem 1.375rem;
        background-color: var(--Color-primary);
        h2{
            display: flex;
            justify-content: center;
            align-items: center;
            color: var(--Color-white);
        }
        button{
            background-color: transparent;
            border: none;
            color: var(--grey-100);
        }
    }
    p:nth-child(3){
        background-color:red;
    }
    ul{
        display: flex;
        flex-direction: column;
        margin-left: 1.25rem;
        margin-right: 1.1819rem;
        gap: 1.125rem;
    }
    div:nth-child(3){
        margin-top: .9375rem;
        display: flex;
        justify-content: space-between;
        padding-left: 1.25rem;
        padding-right: 1.4375rem;
        p{}
    }
    button:nth-child(4){
        margin: 1.25rem;
        margin-right: 1.4375rem;
        padding-top: 1.2813rem;
        padding-bottom: 1.2813rem;
        background-color: var(--grey-100);
        color: var(--grey-300);
        border-radius: .5rem;
        border: none;
    }
`

