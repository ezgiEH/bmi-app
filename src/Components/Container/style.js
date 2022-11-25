import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0 auto;
    width:  70%;
    min-width: 375px;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    margin-top: 20px;
    @media (max-width: 768px) {
        width: 30%;
        padding: 1rem;
    }
`;

export const Stack = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width:  560px;
    min-width: 375px;
    padding: 20px;
    border-radius: 5px;
    @media (max-width: 768px) {
        width: 30%;
        padding: 1rem;
    }
`;