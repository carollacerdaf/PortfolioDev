import { CheckBox, Container, Title, TrashIcon } from "./styles";

type Props = {
    title: string;
}

export function TodoCard({title}: Props) {
    return (
        <Container>
            <CheckBox/>
            <Title>{title}</Title>
            <TrashIcon/>
        </Container>
    );
}