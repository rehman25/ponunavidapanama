import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import style from "./header.module.css"


const Header = () => {
  return (
    <div className={`container-fluid ${style.container}`}>
        <div className="row">
            <div className={`col-lg-8 ${style.HeaderCol}`}>
                <Link href="/" className={style.Link}>General information</Link>
                <Link href="/" className={style.Link}>Our family</Link>
                <Link href="/" className={style.Link}>Applications</Link>
                <Link href="/" className={style.Link}>Contact us</Link>
                
            </div>
            <div className={`col-lg-4 ${style.HeaderLogo}`}>
                <div>
                    <Image
                        src="/images/logo.png"
                        alt="Logo"
                        width={120}
                        height={40}
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header