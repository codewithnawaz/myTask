import React from 'react'
import styled from 'styled-components'

// const Container = styled.div`
// height: 11vh;
// background-color: black;
// color: white;
// `
// const Left = styled.div``
// const Right = styled.div``
// const RightItem = styled.div``
// const Item = styled.div`
// color: white;
// `

// export default function Navbar() {
//   return (
//     <Container>
//         <Left>
//             <img src="./image/Screenshot1.png" alt="" />
//         </Left>
//         <Right>
//             <RightItem>
//                 <Item>Product</Item>
//                 <Item>Club</Item>
//                 <Item>Get in touch</Item>
//             </RightItem>
//         </Right>
//     </Container>

const Container = styled.div`
   
    color: white;
`
export default function Navbar() {
    return (
        <Container>
            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src="./image/Screenshot1.png" alt="" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link mx-4" aria-current="page" href="#">Product</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mx-4" href="#">Club</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mx-4" href="#" >Get in touch</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </Container>
    )
}
