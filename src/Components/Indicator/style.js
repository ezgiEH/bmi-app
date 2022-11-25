import styled from "styled-components";

const color = {
    Underweight: "#FFC54D",
    Normal: "#20b2aa",
    Overweight: "#5FFC54D",
    Obese: "#F94C66",
}


export const Circle = styled.div`
    width: 400px;
    height: 200px;
    border-top-left-radius: 200px;  
    border-top-right-radius: 200px;
    background: linear-gradient(90deg, rgba(174,238,185,1) 0%, rgba(199,148,233,1) 100%);
    opacity: 0.8;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    margin-top: 20px;
    @media (max-width: 768px) {
        width: 300px;
        height: 150px;
        border-top-left-radius: 200px;  
        border-top-right-radius: 200px;
        padding: 1rem;
    }
`;

export const Cursor  = styled.div`
    width: 20px;
    height: 150px;
    border-top-left-radius: 200px;  
    border-top-right-radius: 200px;
    background: #000;
    display: flex;
    justify-content: center;
    align-items: center;"
    margin: 0 auto;
    margin-top: 20px;
    z-index: 1;
    transform: rotate(20deg);
`;

export const Span = styled.span`
    box-shadow: inset 0 0 0 0 ${props => color[props.color]};
    margin: 0 .25rem;
    padding: 0 .25rem;
    transition: color .3s ease-in-out, box-shadow .3s ease-in-out;
    color: ${props => color[props.color]};
    &:hover {
        box-shadow: inset 100px 0 0 0   ${props => color[props.color]};  
        color: white;
    }
`;