import styled from "styled-components"
import { GlobalStyle } from "../../Styles/globalStyle"

export const StyledHeader = styled.header`
    margin-bottom: 50px;
    padding: 1.1425rem 1rem 1rem 1rem;
    background-color: var(--grey-0);
    div:nth-child(1) {
        display: flex;
        margin-bottom: .875rem;
        justify-content: space-between;
    }
    div:nth-child(2) {
        padding-top: .4375rem;
        padding-right: .1875rem;
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
    form{
        width: 100%;
        background-color: var(--Color-white);
        border: 2px solid var(--grey-100);
        border-radius: .5rem;
        padding: 1.2813rem 0 1.2813rem;
        display: flex;
        justify-content: space-between;
        /* padding-left: .625rem;
        padding-right: .625rem; */
        input{
            margin-left: .9375rem;
            border: none;
        }
        input:focus{
            border: none;
        }
        button{
            margin-right: .625rem;
            padding: .75rem 1.25rem;
            border: none;
            border-radius: .5rem;
            background-color: var(--Color-primary);
        }
    }

`
