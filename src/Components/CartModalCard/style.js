import styled from "styled-components"

export const StyledLi = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    .li__left{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
    }
    
    .li__left--divImg{
        width: 5.1413rem;
        height: 5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: .3125rem;
        background-color: var(--grey-100);
    }

    img{
        width: 3.4375rem;
        height: 3.3431rem;
    }

    .li__left--descripiton{
        display: flex;
        flex-direction: column;
        gap: .75rem;
    }

    .li__right{
        display: flex;
        gap: .75rem;
        button{
            background-color: transparent;
            color: var(--Color-primary);
            border: none;
        }
    }

    @media (min-width: 43.75rem) {
    }
`