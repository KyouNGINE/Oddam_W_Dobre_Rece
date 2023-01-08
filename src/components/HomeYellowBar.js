import React from 'react';
import {
    NavLink,
  } from 'react-router-dom';

function HomeYellowBar() {
  return (
    <div className='home_yellow_bar'>
      <ul className='home_yellow_bags'>
        <li className='home_y_bags_number'>10</li>
        <li className='home_y_bags_title'>ODDANYCH WORKÓW</li>
        <li className='home_y_bags_desc'>Lorem ipsum dolor sit amet, consectetur adipisc
        <br></br>Pellentesque vel enim a elit viverra elementuma
        <br></br>Aliquam erat volutpat.</li>
      </ul>
      <ul className='home_yellow_orgs'>
        <li className='home_y_org_number'>5</li>
        <li className='home_y_org_title'>WSPARTYCH ORGANIZACJI</li>
        <li className='home_y_collect_title'>Lorem ipsum dolor sit amet, consectetur adipisc
        <br></br>Pellentesque vel enim a elit viverra elementuma
        <br></br>Aliquam erat volutpat.</li>
      </ul>
      <ul className='home_yellow_clcts'>
        <li className='home_y_col_number'>7</li>
        <li className='home_y_col_title'>ZORGANIZOWANYCH ZBIÓREK</li>
        <li className='home_y_collect_desc'>Lorem ipsum dolor sit amet, consectetur adipisc
        <br></br>Pellentesque vel enim a elit viverra elementuma
        <br></br>Aliquam erat volutpat.</li>
      </ul>
    </div>
  );
}

export default HomeYellowBar;