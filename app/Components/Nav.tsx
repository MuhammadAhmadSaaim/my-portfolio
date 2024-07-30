import { Bars3Icon } from "@heroicons/react/16/solid"
import React from 'react'
import Link from 'next/link';

interface Props {
  openNav: () => void;
}

const Nav = ({ openNav }: Props) => {

  const goToProjectLink = (link: string) => {
    window.open(link);
  };

  return (
    <div className="w-[100%] fixed z-[10000] top-0 h-[12vh] bg-[#141c27] shadow-md">
      <div className="flex items-center justify-between w-[90%] mx-auto h-[100%]">
        <h1 className="flex-[0.6] cursor-pointer text-[25px] text-white font-bold">
          PORT
          <span className="text-purple-900">FOLIO</span>
        </h1>
        <Link href="/" className="nav-link">HOME</Link>
        <Link href="/services" className="nav-link">SERVICES</Link>
        <div onClick={() => goToProjectLink('https://medium.com/@muhammadahmadsaaim')} className="nav-link">BLOGS</div>
        <div onClick={openNav}>
          <Bars3Icon className="w-[2rem] md:hidden h-[2rem] cursor-pointer text-purple-900" />
        </div>
      </div>
    </div>
  )
}

export default Nav
