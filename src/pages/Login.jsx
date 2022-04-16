import React from 'react';
import {Button, Col, Layout, Row} from "antd";
import LoginForm from "../components/LoginForm/LoginForm";
import {REGISTER} from "../routes/routes";
import {useHistory} from "react-router-dom";

const Login = () => {

    const router = useHistory()

    return (
        <Layout>
            <Layout.Header style={{backgroundColor: "white", padding: "0 20px 0 50px", height:"10vh"}}>
                <Row>
                    <Col span={12}>
                        <Row justify="start">
                            <b>storeum</b>
                        </Row>
                    </Col>
                    <Col span={12}>
                        <Row justify="end" align="middle">
                            Don`t have a profile?
                            <Button
                                onClick={() => router.push(REGISTER)}
                                type="link">
                                Create account
                            </Button>
                        </Row>
                    </Col>
                </Row>
            </Layout.Header>
            <Row
                justify="center"
                align="middle"
                style={{backgroundColor: "white", height:"90vh"}}
            >
                <LoginForm/>
            </Row>
        </Layout>
    );
};

export default Login;