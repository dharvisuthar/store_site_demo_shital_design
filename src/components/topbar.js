import React from 'react';
import { Navbar, Container } from "react-bootstrap";
const Topbar = () => {
    return (
        <div className="navbar position-absolute bg-transparent text-white p-0">
            <Container>
                <Navbar expand="lg">
                        <span>Welcome to Shital Design</span>
                </Navbar>
            </Container>
        </div>
    );
}
export default Topbar