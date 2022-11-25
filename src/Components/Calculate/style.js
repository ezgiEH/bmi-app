import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width:  360px;
    min-width: 375px;
    @media (max-width: 768px) {
        width: 30%;
    }
`;

export const InputField = styled.input`
    position: relative;
    box-sizing: border-box;
    display: block;
    width: 100%;
    border: 3px solid #000000;
    padding: 10px;
    background: transparent;
    border-radius: 4px;
    &:hover {
        border: 3px solid #20b2aa;
    }
    &:change {
        border: 3px solid #20b2aa;
    }
`;

export const CalButton = styled.button`
    position: relative;
    background-color: #20b2aa;
    font-size: 1rem;
    color: #fff;
    border: 2px solid #79c7c3;
    padding: calc(.5rem * 1.5) calc(.5rem * 1.5);
    border-radius: 4px;
    width: 100%;
    box-shadow: 3px 3px 3px 3px rgba(121, 199, 195, 0.2);
    &:hover {
        color: #fff;
        border: 2px solid #20b2aa;
    }
`;

