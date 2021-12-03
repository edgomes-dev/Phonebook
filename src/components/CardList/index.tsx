import { ReactChild, ReactChildren } from 'react'
import * as C from './styles'

interface IProps 
{
    name: string;
    children: ReactChild | ReactChildren | string;
}

export const CardList = ({ name, children }: IProps) => 
{
    return (
        <C.Container>
            <p id="title">{name}</p>
            {children}
        </C.Container>
    )
}