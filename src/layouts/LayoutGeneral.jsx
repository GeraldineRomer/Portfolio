import { Layout } from 'antd';
import './LayoutGeneral.scss';
import React from 'react';
import MenuTop from '../components/MenuTop/MenuTop';
import FooterPage from '../components/Footer/FooterPage';
import Home from '../pages/home/Home';
import About from '../pages/about/about';
import Skills from '../pages/skills/Skills';
import Service from '../pages/services/Service';
import Portfolio from '../pages/portfolio/portfolio';
import Banner from '../pages/banner/banner';
import Contactme from '../pages/contactme/contactmepage';

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
                <Skills/>
                <Service/>
                <Portfolio/>
                <Banner/>
                <Contactme/>
            </Content>
            <Footer className='general-layout-footer'><FooterPage/></Footer>
        </Layout>
    );
}

export default LayoutGeneral;
