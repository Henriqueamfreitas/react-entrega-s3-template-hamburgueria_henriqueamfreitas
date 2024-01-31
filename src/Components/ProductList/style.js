import styled from "styled-components"

export const StyledProductUl = styled.ul`
    display: flex;
    margin-left: 1.6875rem;
    margin-top: 2rem;
    overflow-x: scroll;
    gap: 1.6875rem;
    padding-bottom: 2rem;

    @media (min-width: 43.75rem) {
        margin-left: 0rem;
        padding-left: 7.375rem;
        padding-right: 7.375rem;
        flex-wrap: wrap;
        overflow-x: hidden;
        justify-content: space-evenly;
    }
`
