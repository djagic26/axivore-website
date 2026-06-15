"use client";

import Image from "next/image";

export function AxivoreLogo() {
  return (
    <Image
      src="/icon.png"
      width={38}
      height={38}
      alt="Axivore"
      className="shrink-0"
      style={{ objectFit: "contain" }}
      priority
    />
  );
}
