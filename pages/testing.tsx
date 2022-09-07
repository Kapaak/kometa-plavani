import React, { useEffect } from 'react'
import styled from 'styled-components'

const testing = () => {
    useEffect(() =>{
        let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty("--vh",`${vh}px`)
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

export default testing

const FullHeightDiv = styled.div<{color:string}>`
    border: 1px solid red;
    background-color: ${({color})=>color && color};
    height: calc(var(--vh,1vh)*100 - var(--header-height));
`