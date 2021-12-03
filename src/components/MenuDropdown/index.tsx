import * as C from './styles'
import { Link } from 'react-router-dom'
import addImg from '../../assets/img/add.png'
import { GrAdd } from 'react-icons/gr'
import { BsFillPersonFill } from 'react-icons/bs'
import { MdWork, MdOutlineHistory } from 'react-icons/md'
import { ImBin } from 'react-icons/im'

export const MenuDropdown = () => 
{
    return (
        <C.Container>
            <Link className="newContact" to="/new"><GrAdd id="icon" />Criar contato</Link>
            <div>
                <Link to="/" className="link"><BsFillPersonFill className="icon" />Todos os contatos</Link>
                <Link to="/contactgroup/job" className="link"><MdWork className="icon" />Contatos Trabalho</Link>
                <Link to="/contactgroup/folks" className="link"><BsFillPersonFill className="icon" />Contatos Particular</Link>                
            </div>
            <div>
                <Link to="" className="link"><MdOutlineHistory className="icon" />Histórico</Link>
                <Link to="" className="link"><ImBin className="icon" />Lixeira</Link>                
            </div>
        </C.Container>
    )
}
