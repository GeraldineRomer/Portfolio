import { Layout } from 'antd';
import './LayoutGeneral.scss';
import React from 'react';
import MenuTop from '../components/MenuTop/MenuTop';
import FooterPage from '../components/Footer/FooterPage';
import Home from '../pages/home/Home';
import About from '../pages/about/about';

const LayoutGeneral = (props) => {
    const {children} = props;
    const {Header, Content, Footer} = Layout;

    return (
        <Layout>
            <Header className='general-layout-header'><MenuTop/></Header>
            <Content>
                {children}
                <Home/>
                <About/>
            </Content>
            <Footer className='general-layout-footer'><FooterPage/></Footer>
        </Layout>
    );
}

export default LayoutGeneral;
