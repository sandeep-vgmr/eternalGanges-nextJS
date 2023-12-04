import React from 'react';
import Layout from '../../layouts/Main';
import Container from '@/components/atom/container';
import Wrapper from '@/components/atom/wrapper';


const Error = () => {
    return (
        <Layout>
            <Container>
                <Wrapper addClass="error-page">
                    <h5>404 not found...</h5>
                </Wrapper>
            </Container>
        </Layout>
    )
}

export default Error;