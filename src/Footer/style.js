import styled from 'styled-components'

export const FooterSection = styled.footer`
    text-align: center;
    padding: 10px 0;
    background-color: #F8F8F8;
    filter: drop-shadow(0 -6mm 4mm #E9E9E9);
`
export const FooterOut = styled.div`
    filter: drop-shadow(0 -6mm 4mm rgb(160, 0, 210))
`
export const Row = styled.div`
    display: flex;
    padding: 3px 0;   
`
export const Col = styled.div`
    flex: ${(props) => props.size};
    
`

export const FooterDesc = styled.p`
    color: #888
    
`