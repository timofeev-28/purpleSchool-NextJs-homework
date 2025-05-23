'use client';

import Link from 'next/link';
import { JSX } from 'react';
import cn from 'classnames';
import styles from './header.module.css';
import Logo from '../ui/logo/logo';
import Github from './github/github';
import { GithubContextProvider } from '@/src/context/githubContext';

const githubLink = 'https://github.com/timofeev-28/purpleSchool-NextJs-homework';

export function Header(): JSX.Element {
    return (
        <GithubContextProvider github={githubLink}>
            <header className={cn('container', styles.header)}>
                <Link className={styles.header__link} href={'/'}>.my_blog</Link>
                <Logo />
                <Github />
            </header>
        </GithubContextProvider>
    );
}
