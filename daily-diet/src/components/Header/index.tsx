import {Container, Logo, ProfileImage} from './styles'
import logo from '@assets/logo.png'
import ellipse from '@assets/ellipse.png'

export function Header() {
    return(
        <Container>
            <Logo source={logo}/>
            <ProfileImage source={ellipse}/>
        </Container>
    );
}