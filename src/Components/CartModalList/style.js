import styled from 'styled-components'
import { typography } from '../../Styles/typography' 

export const StyledP = styled.p`
    margin-left: 1rem;
`

export const ModalOverlay = styled.div`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    inset: 0;
    width: 100%;
    height: 100vh;
    background-color: #00000040;
    padding: .5rem;
    
    .modal{
        border-radius: .5rem;
        position: relative;
        width: 100%;
        height: 25.5rem;
        max-width: 25rem;
        background-color: var(--Color-white);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .modal__header{
        width: 100%;
        background-color: var(--Color-primary);
        color: var(--Color-white);
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 3.5625rem;
        padding-left: 1rem;
        padding-right: 1rem;
        h2{
            font-weight: ${typography.heading3.fontWeight};
            font-size: ${typography.heading3.fontSize};
        }
        button{
            background-color: transparent;
            border: none;
            color: var(--Color-white);
        }
    }

    .modal__items{
        p{
            width: 100%;
            text-align: center;
            font-weight: ${typography.headline.fontWeight};
            font-size: ${typography.headline.fontSize};
        }
        display: flex;
        align-items: center;
        height: 50%;
        max-height: 50%;
        ul{
            height: 100%;
            width: 100%;
            overflow-y: auto;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            border-bottom: solid .125rem var(--grey-100);
            padding-left: 1rem;
            padding-bottom: 1rem;
        }
        padding-right: 1rem;
    }
    
    .modal__total{
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding-top: 1rem;
        padding-left: 1rem;
        padding-right: 1rem;
        p:nth-child(1){
            font-weight: ${typography.body600.fontWeight};
            font-size: ${typography.body600.fontSize};
        }
        p:nth-child(2){
            color: var(--grey-300);
            font-weight: ${typography.body.fontWeight};
            font-size: ${typography.body.fontSize};
        }
    }

    .modal__button{
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;

        margin-bottom: 1rem;
        button{
            width: 100%;
            height: 3.75rem;
            border-radius: .5rem;
            background-color: #BDBDBD;
            color: var(--Color-white);
            border: none;            
            font-weight: ${typography.headline.fontWeight};
            font-size: ${typography.headline.fontSize};
        }
    }
`

