'use client';

import { usePathname, useRouter } from 'next/navigation';
import {
  HeaderContainer,
  LogoLink,
} from '@/app/components/layout/Header/style';

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (pathname === '/') {
      window.location.reload();
    } else {
      router.push('/');
    }
  };

  return (
    <HeaderContainer>
      <LogoLink href='/' onClick={handleClick}>
        🔮 Next.js 게시판
      </LogoLink>
    </HeaderContainer>
  );
}
