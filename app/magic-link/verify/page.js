"use client";

import { useParams } from "next/navigation";

const VerifyPage = () => {
  const params = useParams();
  return (
    <div>
      <p>email: {params.email}</p>
      <p>token: {params.token}</p>
    </div>
  );
};

export default VerifyPage;
