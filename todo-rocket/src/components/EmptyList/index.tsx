import { Container, Subtitle, Title } from "./styles";
import {Image} from 'react-native';
import clipboard from '@assets/clipboard.png';

export function EmptyList () {
    return(
        <Container>
            <Image source={clipboard}/>
            <Title>Você ainda não tem tarefas cadastradas</Title>
            <Subtitle>Crie tarefas e organize seus itens a fazer</Subtitle>
        </Container>
    );
}