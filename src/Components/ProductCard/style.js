import styled from "styled-components"
import { GlobalStyle } from "../../Styles/globalStyle"


export const StyledLi = styled.li`
    display: flex;
    flex-direction: column;
    width: 18.75rem;
    height: 21.625rem;
    border: solid .125rem var(--grey-100);
    border-radius: .3125rem;
    transition: .5s;
    
    div:nth-child(1){
        width: 100%;
        height: 9.375rem;
        display: flex;
        justify-content: center;
        background-color: var(--grey-0);
    } 
    div:nth-child(2){
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: space-evenly;
        padding-left: 1rem;
        background-color: var(--Color-white);
        p:nth-child(3){
            color: var(--Color-primary);
        }
        div{
            margin-right: 1rem;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: .6rem;
        }
    }
    :hover{
        border: solid .125rem var(--Color-primary);
    }
    button{
        color: var(--Color-primary);
        border: none;
    }
    
    @media (min-width: 43.75rem) {
        
    }
`