import { useRouter } from "next/router";

const VerifyPage = () => {
  const { query } = useRouter();
  const { email, token } = query;
  return (
    <div>
      <p>email: {email}</p>
      <p>token: {token}</p>
    </div>
  );
};

export default VerifyPage;
