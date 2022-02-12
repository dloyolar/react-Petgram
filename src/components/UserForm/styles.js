import styled from 'styled-components';
import { fadeIn } from '../../styles/animation';

export const Wrapper = styled.div`
  ${fadeIn()}
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 75vh;
  width: 100%;
`;

export const P = styled.p`
  display: inline;
`;

export const SpanLink = styled.span`
  color: #3d69c4;
  cursor: pointer;
`;

export const Img = styled.img`
  max-width: 300px;
  max-height: 500px;
  object-fit: cover;
  margin-bottom: 24px;
`;

export const Form = styled.form`
  padding: 16px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  background: #fcfcfc;
  border-radius: 6px;
  height: 42px;
  font-size: 16px;
  width: 90%;
  margin-bottom: 16px;
  border: 1px solid #d8d8d8;
  text-indent: 12px;
  outline: none;
`;

export const Error = styled.span`
  ${fadeIn()}
  font-size: 14px;
  background: #ff7f7f;
  color: #fff;
  padding: 8px;
  border-radius: 6px;
`;
