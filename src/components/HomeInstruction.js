import React from 'react';
import {
    NavLink,
  } from 'react-router-dom';
import Icon1 from '../assets/images/Icon-1.svg';
import Icon2 from '../assets/images/Icon-2.svg';
import Icon3 from '../assets/images/Icon-3.svg';
import Icon4 from '../assets/images/Icon-4.svg';

function HomeInstruction() {
  return (
    <div id="WhatIs" className='home_instruction_info'>
      <div className='home_instr_title'>Wystarczą 4 proste kroki</div>
      <div className='home_instr_4steps'>
        <ul className='home_instr_1step'>
          <li className='home_instr_1step_img'><img src= { Icon1 } alt="icon1"/></li>
          <li className='home_instr_1step_title'>Wybierz rzeczy</li>
          <li className='home_instr_1step_desc'>ubrania, zabawki,<br></br>
          sprzet i inne</li>
        </ul>
        <ul className='home_instr_2step'>
          <li className='home_instr_2step_img'><img src= { Icon2 } alt="icon2"/></li>
          <li className='home_instr_2step_title'>Spakuj je</li>
          <li className='home_instr_2step_desc'>skorzystaj z<br></br>
          worków na śmieci</li>
        </ul>
        <ul className='home_instr_3step'>
          <li className='home_instr_3step_img'><img src= { Icon3 } alt="icon3"/></li>
          <li className='home_instr_3step_title'>Zdecyduj komu<br></br>
          chcesz pomóc</li>
          <li className='home_instr_3step_desc'>wybierz zaufane<br></br>
          miejsce</li>
        </ul>
        <ul className='home_instr_4step'>
          <li className='home_instr_1step_img'><img src= { Icon4 } alt="icon4"/></li>
          <li className='home_instr_1step_title'>Zamów kuriera</li>
          <li className='home_instr_1step_desc'>kurier przyjedzie<br></br>
          w dogodnym terminie</li>
        </ul>
      </div>
      <div className='home_instr_final_entry'><p class='home_instr_final_entry_button'><NavLink to='/login'>ODDAJ<br></br>
      RZECZY</NavLink></p></div>
    </div>
  );
}

export default HomeInstruction;