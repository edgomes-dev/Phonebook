import styled from "styled-components"

export const Container = styled.div`
    .column
    {
        width: 40%;
    }
`;

export const Item = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    p 
    {
        width: 220px;
    }

    button 
    {
        visibility: hidden;
        padding: 0;
        height: 100%;
        margin-right: 20px;

        background: none;
        border: none;

        :hover
        {
            cursor: pointer;
        }
    }

    :hover 
    {
        button 
        {
            visibility: visible;
        }
    }
`;