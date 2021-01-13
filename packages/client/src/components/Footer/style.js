import styled from 'styled-components';

export const FooterSection = styled.footer`
  text-align: center;
  padding: 10px 0;
  margin-top: 20px;
  margin-bottom: 0;
  background-color: #f8f8f8;
  filter: drop-shadow(0 -4mm 2mm #e9e9e9);
  position: sticky;
  z-index: 9999;
  bottom: 0;
`;
export const FooterOut = styled.div`
  filter: drop-shadow(0 -6mm 4mm rgb(160, 0, 210));
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
