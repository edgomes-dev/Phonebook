import styled from "styled-components"

export const Container = styled.div`
    padding: 10px;

    .newContact
    {
        display: flex;
        width: 170px;
        align-items: center;
        justify-content: space-around;
        font-size: 12pt;
        text-decoration: none;
        color: #5f6368;
        cursor: pointer;

        background: #fff;
        border: 1px solid #d3d3d3;
        box-shadow: 1px 1px #d3d3d3;
        border-radius: 15px;
        padding: 5px;
        margin-bottom: 10px;

        #icon
        {
            width: 30px;
            height: 30px;
            padding: 2px;
        }

        :hover 
        {
            background: #add8e6;
            opacity: 0.9;
            transition: 0.3s;
        }
    }

    div 
    {
        display: flex;
        flex-direction: column;
    }

    .link
    {
        width: 200px;
        text-decoration: none;
        color: black;
        padding: 5px;

        :hover 
        {
            background: #add8e6;
            opacity: 0.9;
            transition: 0.3s;
        }
    }

    .icon 
    {
        color: gray;
        margin-right: 10px;
    }
`;