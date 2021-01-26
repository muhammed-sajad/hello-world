import React from 'react';
import styled from 'styled-components';
import {BrowserRouter as Router ,Link} from "react-router-dom";

function Nav() {
    return (
        <div>
            <nav>
                <Router>
                <Ul>
                    <Pass to={'/about'}>
                        <Li>About</Li>
                    </Pass>
                    <Li>Contact</Li>
                </Ul>
                </Router>
            </nav>
        </div>
    )
}

export default Nav


const Ul = styled.ul`
    background-color: #777;
    display: flex;
    justify-content:space-around;
    height: 50px;
    align-items:center;
`;
const Pass = styled(Link)`
    color: blue;
`;
const Li = styled.li`
    list-style: none;
`;