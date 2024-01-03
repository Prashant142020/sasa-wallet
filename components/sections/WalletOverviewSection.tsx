import Image from "next/image";
import React from "react";

function WalletOverviewSection() {
  return (
    <div className="py-[6.25rem] flex justify-center">
      <Image
        src="/images/app-overview.png"
        alt="overview image"
        // className="w-full"
        width={1699}
        height={786}
      />
    </div>
  );
}

export default WalletOverviewSection;
