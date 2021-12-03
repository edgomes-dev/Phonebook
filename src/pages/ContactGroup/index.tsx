import * as C from './styles'
import { useSelector } from 'react-redux'
import { selectMenu } from '../../redux/menuSlice'
import { useParams } from 'react-router';

import { Menu } from '../../components/Menu';
import { MenuDropdown } from '../../components/MenuDropdown';
import { SubMenu } from '../../components/SubMenu';
import { CardList } from '../../components/CardList';
import { CardItem } from '../../components/CardItem';

export const ContactGroup = () => 
{
    const state = useSelector(selectMenu);
    console.log(state.value)

    const { id } = useParams();

    return (
        <C.Container>
            <Menu />
            <div id="divider">
                {state.value === true && (
                    <MenuDropdown />
                )}
                <C.Content>                    
                    <SubMenu />
                    <CardList name={`Contato ${id}`}>
                        <CardItem type={`/${id}`} />
                    </CardList>                                      
                </C.Content>      
            </div>
        </C.Container>
    )
}
