import * as C from './styles'
import { useSelector } from 'react-redux'
import { selectMenu } from '../../redux/menuSlice'

import { MenuDropdown } from '../../components/MenuDropdown'
import { Menu } from '../../components/Menu'
import { SubMenu } from '../../components/SubMenu'
import { CardList } from '../../components/CardList'
import { CardItem } from '../../components/CardItem'

export const Homepage = () => 
{
    const state = useSelector(selectMenu);

    return (
        <C.Container>
            <Menu />
            <div id="divider">
                {state.value === true && (
                    <MenuDropdown />
                )}
                <C.Content>
                    <SubMenu />
                    <CardList name="Contatos com Estrela">
                        <CardItem type="/favorite" />
                    </CardList>
                    <CardList name="Contatos">
                        <CardItem type="/" />
                    </CardList>                    
                </C.Content>
            </div>
        </C.Container>
    )
}