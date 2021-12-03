import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    h4 
    {
        color: gray;
    }

    button 
    {
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
`;