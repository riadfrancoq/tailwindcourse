"use client";
import {useState} from 'react';
import { ArrowDown } from './arrowDown';
export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectValue, setSelectValue] = useState("Option 1");

  const updateValue = (value: string) => {
    setSelectValue(value);
    setIsOpen(false);
  }

  return (
  <div>
    <h1> This is a title</h1>
    <h2 > This is a subtitle</h2>
    <p >This is a paragraph</p>
    <a> This is a an anchor </a>
    <div className="my-4">
      <button className="btn btn-primary">This is a button</button>
    </div>
    <div className="my-4">
      <button className="btn btn-secondary">This is a secundary button</button>
    </div>
    <div className="my-4">
      <button disabled className="btn btn-primary">This is a disabled button</button>
    </div>
    <div>
      <input type="text"  placeholder="E-mail" />
    </div>
    <div>
      <input disabled type="text"  />
    </div>
    <div>
      <input type="date" />
    </div>
    <div className="flex items-start">
      <input type="checkbox" id="checkbox" />
      <label htmlFor="checkbox">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque nisi deleniti quo nesciunt similique corrupti ducimus cupiditate quasi, blanditiis quas et corporis unde. Alias velit consequatur, iusto nemo quia voluptas.</label>
    </div>
    <div>
      <select>
        <option> Option 1 </option>
        <option> Option 2 </option>
      </select>
    </div>
    <div className="Select">
    <div className='child flex items-center justify-between' onClick={(() => setIsOpen(!isOpen))}><span>
    {selectValue}</span>
    < ArrowDown className={isOpen ? 'rotate-180': ""}/>
    </div>
    {isOpen && (
          <div>
          <ul className="flex flex-col divide-y border-t" >
            <li className='child' onClick={()=>updateValue("Option 1")}>Option 1</li>
            <li className='child' onClick={()=>updateValue("Option 2")}>Option 2</li>
            <li className='child' onClick={()=>updateValue("Option 3")}>Option 3</li>
          </ul>
        </div>
    )}

    </div>
    {/* <h1> This is a title</h1>
    <h2> This is a subtitle</h2> */}

  </div>
  
);
}

