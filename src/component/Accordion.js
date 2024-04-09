import React, { useContext } from 'react';
import { IoIosArrowUp,IoIosArrowDown  } from "react-icons/io";


import {AccordionContext} from './AccordionWrapper';

const AccordionItem = (props) => {

    let indexPlus;

    const indexCount = (index) => {
        indexPlus = index + 1;
        return indexPlus;
    }

    const { active, setActive } = useContext(AccordionContext)

    const eventHandler = (e, index) => {
        e.preventDefault();
        setActive(index);
     }

    return (
        <div className="rounded-[16px] border-opacity-10 border-[#000000] border-[0.4px] shadow-md mb-2 px-[10px] md:px-[32px] py-[20px] md:py-[24px] bg-[#fbfbfb] ">
            <h3 className="accordion-title">
                <button 
                
                    onClick={(e) => eventHandler(e, props.index)}
                    className={` ${active === props.index ? 'block' : 'inactive'} flex justify-between items-center w-full mb-4`}
                    aria-expanded={ active === props.index ? 'true' : 'false' }
                    aria-controls={ 'sect-' + indexCount(props.index) }
                    aria-disabled={ active === props.index ? 'true' : 'false' }
                >
                    <span className="font-semibold  md:font-bold text-lg leading-7 tracking-tighter">{props.title}
                    </span>  
                    <span className="icon-wrapper">
                        <span >{ active === props.index ? (<IoIosArrowUp  />) : (<IoIosArrowDown />)}</span>
                    </span>
                </button>
            </h3>
            <div className="accordion-panel">
                <div id={ 'sect-' + indexCount(props.index) } className={ active === props.index  ? 'block' : 'hidden' }>
                    {props.description}
                </div>
            </div>
        </div>
    )
}



export default AccordionItem; 