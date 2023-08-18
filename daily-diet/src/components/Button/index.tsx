import {Container, Icon, Title} from './styles'

type Props = {
    title: string;
}

export function Button({title}: Props) {
    return(
        <Container>
            <Icon />
            <Title>{title}</Title>
        </Container>
    );
}