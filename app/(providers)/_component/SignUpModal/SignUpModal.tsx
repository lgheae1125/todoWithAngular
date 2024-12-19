import React, { useRef } from "react";

function SignUpModal() {
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const handleSubmitSingUpInfo = () => {
    if (!email.current) return;
    // 여기에 supabase 회원가입 api 작성
  };

  return (
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 p-8 bg-gray-50 rounded-md"
      onClick={(e) => e.stopPropagation()}
    >
      <h2 className="text-center text-4xl font-semibold mb-8">회원가입</h2>
      <form
        className="flex flex-col items-center"
        onSubmit={handleSubmitSingUpInfo}
      >
        <input
          ref={email}
          type="email"
          placeholder="이메일"
          className="text-black w-full px-3 py-1.5 bg-gray-200 rounded-md mb-4"
        />
        <input
          ref={password}
          type="password"
          placeholder="패스워드"
          className="text-black w-full px-3 py-1.5 bg-gray-200 rounded-md mb-4"
        />
        <input
          ref={password}
          type="password"
          placeholder="패스워드 확인"
          className="text-black w-full px-3 py-1.5 bg-gray-200 rounded-md mb-8"
        />
        <button className="bg-black text-white px-8 py-2 rounded-full">
          회원가입
        </button>
      </form>
    </div>
  );
}

export default SignUpModal;
