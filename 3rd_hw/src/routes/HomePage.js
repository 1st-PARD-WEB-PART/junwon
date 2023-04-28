import Navbar from "../components/Navbar";
import Home from "../components/Home"
import styled from 'styled-components';

function MainHomePage(){
    const MainHomePageComponent = styled.div`
        
    `;
    return (
        <MainHomePageComponent>
            <Navbar/>
            <Home/>
        </MainHomePageComponent>
    );
}

export default MainHomePage;