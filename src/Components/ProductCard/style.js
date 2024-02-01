import styled from 'styled-components'
import { typography } from '../../Styles/typography' 

export const StyledLi = styled.li`
    display: flex;
    flex-direction: column;
    min-width: 18.75rem;
    height: 21.625rem;
    border: solid .125rem var(--grey-100);
    border-radius: .3125rem;
    transition: .5s;
    
    .product__divImg{
        width: 100%;
        height: 9.375rem;
        display: flex;
        justify-content: center;
        background-color: var(--grey-0);
    } 
    .product__divDescripiton{
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: space-evenly;
        padding-left: 1rem;
        background-color: var(--Color-white);
        p:nth-child(2){
            font-weight: ${typography.caption.fontWeight};
            font-size: ${typography.caption.fontSize};
        }
        p:nth-child(3){
            color: var(--Color-primary);
            font-weight: ${typography.body.fontWeight};
            font-size: ${typography.body.fontSize};
        }
    }
    .product__divDescripiton--buttons{
        margin-right: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: .6rem;
    }
    :hover{
        border: solid .125rem var(--Color-primary);
    }
    button{
        color: var(--Color-primary);
        border: none;
        font-weight: ${typography.body600.fontWeight};
        font-size: ${typography.body600.fontSize};
    }
    span{
        font-weight: ${typography.body600.fontWeight};
        font-size: ${typography.body600.fontSize};

    }
    
    @media (min-width: 43.75rem) {
        
    }
`