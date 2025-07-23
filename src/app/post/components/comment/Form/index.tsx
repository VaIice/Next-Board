'use client';
import { Container, Counter } from '@/app/post/components/comment/Form/style';
import { handleFormSubmit } from '@/utils/utils';
import { useRef, useState } from 'react';

export default function Form({
  onAddComment,
}: {
  onAddComment: (text: string) => void;
}) {
  const [value, setValue] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    handleFormSubmit(e);
    if (value.trim() === '') {
      alert('댓글을 입력해주세요.');
      return;
    }
    onAddComment(value);
    setValue('');
  };

  const handleContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
    if (e.target.value.length <= 100) {
      setValue(e.target.value);
    }
  };

  return (
    <Container onSubmit={handleSubmit}>
      <div>
        <textarea
          ref={textareaRef}
          name='comment'
          placeholder='댓글을 입력해주세요.'
          value={value}
          onChange={handleContent}
          spellCheck={false}
        />
        <Counter over={value.length >= 100}>
          {value.length} / {100}
        </Counter>
      </div>
      <button type='submit'>제출</button>
    </Container>
  );
}
