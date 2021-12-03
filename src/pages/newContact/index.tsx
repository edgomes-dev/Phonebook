import * as C from './styles'
import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { selectMenu } from '../../redux/menuSlice'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { api } from '../../services/api'
import { useNavigate } from 'react-router-dom'

import { MenuDropdown } from '../../components/MenuDropdown'
import { Menu } from '../../components/Menu'

import { BsFillPersonFill, BsFillTelephoneFill } from 'react-icons/bs'
import { BiBuildings } from 'react-icons/bi'
import { MdEmail, MdDescription, MdWork } from 'react-icons/md'
import { AiOutlineWarning } from 'react-icons/ai'

interface IFormContacts
{
    name: string,
    telephone: number,
    email: string,
    company: string,
    office: string,
    description: string,
    group: string
}

export const NewContact = () => 
{
    const navigate = useNavigate();

    const state = useSelector(selectMenu);

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

    const validationPost = yup.object(
    {
        name: yup.string().required("O Nome é obrigatório"),
        telephone: yup.string().matches(phoneRegExp, 'Esté número não é valido').required(),
        email: yup.string().email(),
        company: yup.string(),
        office: yup.string(),
        description: yup.string(),
        group: yup.string().required()
    }) 

    const { register, handleSubmit, watch, formState: { errors } } = useForm<IFormContacts>({
        resolver: yupResolver(validationPost)
    })
    const createUser: SubmitHandler<IFormContacts> = data => api.post("/", data)
        .then(() => {console.log("Deu certo"); navigate("/")})
        .catch(() => {console.log("Deu errado")})

    return (
        <C.Container>
            <Menu />
            <div id="divider">
                {state.value === true && (
                    <MenuDropdown />
                )}
                <C.Content>
                    <form onSubmit={handleSubmit(createUser)} method="post">
                        <div className="fields">
                            <label><BsFillPersonFill /> <input type="text" placeholder="Nome" className="input" {...register("name", { required: true })} /></label>
                            <p className="fieldsError">{errors.name?.message}</p>
                        </div>
                        <div className="fields">
                            <label><BsFillTelephoneFill /> <input type="number" placeholder="Telefone" className="input" {...register("telephone", { required: true })} /></label>
                            <p className="fieldsError">{errors.telephone?.message}</p>
                        </div>
                        <div className="fields">
                            <label><MdEmail /> <input type="text" placeholder="E-mail" className="input" {...register("email")} /></label>
                        </div>
                        <div className="fields">
                            <label><BiBuildings /> <input type="text" placeholder="Empresa" className="input" {...register("company")} /></label>
                        </div>
                        <div className="fields">
                            <label><MdWork /> <input type="text" placeholder="Cargo" className="input" {...register("office")} /></label>
                        </div>
                        <div className="fields">
                            <label><MdDescription /> <input type="text" placeholder="Descrição" className="input" {...register("description")} /></label>
                        </div>
                        <C.SelectGroup>
                            <p>Este contato pertence ao grupo ?</p>
                            <div className="groupOption">
                                <div className="groupOptionItem">
                                    <input 
                                        {...register("group")}
                                        type="radio" 
                                        name="group" 
                                        value="folks"
                                    />
                                    <label>Pessoal</label>
                                </div>
                                <div className="groupOptionItem">
                                    <input 
                                        {...register("group")}
                                        type="radio" 
                                        name="group" 
                                        value="mixed"
                                    />
                                    <label>Ambos</label>
                                </div>
                                <div className="groupOptionItem">
                                    <input
                                        {...register("group")}
                                        type="radio" 
                                        name="group" 
                                        value="job"
                                    />
                                    <label>Trabalho</label>                                    
                                </div>                                
                            </div>
                        </C.SelectGroup>                        
                        <input type="submit" formMethod="post" value="Salvar" id="button" />
                    </form>
                </C.Content>
            </div>
        </C.Container>
    )
}

/*

*/    