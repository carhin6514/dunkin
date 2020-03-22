import React, { Component } from "react";
import banner1 from './assets/dunkin.banner1.png';
import sand1 from './assets/sand1.png';
import sand2 from './assets/sand2.png';
import sand3 from './assets/sand3.png';
import sand4 from './assets/sand4.png';
import sand5 from './assets/sand5.png';

import styled, {css} from 'styled-components'

const Button = styled.button`
background: ${props => props.primary ? "#df1973" : "white"};
color: ${props => props.primary ? "white" : "#df1973"};

height:40px;
border-radius: 15px;
position: absolute;

&:hover {
    text-decoration: underline;
  } 
`
class Sandwiches extends Component {

    render(){
        return (
            
            <div>
            <div className="banner">
        <img src={banner1} alt="dunkin-banner" />
        </div>
        
        <div className="sand1">
            <img src={sand1} alt="sand1-pic" />
            <img src={sand2} alt="sand2-pic" />
            <span1><Button primary>Sausage Egg & Cheese</Button></span1>
            <span2><Button primary>Bacon Egg & Cheese</Button></span2>
            
            </div>
        <div className="sand2">
            <img src={sand3} alt="sand3-pic" />
            <img src={sand4} alt="sand4-pic" />
            <img src={sand5} alt="sand5-pic" />
            <span3><Button primary>Turkey Sausage</Button></span3>
            <span4><Button primary>Ham Egg & Cheese</Button></span4>
            <span5><Button primary>Veggie Egg White</Button></span5>
        </div>
            </div>
        );
    }
}

export default Sandwiches;