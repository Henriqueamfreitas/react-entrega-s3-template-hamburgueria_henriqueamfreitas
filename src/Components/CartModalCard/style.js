import styled from "styled-components"
import { GlobalStyle } from "../../Styles/globalStyle"

export const StyledLi = styled.li`
    border: grey solid 2px;
    /* margin: 10px; */
    width: fit-content;
    border-radius: 5px;
    background-color: lightblue;

    img{
        margin-bottom: 1.6669rem;
    }

    h3{
        margin-bottom: 1rem;
        margin-left: 1.3125rem;
        margin-right: 1.1875rem;
    }

    p{
        margin-bottom: .875rem;
        margin-left: 1.3125rem;
        margin-right: 1.1875rem;
    }

    div{
        margin-bottom: 1.4375rem;
        margin-left: 1.3125rem;
        margin-right: 1.1875rem;
        span{
            margin-left: .625rem;
            margin-right: .625rem;
        }
    }


    :hover{
    border: green solid 2px;
    }
`