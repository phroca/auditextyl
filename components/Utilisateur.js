import React from "react";
import styled from "styled-components";

const Utilisateur = props => {
    return (<Container > 
        <Cover>
            <Image source={{uri: props.Avatar,}}  />
        </Cover>
        <Content>
            <Wrapper>
                <Caption>{props.Nom}</Caption>
                <Subtitle>{props.Prenom}</Subtitle>
            </Wrapper>
        </Content>
    </Container>)
    
    
}
    
export default Utilisateur;

const Content = styled.View`
    align-items: center;
    height: 80px;
`;

const Caption = styled.Text`
    color: #3c4560;
    font-size: 20px;
    font-weight: 600;
    text-transform: uppercase;
`;

const Subtitle = styled.Text`
    color: #b7bece;
    font-size: 20px;
    font-weight: 600;
    margin-top: 4px;
`;

const Wrapper = styled.View`
    align-items: center;
`;

const Container = styled.View`
  align-items: center;
  background-color: white;
  width: auto;
  height: 225px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  margin-top:30px;
`;

const Cover = styled.View`
    width: 150px;
    height: 150px;
    border-radius: 75px;
    overflow : hidden;
`;

const Image = styled.Image`
    width: 100%;
    height: 200px;
    background: blue;
    position: absolute;
    top: 0;
    left : 0;
`;