import React from 'react';
import { useCounterStore } from '../store/counterStore';

// 상수 정의
const BUTTON_CLASSES = 'px-4 py-2 rounded-lg font-semibold transition-colors';
const INCREMENT_BUTTON_CLASS = `${BUTTON_CLASSES} bg-blue-500 hover:bg-blue-600 text-white`;
const DECREMENT_BUTTON_CLASS = `${BUTTON_CLASSES} bg-red-500 hover:bg-red-600 text-white`;
const RESET_BUTTON_CLASS = `${BUTTON_CLASSES} bg-gray-500 hover:bg-gray-600 text-white`;

export const Counter: React.FC = () => {
  // Zustand 스토어에서 상태와 함수 가져오기
  const { count, increment, decrement, reset } = useCounterStore();

  return (
    <div className='flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-200'>
      <div className='bg-white rounded-2xl shadow-2xl p-8 w-80'>
        {/* 제목 */}
        <h1 className='text-3xl font-bold text-center text-gray-800 mb-8'>
          카운터
        </h1>

        {/* 카운터 값 표시 */}
        <div className='bg-gray-100 rounded-lg p-6 mb-8 text-center'>
          <p className='text-gray-600 text-sm mb-2'>현재 값</p>
          <p className='text-5xl font-bold text-blue-600'>{count}</p>
        </div>

        {/* 버튼 그룹 */}
        <div className='flex flex-col gap-4'>
          {/* 증가 버튼 */}
          <button
            onClick={increment}
            className={INCREMENT_BUTTON_CLASS}
            aria-label='카운터 증가'
          >
            + 증가
          </button>

          {/* 감소 버튼 */}
          <button
            onClick={decrement}
            className={DECREMENT_BUTTON_CLASS}
            aria-label='카운터 감소'
          >
            - 감소
          </button>

          {/* 리셋 버튼 */}
          <button
            onClick={reset}
            className={RESET_BUTTON_CLASS}
            aria-label='카운터 리셋'
          >
            ↻ 리셋
          </button>
        </div>
      </div>
    </div>
  );
};
