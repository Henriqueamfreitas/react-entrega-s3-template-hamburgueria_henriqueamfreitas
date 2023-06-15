import styled from "styled-components"
import { GlobalStyle } from "../../Styles/globalStyle"

export const StyledProductUl = styled.ul`
    padding-left: 1rem;
    display: flex;
    gap: 1.25rem;
    overflow-x: scroll;

    @media (min-width: 700px) {
        flex-wrap: wrap;
        overflow-x: hidden;
        justify-content: space-between;
        padding-right: 1rem;
    }
`
