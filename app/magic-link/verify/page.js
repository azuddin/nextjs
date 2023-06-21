"use client";

import { useSearchParams } from "next/navigation";

const VerifyPage = () => {
  const params = useSearchParams();
  return (
    <div>
      <p>email: {params.get("email")}</p>
      <p>token: {params.get("token")}</p>
    </div>
  );
};

export default VerifyPage;
