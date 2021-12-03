import * as C from './styles'
import logoImg from '../../assets/img/contact.png'
import personImg from '../../assets/img/person.png'
import menuDropwonImg from '../../assets/img/menu-dropdown.svg'
import { useDispatch } from 'react-redux'
import { menuChange } from '../../redux/menuSlice'

export const Menu = () => 
{
    const dispatch = useDispatch()

    return (
        <C.Container>
            <C.AreaLeft>
                <C.MenuDropdown>
                    <button onClick={e => dispatch(menuChange())}><img src={menuDropwonImg} alt="Menu" /></button>                    
                </C.MenuDropdown>
                <C.Logo href="http://localhost:3000/"><img src={logoImg} alt="Logo" /> <p>Contatos</p></C.Logo>
            </C.AreaLeft>
            <C.AreaMidle>
                <input type="text" placeholder="Pesquisa" />
            </C.AreaMidle>
            <C.AreaRight>
                <img src={personImg} alt="Avatar" />
            </C.AreaRight>                                    
        </C.Container>
    )
}