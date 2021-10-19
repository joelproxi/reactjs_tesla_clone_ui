import React, { useState } from 'react'
import styled from 'styled-components'

import Section from '../Components/Section';

const resApi = require('../api/data.json');

const HomeView = () => {
  const [data, setData] = useState([]);
    
    React.useEffect(() => {
        setData( resApi.data);
        console.log(data);
    }, [data])

    if(data.length <= 0){
        return <h2>Loading...</h2>;
    }
    return (
        <Container>
            {
                data?.map((elt, i) => {
                    return <Section 
                            key={i}
                            title={elt.title} 
                            description={elt.description}
                            description2={elt.description2}
                            leftButton={elt.leftButton}
                              rigthButton=  { elt.section !=='accessories' ? elt.rigthButton : ""}
                            backgroundImage={elt.backgroundImage}
                            section={elt.section}
                        />
                })
            }
        </Container>
    )
}

export default HomeView


const Container = styled.div`
    width: 100%;
    height: 100vh;
    overflow: auto;
    scroll-snap-type: y mandatory;
`

