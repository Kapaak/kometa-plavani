import React, { useEffect } from 'react'
import styled from 'styled-components'
    
    const Testing = () => {
        useEffect(() =>{
            
        },[])
      return (
        <div>
            <FullHeightDiv color="red">
            <h1>testing2</h1>
        </FullHeightDiv>
        <FullHeightDiv color="blue">
            <h1>testing3</h1>
        </FullHeightDiv>
        </div>
      )
    }
    const FullHeightDiv = styled.div<{color:string}>`
    border: 1px solid red;
    background-color: ${({color})=>color && color};
    height: calc(100vh - var(--header-height));
`
    
    export default Testing