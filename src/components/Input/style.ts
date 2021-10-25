import styled, { css } from 'styled-components';
//import { shade } from 'polished';

interface ContainerProps{

   isFocused: boolean;
   isFilld: boolean;

}


export const Container = styled.div<ContainerProps>`
background: #232129;
border-radius: 10px;
padding: 16px;
width: 100%;
border: 2px solid #232129;
color:#666360;

& + div {
  margin-top: 8px;
}

${props => props.isFocused && css`

   color: #ff9000;
   border-color: #ff9000;
` }

${props => props.isFilld && css`

   color: #ff9000;
` }

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
