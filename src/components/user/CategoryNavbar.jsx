import { useState } from "react";
import styled from "styled-components";

export default function Navbar2() {
  const [filterType, setFilterType] = useState('all');
  
  const NavWrapper = styled.div`
    background: #1a1b21;
    padding: 24px 0;
    box-shadow: 
      0 5px 25px rgba(0, 0, 0, 0.2),
      0 3px 12px rgba(99, 102, 241, 0.1);
    border-bottom: 1px solid rgba(99, 102, 241, 0.1);
    backdrop-filter: blur(12px);
    position: sticky;
    top: 0;
    z-index: 40;
    width: 100%;
    overflow: hidden;
  `;

  const NavContent = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    overflow-x: auto;
    scrollbar-width: none;
    padding: 0 32px;
    -webkit-overflow-scrolling: touch;
    scroll-behavior: smooth;
    
    &::-webkit-scrollbar {
      display: none;
    }
    
    @media (max-width: 768px) {
      padding: 0 16px;
      gap: 8px;
      justify-content: flex-start;
      flex-wrap: nowrap;
      width: 100%;
      overflow-x: auto;
      mask-image: none;
      -webkit-mask-image: none;
      
      /* Force horizontal scroll */
      display: inline-flex;
      flex-direction: row;
      white-space: nowrap;
    }
  `;

  const NavButton = styled.button`
    padding: 15px 30px;
    border-radius: 40px;
    white-space: nowrap;
    display: inline-block;
    min-width: fit-content;
    width: auto;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    font-size: 15px;
    font-weight: 500;
    letter-spacing: 0.3px;
    border: 2px solid ${props => props.active ? '#6366f1' : 'rgba(99, 102, 241, 0.08)'};
    // position: relative;
    overflow: hidden;

    ${props => props.active ? `
      background: linear-gradient(135deg, #6366f1, #818cf8);
      color: #ffffff;
      box-shadow: 
        0 4px 15px rgba(99, 102, 241, 0.3),
        0 2px 8px rgba(0, 0, 0, 0.1),
        inset 0 -1px 2px rgba(0, 0, 0, 0.1);
      transform: translateY(-1px);
      
      &:hover {
        transform: translateY(-2px);
        box-shadow: 
          0 6px 20px rgba(99, 102, 241, 0.35),
          0 3px 10px rgba(0, 0, 0, 0.1);
        background: linear-gradient(135deg, #818cf8, #6366f1);
      }
    ` : `
      background: rgba(255, 255, 255, 0.05);
      color: #e2e8f0;
      backdrop-filter: blur(8px);
      
      &:hover {
        background: rgba(99, 102, 241, 0.08);
        border-color: rgba(99, 102, 241, 0.25);
        color: #818cf8;
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba(99, 102, 241, 0.1);
      }
    `}

    &:active {
      transform: translateY(1px);
    }

    /* Subtle glow effect */
    ${props => props.active && `
      &:after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 140%;
        height: 140%;
        background: radial-gradient(circle, rgba(99, 102, 241, 0.3), transparent 70%);
        border-radius: 50%;
        transform: translate(-50%, -50%) scale(0);
        animation: glow 2s ease-out infinite;
      }

      @keyframes glow {
        0% { transform: translate(-50%, -50%) scale(0); opacity: 0.6; }
        100% { transform: translate(-50%, -50%) scale(1.5); opacity: 0; }
      }
    `}

    /* Subtle shine effect */
    &:before {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: linear-gradient(
        45deg,
        transparent,
        rgba(255, 255, 255, 0.1),
        transparent
      );
      transform: translateX(-100%);
      transition: transform 0.6s;
    }

    &:hover:before {
      transform: translateX(100%);
    }

    @media (max-width: 768px) {
      padding: 10px 16px;
      font-size: 14px;
      display: inline-block;
      width: auto;
      min-width: min-content;
      white-space: nowrap;
      flex-shrink: 0;
      overflow: visible;
    }
  `;

  return (

    <div>
      <NavWrapper >
        <NavContent>
          <NavButton active={filterType === 'all'} onClick={() => setFilterType('all')}>
            Bütün elanlar
          </NavButton>
          <NavButton active={filterType === 'new'} onClick={() => setFilterType('new')}>
            Yeni elanlar
          </NavButton>
          <NavButton active={filterType === 'salon'} onClick={() => setFilterType('salon')}>
            Salon
          </NavButton>
          <NavButton active={filterType === 'rent'} onClick={() => setFilterType('rent')}>
            İcarə
          </NavButton>
          <NavButton active={filterType === 'spare'} onClick={() => setFilterType('spare')}>
            Ehtiyat hissələri
          </NavButton>
          <NavButton active={filterType === 'wheels'} onClick={() => setFilterType('wheels')}>
            Təkərlər
          </NavButton>
          <NavButton active={filterType === 'aaaa'} onClick={() => setFilterType('wheels')}>
            Nomre satisi
          </NavButton>
        </NavContent>
      </NavWrapper >
    </div>
  )
}