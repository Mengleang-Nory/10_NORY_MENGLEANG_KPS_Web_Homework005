import React from "react";

const ContainerComponent = ({ children }) => {
  return (
    <section className="w-[1400px] h-[800px] ml-[454px] mt-[80px] bg-white rounded-t-4xl p-[80px] relative">
      {children}
    </section>
  );
};

export default ContainerComponent;
