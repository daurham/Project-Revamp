import styled from 'styled-components';

export const MedText = styled.div`
  font-size: 13px;
  font-weight: 300;
`;

export const SmText = styled.div`
  font-size: 11px;
  font-weight: 200;
`;

export const ModalRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-bottom: 10px;
  font-weight: 300;
  font-size: 15px;
`;

export const ModalColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  flex-basis: 100%;
  flex: 1;
  text-align: right;
`;

export const ModalColumnRight = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
`;

export const ModalColumnCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: 100%;
  flex: 1;
`;

export const ModalFeatureRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-bottom: 5px;
  border-bottom: solid;
  border-width: thin;
  font-weight: 400;
  font-size: 15px;
  align-items: flex-end;
  margin-bottom: 5px;
`;

export const ModalImageRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: 100%;
  flex: 10;
  padding-left: 30px;
`;
