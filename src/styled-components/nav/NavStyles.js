import styled from "styled-components";

export const StyledNav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    gap: 150px;
`;

export const Ul = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
`;

export const Li = styled.li`
    color: #fff;
    font-weight: bold;
    font-size: 18px;
    padding: 19px 36px;
    transition: all .3s;

    &:nth-child(1) {
        background-color: var(--secondary_color);
    }

    &:hover {
        cursor: pointer;
        background-color: var(--secondary_color);
    }
`;