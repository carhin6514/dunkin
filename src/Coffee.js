import React, { Component } from "react";
import coffee from './assets/pink.coffee.png';
import cup from './assets/white.coffee.png';

import styled, {css} from 'styled-components'

const Div = styled.div`
background: ${props => props.primary ? "#df1973" : "#FE7902"};

      max-width: 1600px;
      margin: 40px auto 0 auto;
      padding: 20px 50px;
      display: flex;
      height: 300px;
`

class Coffee extends Component {
    render(){
        return (
          
            <Div primary className= "column-layout">
                <h1> HOT COFFEE</h1>
                <div className="pink-coffee1">
            <img src={coffee} alt="pink.coffee" />
        
            </div>
            
            <div className="coffee-page">
            <h2>AMERICA'S FAVORITE CUP</h2>
            <p>
                <span>Our famous Hot Coffee is made from high-quality 100%</span>
                <span>Arabica beans and is freshly ground and brewed</span>
                <span>continually thoughtout the day. </span>

                </p>
                <div className="white-coffee">
                <img src={cup} alt="white.coffee"/>
                </div>
                </div>
                </Div>  
                
        );
    }
}

export default Coffee;