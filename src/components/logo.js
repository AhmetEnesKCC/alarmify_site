import * as React from "react";

function SvgComponent(props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={74.489}
      height={69.561}
      viewBox='0 0 74.489 69.561'
      {...props}
    >
      <circle
        data-name='Ellipse 1'
        cx={25.439}
        cy={25.439}
        transform='translate(11.313 17.183)'
        fill='none'
        stroke='#fff'
        strokeMiterlimit={10}
        strokeWidth={3}
        r={25.439}
      />
      <path
        data-name='Rectangle 1'
        d='M65.103 9.385h0a10.273 10.273 0 010 14.529l-1.498 1.5h0l-14.53-14.53h0l1.5-1.499a10.273 10.273 0 0114.528 0z'
        fill='none'
        stroke='#fff'
        strokeMiterlimit={10}
        strokeWidth={3}
      />
      <path
        data-name='Rectangle 2'
        d='M25.414 10.885L10.885 25.414h0l-1.499-1.5a10.273 10.273 0 010-14.528h0a10.273 10.273 0 0114.529 0l1.499 1.499h0z'
        fill='none'
        stroke='#fff'
        strokeMiterlimit={10}
        strokeWidth={3}
      />
      <g data-name='Group 1' className='hour'>
        <path
          data-name='Line 1'
          fill='none'
          stroke='#fff'
          strokeLinecap='round'
          strokeMiterlimit={10}
          strokeWidth={3}
          d='M36.751 42.622l7.259-4.191'
        />
      </g>
      <g data-name='Group 2'>
        <path
          className='minute'
          data-name='Line 2'
          fill='none'
          stroke='#fff'
          strokeLinecap='round'
          strokeMiterlimit={10}
          strokeWidth={3}
          d='M36.751 42.622l10.882 10.882'
        />
      </g>
    </svg>
  );
}

export default SvgComponent;
