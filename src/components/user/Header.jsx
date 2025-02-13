// components/Header.tsx
"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Banner from '../common/Banner';
import { HoverDropdown } from '../common/HoverDropdown';
import CurrencySwitcher from './CurrencySwitcher';
import Register from '../dialogs/register';
import Login from "../dialogs/login"
import { Button, MenuHandler, MenuItem, MenuList } from '@material-tailwind/react';
import { Menu } from '@material-tailwind/react';
import { FiChevronRight } from 'react-icons/fi';
import { Card } from '@material-tailwind/react';
import { FaBalanceScale, FaChevronCircleLeft, FaHeart } from 'react-icons/fa';
import { Typography } from '@material-tailwind/react';
import { Avatar } from '@material-tailwind/react';
import { useEffect } from 'react';
import { useAuth } from '@/src/lib/AuthContext';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const [loginModalState, setLoginModalState] = useState(false)
  const [registerModalState, setRegisterModalState] = useState(false)

  const [openMenu, setOpenMenu] = useState(false);


  const { user, setUser, signInWithGoogle, isLoading, error, logout } = useAuth()


  function toggleLoginModalState() {
    setLoginModalState(prev => !prev)
  }
  function toggleRegisterModalState() {
    setRegisterModalState(prev => !prev)
  }

  function toggleLoginRegisterState() {
    setLoginModalState(prev => !prev)
    setRegisterModalState(prev => !prev)
  }



  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleProfileDropdown = () => setIsProfileDropdownOpen(!isProfileDropdownOpen);

  const services = [
    { label: 'Gomruk kalkulyatoru', href: '/gomruk-kalkulyatoru', description: 'Gomruk kalkulyatoru' },
    { label: 'Onlayn servis', href: '/onlayn-servis', description: 'Onlayn servis' },
    { label: 'Sen de xaricden sifaris et', href: '/sen-de-xaricden-sifaris-et', description: 'Sen de xaricden sifaris et' },
  ]


  const links = [
    // { href: "/axtar", label: "Axtar" },
    // { href: "/servisler", label: "Servisler" },
    // { href: "/elek", label: "Elektromobillər" },
    // { href: "/", label: "İcarəea" },
    // { href: "/qeydiyyat-nisanlariii", label: "Qeydiyyat nişanlarıa" }

    // { href: "/kataloq", label: "Kataloq" },
    // { href: "/elaqe", label: "Əlaqə" },
    // { href: "/faq", label: "FAQ" },
    // { href: "/bonus", label: "Bonus" },
  ]


  function wrapGoToLiked(e) {
    if (!user) {
      e.preventDefault();
      return toggleLoginModalState()
    }
    window.location.href = "/beyendiklerim"
  }



  return (
    <header className="bg-slate-100 shadow-md sticky top-0 z-50">

      <Register state={registerModalState} setState={setRegisterModalState} toggleLoginRegisterState={toggleLoginRegisterState} />
      <Login state={loginModalState} setState={setLoginModalState} toggleLoginRegisterState={toggleLoginRegisterState} />

      <div className="mx-auto flex items-center justify-between py-2 px-4" style={{ maxWidth: "1000px" }}>

        <Link href="/" className="text-2xl font-bold ">
          <div className=" ">
            <Image src="/icons/logo.png" width={100} height={50} alt="Logo" />
            {/* <Link href="/">AvtoBeh</Link> */}
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center">

          <Menu allowHover>
            <MenuHandler>
              <Button
                variant="text"
                className="flex items-center gap-3   text-sm font-normal capitalize tracking-normal"
              >
                Servislər
                {/* <FiChevronRight
                  strokeWidth={2.5}
                  className={`h-3.5 w-3.5 transition-transform ${openMenu ? "rotate-180" : ""
                    }`}
                /> */}
              </Button>
            </MenuHandler>
            <MenuList className="hidden md:grid w-[36rem]  gap-3 border-0 ">
              {/* <Card
                color="indigo"
                shadow={false}
                className="col-span-3 flex h-full w-full items-center justify-center rounded-2xl p-4"
              >
                <FaChevronCircleLeft strokeWidth={1} className="h-10 w-10" />
                <Typography className="mt-5 text-center" variant="h5">
                  Material Tailwind PRO
                </Typography>
              </Card> */}
              <ul className="col-span-4 grid grid-cols-2 w-full flex-col gap-1 border-0">
                {services.map((service, index) => (
                  <a href="#" key={service.label}>
                    <MenuItem>
                      <Typography variant="h6" color="blue-gray" className="mb-1">
                        {service.label}
                      </Typography>
                      <Typography
                        variant="small"
                        color="gray"
                        className="font-normal"
                      >
                        {service.description}
                      </Typography>
                    </MenuItem>
                  </a>
                ))}
              </ul>
            </MenuList>
          </Menu>




          <div className='flex items-center gap-4 mr-5'>
            {links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className=" text-sm  rounded-md  font-normal hover:bg-red-600 hover:text-white transition-all p-4"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/muqayise" className='hover:text-red-600 hover:bg-red-100 p-2 rounded-md ' >
              <FaBalanceScale strokeWidth={1} size={20} />
            </Link>
            <Link onClick={wrapGoToLiked} href="/beyendiklerim" className='hover:text-red-600 hover:bg-red-100 p-2 rounded-md ' >
              <FaHeart strokeWidth={1} size={20} />
            </Link>

            <Link href="/avtomobil-sat" className='hover:text-red-600 hover:bg-red-100 p-2 rounded-md ' >
              <Image src="/icons/plus-circle.svg" width={32} height={32} alt="Logo" />
            </Link>


          </div>

          {
            !user && (
              <Button onClick={() => toggleLoginModalState()} variant="text" className="flex items-center gap-3   text-sm font-normal capitalize tracking-normal">
                Daxil ol
                <FiChevronRight
                  strokeWidth={2.5}
                  className={`h-3.5 w-3.5 transition-transform ${openMenu ? "rotate-180" : ""
                    }`}
                />
              </Button>

            )
          }

          {
            user && (
              <Menu allowHover >
                <MenuHandler>
                  {/* <Avatar
                    variant="circular"
                    alt="tania andrew"
                    className="cursor-pointer"
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                  /> */}
                  <div className='w-12 h-12 rounded-full bg-blue-gray-50 hover:bg-blue-gray-100 cursor-pointer flex justify-center items-center'>
                    <span>  {user.name[0].toUpperCase()}  </span>
                  </div>
                </MenuHandler>
                <MenuList>
                  <MenuItem className="flex items-center gap-2">
                    <Link href="/profil-melumatlarim" className='flex items-center gap-2' >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M16 8C16 10.1217 15.1571 12.1566 13.6569 13.6569C12.1566 15.1571 10.1217 16 8 16C5.87827 16 3.84344 15.1571 2.34315 13.6569C0.842855 12.1566 0 10.1217 0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0C10.1217 0 12.1566 0.842855 13.6569 2.34315C15.1571 3.84344 16 5.87827 16 8ZM10 5C10 5.53043 9.78929 6.03914 9.41421 6.41421C9.03914 6.78929 8.53043 7 8 7C7.46957 7 6.96086 6.78929 6.58579 6.41421C6.21071 6.03914 6 5.53043 6 5C6 4.46957 6.21071 3.96086 6.58579 3.58579C6.96086 3.21071 7.46957 3 8 3C8.53043 3 9.03914 3.21071 9.41421 3.58579C9.78929 3.96086 10 4.46957 10 5ZM8 9C7.0426 8.99981 6.10528 9.27449 5.29942 9.7914C4.49356 10.3083 3.85304 11.0457 3.454 11.916C4.01668 12.5706 4.71427 13.0958 5.49894 13.4555C6.28362 13.8152 7.13681 14.0009 8 14C8.86319 14.0009 9.71638 13.8152 10.5011 13.4555C11.2857 13.0958 11.9833 12.5706 12.546 11.916C12.147 11.0457 11.5064 10.3083 10.7006 9.7914C9.89472 9.27449 8.9574 8.99981 8 9Z"
                          fill="#90A4AE"
                        />
                      </svg>
                      <Typography variant="small" className="font-medium">
                        Profil
                      </Typography>
                    </Link>
                  </MenuItem>
                  {/* <MenuItem className="flex items-center gap-2">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M9.48999 1.17C9.10999 -0.39 6.88999 -0.39 6.50999 1.17C6.45326 1.40442 6.34198 1.62213 6.18522 1.80541C6.02845 1.9887 5.83063 2.13238 5.60784 2.22477C5.38505 2.31716 5.1436 2.35564 4.90313 2.33709C4.66266 2.31854 4.42997 2.24347 4.22399 2.118C2.85199 1.282 1.28199 2.852 2.11799 4.224C2.65799 5.11 2.17899 6.266 1.17099 6.511C-0.390006 6.89 -0.390006 9.111 1.17099 9.489C1.40547 9.54581 1.62322 9.65719 1.80651 9.81407C1.98979 9.97096 2.13343 10.1689 2.22573 10.3918C2.31803 10.6147 2.35639 10.8563 2.33766 11.0968C2.31894 11.3373 2.24367 11.5701 2.11799 11.776C1.28199 13.148 2.85199 14.718 4.22399 13.882C4.42993 13.7563 4.66265 13.6811 4.90318 13.6623C5.14371 13.6436 5.38527 13.682 5.60817 13.7743C5.83108 13.8666 6.02904 14.0102 6.18592 14.1935C6.34281 14.3768 6.45419 14.5945 6.51099 14.829C6.88999 16.39 9.11099 16.39 9.48899 14.829C9.54599 14.5946 9.65748 14.377 9.8144 14.1939C9.97132 14.0107 10.1692 13.8672 10.3921 13.7749C10.6149 13.6826 10.8564 13.6442 11.0969 13.6628C11.3373 13.6815 11.57 13.7565 11.776 13.882C13.148 14.718 14.718 13.148 13.882 11.776C13.7565 11.57 13.6815 11.3373 13.6628 11.0969C13.6442 10.8564 13.6826 10.6149 13.7749 10.3921C13.8672 10.1692 14.0107 9.97133 14.1939 9.81441C14.377 9.65749 14.5946 9.546 14.829 9.489C16.39 9.11 16.39 6.889 14.829 6.511C14.5945 6.45419 14.3768 6.34281 14.1935 6.18593C14.0102 6.02904 13.8666 5.83109 13.7743 5.60818C13.682 5.38527 13.6436 5.14372 13.6623 4.90318C13.681 4.66265 13.7563 4.42994 13.882 4.224C14.718 2.852 13.148 1.282 11.776 2.118C11.5701 2.24368 11.3373 2.31895 11.0968 2.33767C10.8563 2.35639 10.6147 2.31804 10.3918 2.22574C10.1689 2.13344 9.97095 1.9898 9.81407 1.80651C9.65718 1.62323 9.5458 1.40548 9.48899 1.171L9.48999 1.17ZM7.99999 11C8.79564 11 9.55871 10.6839 10.1213 10.1213C10.6839 9.55871 11 8.79565 11 8C11 7.20435 10.6839 6.44129 10.1213 5.87868C9.55871 5.31607 8.79564 5 7.99999 5C7.20434 5 6.44128 5.31607 5.87867 5.87868C5.31606 6.44129 4.99999 7.20435 4.99999 8C4.99999 8.79565 5.31606 9.55871 5.87867 10.1213C6.44128 10.6839 7.20434 11 7.99999 11Z"
                        fill="#90A4AE"
                      />
                    </svg>

                    <Typography variant="small" className="font-medium">
                      Edit Profile
                    </Typography>
                  </MenuItem> */}
                  <MenuItem className="flex items-center gap-2">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M2 0C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V12C0 12.5304 0.210714 13.0391 0.585786 13.4142C0.960859 13.7893 1.46957 14 2 14H12C12.5304 14 13.0391 13.7893 13.4142 13.4142C13.7893 13.0391 14 12.5304 14 12V2C14 1.46957 13.7893 0.960859 13.4142 0.585786C13.0391 0.210714 12.5304 0 12 0H2ZM2 2H12V9H10L9 11H5L4 9H2V2Z"
                        fill="#90A4AE"
                      />
                    </svg>

                    <Typography variant="small" className="font-medium">
                      Inbox
                    </Typography>
                  </MenuItem>
                  <MenuItem className="flex items-center gap-2">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M16 8C16 10.1217 15.1571 12.1566 13.6569 13.6569C12.1566 15.1571 10.1217 16 8 16C5.87827 16 3.84344 15.1571 2.34315 13.6569C0.842855 12.1566 0 10.1217 0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0C10.1217 0 12.1566 0.842855 13.6569 2.34315C15.1571 3.84344 16 5.87827 16 8ZM14 8C14 8.993 13.759 9.929 13.332 10.754L11.808 9.229C12.0362 8.52269 12.0632 7.76679 11.886 7.046L13.448 5.484C13.802 6.249 14 7.1 14 8ZM8.835 11.913L10.415 13.493C9.654 13.8281 8.83149 14.0007 8 14C7.13118 14.0011 6.27257 13.8127 5.484 13.448L7.046 11.886C7.63267 12.0298 8.24426 12.039 8.835 11.913ZM4.158 9.117C3.96121 8.4394 3.94707 7.72182 4.117 7.037L4.037 7.117L2.507 5.584C2.1718 6.34531 1.99913 7.16817 2 8C2 8.954 2.223 9.856 2.619 10.657L4.159 9.117H4.158ZM5.246 2.667C6.09722 2.22702 7.04179 1.99825 8 2C8.954 2 9.856 2.223 10.657 2.619L9.117 4.159C8.34926 3.93538 7.53214 3.94687 6.771 4.192L5.246 2.668V2.667ZM10 8C10 8.53043 9.78929 9.03914 9.41421 9.41421C9.03914 9.78929 8.53043 10 8 10C7.46957 10 6.96086 9.78929 6.58579 9.41421C6.21071 9.03914 6 8.53043 6 8C6 7.46957 6.21071 6.96086 6.58579 6.58579C6.96086 6.21071 7.46957 6 8 6C8.53043 6 9.03914 6.21071 9.41421 6.58579C9.78929 6.96086 10 7.46957 10 8Z"
                        fill="#90A4AE"
                      />
                    </svg>
                    <Typography variant="small" className="font-medium">
                      FAQ (Suallar)
                    </Typography>
                  </MenuItem>
                  <hr className="my-2 border-blue-gray-50" />
                  <MenuItem className="flex items-center gap-2" onClick={logout} >
                    <svg
                      width="16"
                      height="14"
                      viewBox="0 0 16 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M1 0C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1V13C0 13.2652 0.105357 13.5196 0.292893 13.7071C0.48043 13.8946 0.734784 14 1 14C1.26522 14 1.51957 13.8946 1.70711 13.7071C1.89464 13.5196 2 13.2652 2 13V1C2 0.734784 1.89464 0.48043 1.70711 0.292893C1.51957 0.105357 1.26522 0 1 0ZM11.293 9.293C11.1108 9.4816 11.01 9.7342 11.0123 9.9964C11.0146 10.2586 11.1198 10.5094 11.3052 10.6948C11.4906 10.8802 11.7414 10.9854 12.0036 10.9877C12.2658 10.99 12.5184 10.8892 12.707 10.707L15.707 7.707C15.8945 7.51947 15.9998 7.26516 15.9998 7C15.9998 6.73484 15.8945 6.48053 15.707 6.293L12.707 3.293C12.6148 3.19749 12.5044 3.12131 12.3824 3.0689C12.2604 3.01649 12.1292 2.9889 11.9964 2.98775C11.8636 2.9866 11.7319 3.0119 11.609 3.06218C11.4861 3.11246 11.3745 3.18671 11.2806 3.2806C11.1867 3.3745 11.1125 3.48615 11.0622 3.60905C11.0119 3.73194 10.9866 3.86362 10.9877 3.9964C10.9889 4.12918 11.0165 4.2604 11.0689 4.3824C11.1213 4.50441 11.1975 4.61475 11.293 4.707L12.586 6H5C4.73478 6 4.48043 6.10536 4.29289 6.29289C4.10536 6.48043 4 6.73478 4 7C4 7.26522 4.10536 7.51957 4.29289 7.70711C4.48043 7.89464 4.73478 8 5 8H12.586L11.293 9.293Z"
                        fill="#90A4AE"
                      />
                    </svg>
                    <Typography variant="small" className="font-medium">
                      Çıxış
                    </Typography>
                  </MenuItem>
                </MenuList>
              </Menu>
            )
          }



        </nav>



        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center gap-2">
          <Link href="/muqayise" className='hover:text-red-600 hover:bg-red-100 p-2 rounded-md'>
            <FaBalanceScale strokeWidth={1} size={20} />
          </Link>
          <Link onClick={wrapGoToLiked} href="/beyendiklerim" className='hover:text-red-600 hover:bg-red-100 p-2 rounded-md'>
            <FaHeart strokeWidth={1} size={20} />
          </Link>
          <button onClick={toggleMobileMenu} className="p-2 hover:bg-red-100 rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5M3.75 12h16.5m-16.5 6.75h16.5" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-50">
            <div className="bg-white h-full w-64 p-4 absolute right-0">
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-bold">Menu</h2>
                <button onClick={toggleMobileMenu} className="p-2 hover:bg-red-100 rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="flex flex-col gap-2">
                {services.map((service) => (
                  <Link
                    key={service.label}
                    href={service.href}
                    className="p-2 hover:bg-red-100 rounded-md"
                    onClick={toggleMobileMenu}
                  >
                    {service.label}
                  </Link>
                ))}
                
                <Link href="/avtomobil-sat" className="p-2 hover:bg-red-100 rounded-md flex items-center gap-2">
                  <Image src="/icons/plus-circle.svg" width={24} height={24} alt="Add" />
                  <span>Avtomobil sat</span>
                </Link>

                {!user ? (
                  <button
                    onClick={() => {
                      toggleMobileMenu();
                      toggleLoginModalState();
                    }}
                    className="p-2 hover:bg-red-100 rounded-md text-left"
                  >
                    Daxil ol
                  </button>
                ) : (
                  <Link href="/profil-melumatlarim" className="p-2 hover:bg-red-100 rounded-md" onClick={toggleMobileMenu}>
                    Profil
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </div>


    </header>
  );
};

export default Header;
