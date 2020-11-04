import styled from 'styled-components/macro';


export const Container = styled.div`
    padding: 70px 200px;
    margin: auto;
    width:100%;
    box-sizing: border-box;
    /* background-color: rgba(0,0,0,.75); */
    background-color:${({ background = "rgba(0,0,0,.75)" }) => background};
    text-align:center;
    @media(max-width: 1000px){
        padding: 70px 30px;
    }
`;

export const Column = styled.div`
    display: flex;
    flex-direction:column;
`;


export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    @media(max-width:1000px){
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 20px;
    }
`;

export const Link = styled.a`
    color: #757575;
    margin-bottom: 20px;
    font-size: 16px;
    text-decoration: none;
`;

export const Title = styled.p`
    font-size: 16px;
    color: #757575;
    margin-bottom:40px;
`;

export const Text = styled.p`
    font-size: 13px;
    color:#757575;
    margin-bottom: 40px;
`;

export const Break = styled.p`
    flex-basis: 100%;
    height: 0;
`;