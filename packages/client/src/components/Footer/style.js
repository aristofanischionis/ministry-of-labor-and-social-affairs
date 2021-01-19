import styled from 'styled-components';

export const FooterSection = styled.footer`
  text-align: center;
  padding: 1em;
  margin-top: 1em;
  box-shadow: 0px -4px 13px rgba(50, 50, 50, 0.2);
  z-index: 9999;
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
