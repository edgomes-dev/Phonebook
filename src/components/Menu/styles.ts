import styled from "styled-components"

export const Container = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

export const Logo = styled.a`
    display: flex;
    align-items: center;
    gap: 5px;
    text-decoration: none;

    img
    {
        width: 40px;
        height: 40px;
    }

    p 
    {
        color: #5f6368;
        font-size: 16pt;
    }
`;  

export const MenuDropdown = styled.div`
    button 
    {
        background: none;
        border: none;
        width: 50px;
        height: 50px;        
        border-radius: 50%;
        padding: 10px;
        cursor: pointer;

        :hover
        {
            background-color: #d3d3d3;
            opacity: .9;
            
            transition: 0.3s;
        }
    }   
`;

export const AreaLeft = styled.div`
    margin-left: 20px;
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const AreaMidle = styled.div`
    input 
    {
        width: 600px;
        height: 40px;
        padding-left: 10px;

        background-color: #d3d3d3;
        border: none;
        border-radius: 5px;
        font-size: 12pt;

        :focus
        {
            background-color: #fff;
            box-shadow: 1px 1px #d3d3d3;
            border: 1px solid #d3d3d3;
            outline: 0;
        }
    }
`;

export const AreaRight = styled.div`
    img
    {
        margin-right: 20px;
    }
`;