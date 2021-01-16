import styled from 'styled-components';

export const FooterSection = styled.footer`
  text-align: center;
  padding: 10px 0;
  margin-top: 20px;
  margin-bottom: 0;
    
  z-index: 9999;
  bottom: 0;
`;
export const FooterOut = styled.div`
  filter: drop-shadow(0 -6mm 4mm black);
`;
export const Row = styled.div`
  display: flex;
  padding: 3px 0;
`;
export const Col = styled.div`
  flex: ${props => props.size};
`;

export const FooterDesc = styled.p`
  color: #888;
`;
