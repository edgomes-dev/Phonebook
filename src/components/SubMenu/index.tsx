import * as C from './styles'
import { IoEllipsisVertical } from 'react-icons/io5'

export const SubMenu = () => 
{
    return(
        <C.Container>
            <h4>Título</h4>
            <h4>E-mail</h4>
            <h4>Número de Telefone</h4>
            <h4>Grupo</h4>
            <button title="Configurações da lista"><IoEllipsisVertical /></button>
        </C.Container>
    )
}