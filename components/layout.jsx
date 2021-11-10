import Image from "next/image";

const Layout = () => {
  return (
    <div className="flex">
      <div className="flex-auto">
        <Image
          src="/transparentLogo.png"
          width={300}
          height={300}
          alt="Olin Contruction Logo"
        ></Image>
      </div>
      <div className="flex-auto">
        <div className="py-4 text-sm">
          <div className="inline-block px-8">651.248.2950</div>
          <div className="inline-block px-16">steveolin@somtel.net</div>
        </div>
        <div className="py-8">
          <header>
            <div className="inline-block px-16">About</div>
            <div className="inline-block px-16">Services</div>
            <div className="inline-block px-16">Contact</div>
          </header>
        </div>
      </div>
    </div>
  );
};

export default Layout;
