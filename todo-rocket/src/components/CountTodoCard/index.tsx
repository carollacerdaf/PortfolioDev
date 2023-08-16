import { Container } from "./styles";
import { CountTodo } from "@components/CountTodo";
import { useTheme } from 'styled-components/native'

type Props = {
    added: number;
    checked: number;
}

export function CountTodoCard({ added, checked }: Props) {
    const { COLORS } = useTheme();
    return (
        <Container>
            <CountTodo title="Criadas" number={added} style={{color:COLORS.BLUE}}/>
            <CountTodo title="Concluídas" number={checked} style={{color:COLORS.PURPLE}}/>
        </Container>
    );
}