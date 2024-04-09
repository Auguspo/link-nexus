"use client";
import React, { useState } from "react";

type Link = {
  label: string;
  url: string;
  description: string;
  gitURL?: string; 
};

interface LinkItemProps {
  link: Link;
}

const LinkItem: React.FC<LinkItemProps> = ({ link }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <li
      className='shadow rounded-md overflow-hidden mb-4 bg-gray-100'
      style={{ minHeight: "3.5rem" }}
    >
      <button
        type='button'
        className='w-full flex items-center justify-between p-4 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
        onClick={() => setExpanded(!expanded)}
      >
        <span className='text-lg font-medium'>{link.label}</span>
        <svg
          className={`h-6 w-6 transform transition duration-200 ${
            expanded ? "rotate-180" : ""
          }`}
          aria-hidden='true'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M15 12H9M12 5l7 7-7 7'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </button>
      <div
        className={`p-4 space-y-2 ${
          expanded ? "block" : "hidden"
        } overflow-y-auto max-h-48`}
      >
        <p className='text-sm text-justify'>{link.description}</p>
        <div className='flex space-x-2 justify-center'>
          {link.gitURL != "" && (
            <a
              href={link.gitURL}
              target='_blank'
              className='inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white'
            >
              <svg
                className='w-8 mr-3'
                viewBox='0 0 48 48'
                id='Layer_2'
                data-name='Layer 2'
                xmlns='http://www.w3.org/1999/svg'
                fill='#000000'
              >
                <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
                <g
                  id='SVGRepo_tracerCarrier'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                ></g>
                <g id='SVGRepo_iconCarrier'>
                  <defs>
                    <style>
                      {`.cls-1{fill:#ffffff;stroke:#ffffff;stroke-linecap:round;stroke-linejoin:round;fillRule:evenodd;}`}
                    </style>
                  </defs>
                  <path
                    className='cls-1 '
                    d='M24,2.5a21.5,21.5,0,0,0-6.8,41.9c1.08.2,1.47-.46,1.47-1s0-1.86,0-3.65c-6,1.3-7.24-2.88-7.24-2.88A5.7,5.7,0,0,0,9,33.68c-1.95-1.33.15-1.31.15-1.31a4.52,4.52,0,0,1,3.29,2.22c1.92,3.29,5,2.34,6.26,1.79a4.61,4.61,0,0,1,1.37-2.88c-4.78-.54-9.8-2.38-9.8-10.62a8.29,8.29,0,0,1,2.22-5.77,7.68,7.68,0,0,1,.21-5.69s1.8-.58,5.91,2.2a20.46,20.46,0,0,1,10.76,0c4.11-2.78,5.91-2.2,5.91-2.2a7.74,7.74,0,0,1,.21,5.69,8.28,8.28,0,0,1,2.21,5.77c0,8.26-5,10.07-9.81,10.61a5.12,5.12,0,0,1,1.46,4c0,2.87,0,5.19,0,5.9s.39,1.24,1.48,1A21.5,21.5,0,0,0,24,2.5'
                  ></path>
                </g>
              </svg>{" "}
              <span className="text-center font-semibold">Repositorio GitHub</span>
            </a>
          )}
          {link.url != "" && (
            <a
              href={link.url}
              target='_blank'
              className='inline-flex items-center px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white'
            >
           <svg  className='w-8 mr-3' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fillRule="evenodd" clipRule="evenodd" d="M5.63605 5.63605C7.19815 4.07395 9.73081 4.07395 11.2929 5.63605L14.1213 8.46448C15.6834 10.0266 15.6834 12.5592 14.1213 14.1213C13.7308 14.5119 13.0976 14.5119 12.7071 14.1213C12.3166 13.7308 12.3166 13.0976 12.7071 12.7071C13.4882 11.9261 13.4882 10.6597 12.7071 9.87869L9.87869 7.05026C9.09764 6.26922 7.83131 6.26922 7.05026 7.05026C6.26922 7.83131 6.26922 9.09764 7.05026 9.87869L7.75737 10.5858C8.1479 10.9763 8.14789 11.6095 7.75737 12C7.36685 12.3905 6.73368 12.3905 6.34316 12L5.63605 11.2929C4.07395 9.73081 4.07395 7.19815 5.63605 5.63605ZM11.2929 9.8787C11.6834 10.2692 11.6834 10.9024 11.2929 11.2929C10.5119 12.074 10.5119 13.3403 11.2929 14.1213L14.1213 16.9498C14.9024 17.7308 16.1687 17.7308 16.9498 16.9498C17.7308 16.1687 17.7308 14.9024 16.9498 14.1213L16.2427 13.4142C15.8521 13.0237 15.8521 12.3905 16.2427 12C16.6332 11.6095 17.2663 11.6095 17.6569 12L18.364 12.7071C19.9261 14.2692 19.9261 16.8019 18.364 18.364C16.8019 19.9261 14.2692 19.9261 12.7071 18.364L9.8787 15.5356C8.3166 13.9735 8.3166 11.4408 9.8787 9.8787C10.2692 9.48817 10.9024 9.48817 11.2929 9.8787Z" fill="#685e5e"></path>
</svg>

              <span className="text-center font-semibold" >Visitar sitio web</span>
            </a>
          )}
        </div>
      </div>
    </li>
  );
};

export default LinkItem;
