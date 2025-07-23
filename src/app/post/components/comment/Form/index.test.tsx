import { screen, fireEvent } from '@testing-library/react';
import Form from '@/app/post/components/comment/Form';
import '@testing-library/jest-dom';
import { renderWithTheme } from '@/utils/test';

describe('Form 컴포넌트', () => {
  const setup = () => {
    const onAddComment = jest.fn();
    renderWithTheme(<Form onAddComment={onAddComment} />);
    const textarea = screen.getByPlaceholderText(
      '댓글을 입력해주세요.'
    ) as HTMLTextAreaElement;
    const button = screen.getByRole('button', { name: '제출' });
    return { textarea, button, onAddComment };
  };

  test('입력한 텍스트 반영', () => {
    const { textarea } = setup();
    fireEvent.change(textarea, { target: { value: '테스트 댓글' } });
    expect(textarea.value).toBe('테스트 댓글');
  });

  test('글자 수 렌더링', () => {
    const { textarea } = setup();
    fireEvent.change(textarea, { target: { value: '12345' } });
    expect(screen.getByText('5 / 100')).toBeInTheDocument();
  });

  test('댓글 최대 길이 제한', () => {
    const { textarea } = setup();
    const overText = 'a'.repeat(150);
    fireEvent.change(textarea, { target: { value: overText } });
    expect(textarea.value.length).toBeLessThanOrEqual(100);
  });

  test('빈 댓글 제출 시 alert 호출', () => {
    const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});
    const { button } = setup();
    fireEvent.click(button);
    expect(alertMock).toHaveBeenCalledWith('댓글을 입력해주세요.');
    alertMock.mockRestore();
  });

  test('유효한 댓글 제출 시 onAddComment 호출 및 초기화', () => {
    const { textarea, button, onAddComment } = setup();
    fireEvent.change(textarea, { target: { value: '정상 댓글' } });
    fireEvent.click(button);
    expect(onAddComment).toHaveBeenCalledWith('정상 댓글');
    expect(textarea.value).toBe('');
  });
});
