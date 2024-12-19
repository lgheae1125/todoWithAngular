import { useModalStore } from "@/zustand/modalStore/modalStore";
import React, { useRef } from "react";
import SignUpModal from "../SignUpModal/SignUpModal";

function LogInModal() {
  const openModal = useModalStore((state) => state.openModal);
  const closeModal = useModalStore((state) => state.closeModal);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const handleSubmitLogInInfo = () => {
    if (!email.current) return;
    // 여기에 supabase 로그인 api 작성
  };
  const handleClickSignUpButton = () => {
    openModal(<SignUpModal />);
  };

  return (
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 p-8 bg-gray-50 rounded-md flex flex-col items-center"
      onClick={(e) => e.stopPropagation()}
    >
      <h2 className="text-4xl font-semibold mb-8">로그인</h2>
      <form
        className="flex flex-col items-center w-full"
        onSubmit={handleSubmitLogInInfo}
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
          className="text-black w-full px-3 py-1.5 bg-gray-200 rounded-md mb-8"
        />
        <button className="bg-black text-white px-8 py-2 rounded-full mb-4">
          로그인
        </button>
      </form>
      <button onClick={handleClickSignUpButton} className="underline text-sm">
        회원가입하기
      </button>
    </div>
  );
}

export default LogInModal;
