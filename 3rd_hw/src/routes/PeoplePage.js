import Navbar from "../components/Navbar";
import People from "../components/people"
import styled from 'styled-components';

function PeoplePage(){
    const PeoplePageComponent = styled.div`
        
    `;
    return (
        <PeoplePageComponent>
            <Navbar/>
            <People/>
        </PeoplePageComponent>
    );
}

export default PeoplePage;