import React from "react";


import { 
    Container, 
    Header,
    UserWrapper,
    UserInfo,
    Photo,
    User,
    UserGreeting,
    UserName,
    Icon
} from "./styles";

export function Dashboard() {
    return (
        <Container>
            <Header>
                <UserWrapper>
                    <UserInfo>
                        <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/97288064?v=4'}}/>
                            <User>
                            <UserGreeting>Olá,</UserGreeting>
                                <UserName>Marcelo</UserName>
                            </User>
                    </UserInfo>
                    <Icon name="power"/>
                </UserWrapper>
            </Header>
        </Container>
    )
}
