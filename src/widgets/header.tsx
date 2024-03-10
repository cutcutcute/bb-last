import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { motion } from "framer-motion";

export const Header = (): React.JSX.Element => {
    return <motion.header initial={{opacity:0, y:-90}} animate={{opacity:1, y:0}} transition={{duration:.8}} className="page-header px-2">
        <nav className="navigation w-75 d-flex align-items-center" >
            <Container className="navbarMenu">
                <Row className="text-nowrap flex-nowrap justify-content-end text-center justify-content-md-center">
                    <Col><a className="nav-element">О нас</a></Col>
                    <Col><a className="nav-element">Портфолио</a></Col>
                    <Col><a className="nav-element">Услуги</a></Col>
                    <Col><a className="nav-element">Контакты</a></Col>
                </Row>
            </Container>
        </nav>
    </motion.header>
} 