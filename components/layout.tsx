import React from "react";

const MainLayout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <header className="p-2 border-b border-[#eee]">
        <a href="/">Home</a> • <a href="/about">About</a> • <a href="/ano">Ano</a>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
