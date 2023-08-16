import { Container, Line } from "./styles";
import { CountTodo } from "@components/CountTodo";
import { useTheme } from 'styled-components/native'

type Props = {
    number: number;
}

export function CountTodoCard({ number }: Props) {
    const { COLORS } = useTheme();
    return (
        <Container>
            <CountTodo title="Criadas" number={number} style={{color:COLORS.BLUE}}/>
            <CountTodo title="Concluídas" number={number} style={{color:COLORS.PURPLE}}/>
        </Container>
    );
}