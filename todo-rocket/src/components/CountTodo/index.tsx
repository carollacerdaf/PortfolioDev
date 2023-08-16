import { TextInputProps } from "react-native";
import { Container, NumberContainer, Title, Number } from "./styles";

type Props = TextInputProps & {
    title: string;
    number: number;
}

export function CountTodo({ title, number, ...rest }: Props) {
    return (
        <Container>
            <Title {...rest}>{title}</Title>
            <NumberContainer>
                <Number>
                    {number}
                </Number>
            </NumberContainer>
        </Container>
    );
}