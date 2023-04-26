/** @format */

import { useAppSelector } from "../app/hooks"

type Props = {}

export default function BgAnimation({}: Props) {
  const { docHeight } = useAppSelector(store => store.navbar)

  return (
    <div>
      <style>
        {`
    
    @keyframes animate {
      0% {
        transform: translateY(0) rotate(0deg);
        opacity: 1;
        border-radius: 0;
      }
      80% {
     border-radius: 50%;
      }
      100% {
        transform: translateY(-${docHeight + 200}px) rotate(720deg) scaleY(0.90);
        opacity: 0;

        border-radius: 100%;
      }
    }

    .circles {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      overflow: hidden;
      z-index: -1;
    }
    
    .circles li {
      position: absolute;
      display: block;
      list-style: none;
      width: 20px;
      height: 24px;
      background: rgba(3, 97, 169, 0.2);
      animation: animate 50s linear infinite;
      bottom: -150px;
    }
    
    .circles li:nth-child(1) {
      left: 25%;
      width: 80px;
      height: 96px;
      animation-delay: 0s;
    }
    
    .circles li:nth-child(2) {
      left: 10%;
      width: 20px;
      height: 24px;
      animation-delay: 2s;
      animation-duration: 12s;
    }
    
    .circles li:nth-child(3) {
      left: 70%;
      width: 20px;
      height: 24px;
      animation-delay: 4s;
    }
    
    .circles li:nth-child(4) {
      left: 40%;
      width: 60px;
      height: 72px;
      animation-delay: 0s;
      animation-duration: 18s;
    }
    
    .circles li:nth-child(5) {
      left: 65%;
      width: 20px;
      height: 24px;
      animation-delay: 0s;
    }
    
    .circles li:nth-child(6) {
      left: 75%;
      width: 110px;
      height: 134px;
      animation-delay: 3s;
    }
    
    .circles li:nth-child(7) {
      left: 35%;
      width: 150px;
      height: 180px;
      animation-delay: 7s;
    }
    
    .circles li:nth-child(8) {
      left: 50%;
      width: 25px;
      height: 29px;
      animation-delay: 15s;
      animation-duration: 45s;
    }
    
    .circles li:nth-child(9) {
      left: 20%;
      width: 15px;
      height: 20px;
      animation-delay: 2s;
      animation-duration: 35s;
    }
    
    .circles li:nth-child(10) {
      left: 85%;
      width: 150px;
      height: 180px;
      animation-delay: 0s;
      animation-duration: 17s;
    }

  `}
      </style>

      <ul className="circles invisible md:visible" style={{ height: `${docHeight}px` }}>
        {[...Array(10)].map((x, i) => (
          <li key={i}></li>
        ))}
      </ul>
    </div>
  )
}
