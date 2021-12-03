import styled from "styled-components";

export const Container = styled.div`
    #divider
    {
        display: flex;
    }
`;

export const Content = styled.div`
    margin: 10px auto;

    form 
    {
        display: flex;
        flex-direction: column;
        gap: 12px;

        .fieldsError
        {
            color: red;
        }
    }

    .input 
    {
        width: 500px;
        border: none;
        padding: 5px;
        font-size: 12pt;
        border-bottom: 1px solid gray;

        :focus
        {
           box-shadow: none;
           outline: none;
           border-bottom: 2px solid blue;
           color: blue;
        }
    }

    #button 
    {
        width: 100px;
        margin: 0 auto;
        padding: 10px;
        border: 0;
        border-radius: 5px;
        font-size: 11pt;
        background: #d3d3d3;
        cursor: pointer;

        :hover
        {
            background: gray;
        }
    }
`;

export const SelectGroup = styled.div`
    p 
    {
        margin: 0;
        font-size: 13pt;
        margin-bottom: 5px;
        text-align: center;
    }

    .groupOption
    {
        display: flex;
        justify-content: space-around;
    }
`;