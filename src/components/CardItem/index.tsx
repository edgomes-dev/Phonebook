import * as C from './styles'
import { useEffect, useState } from 'react'
import { api } from '../../services/api'

import { BsStarFill } from 'react-icons/bs'
import { BsStar } from 'react-icons/bs'
import { BiPencil } from 'react-icons/bi'
import { ImBin } from 'react-icons/im'

interface IProps
{
    type: string;
}

export const CardItem = ({type}: IProps) => 
{
    const [contactGroup, setContactGroup] = useState([])

    useEffect(() => 
    {
        api.get(`${type}`)
            .then(response => 
            {
                const lista = response.data.flat();
                console.log(lista)
                setContactGroup(lista)
            })
            .catch(err => console.log(err))
    }, [type])

    return (
        <C.Container>
            {contactGroup.map(({_id, name, email, telephone, group, isFavorite}) => (
                <C.Item key={_id}>
                    <p className="column">{name}</p>
                    <p className="column">{email}</p>
                    <p className="column">{telephone}</p>
                    <p className="column">
                        {group === "folks" && "Pessoal"}
                        {group === "mixed" && "Ambos"}
                        {group === "job" && "Profissional"}
                    </p>                    
                    <div className="column">
                        {isFavorite === true && (
                            <button title="Remover estrela"><BsStarFill /></button>
                        )}
                        {isFavorite === false && (
                            <button title="Adicionar aos favoritos"><BsStar /></button>
                        )}
                        <button title="Editar contato"><BiPencil /></button>
                        <button title="Excluir contato"><ImBin /></button>
                    </div>
                </C.Item>
            ))}
        </C.Container>
    )
}