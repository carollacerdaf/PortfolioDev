import {Container, Icon, Title} from './styles'

type Props = {
    title: string;
    showIcon?: boolean;
}

export function Button({title, showIcon = false}: Props) {
    return(
        <Container>
            {showIcon ? <Icon /> : null}
            <Title>{title}</Title>
        </Container>
    );
}