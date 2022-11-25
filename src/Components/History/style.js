import styled from "styled-components";


export const Wrapper = styled.div`
    padding: 0 1rem;
    box-sizing: border-box;
    @media (min-width: 768px) {
        width: 50%;
    }
`;

export const List = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;  
`;

export const ListItem = styled.li`
    background-color: #20b2aa;
    border: 1px solid #000;
    border-radius: 5px;
    padding: 1rem;
    margin: 1rem;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    @media (min-width: 768px) {
        width: 50%;
    }
`;

export const ClearButton = styled.button`
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