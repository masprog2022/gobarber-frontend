import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
background: #232129;
border-radius: 10px;
border: 2px solid #232129;
padding: 16px;
width: 100%;
color:#666360;
& + div {
  margin-top: 8px;
}

display: flex;
aligm-item: center;
input{
  flex: 1;
  border: 0;
  background: transparent;
  color: #f4ede8;
  &::placeholder {
    color:#666360;
  }


}

svg {
margin-right: 16px;
}

`;
