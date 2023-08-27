import { Button as ButtonNativeBase, IButtonProps, Text } from 'native-base'

type Props = IButtonProps & {
    title: string;
}

export function Button({ title, ...rest }: Props) {
    return (
        <ButtonNativeBase
            {...rest}
        >
            <Text>
                {title}
            </Text>
        </ButtonNativeBase>
    );
}