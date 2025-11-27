import Image from "next/image";

const Logo = () => {
    return(
         <div className="flex font-mono font-bold text-lg gap-2 py-5 px-2">
          <Image src="/logo-dark.png" alt="logo" width={24} height={24} className="dark:block hidden" />
          <Image src="/logo.png" alt="logo" width={24} height={24} className="dark:hidden block" />
          <span>Compass Ui</span>
        </div>
    )
}

export default Logo
