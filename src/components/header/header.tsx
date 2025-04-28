import Link from 'next/link';
import { JSX } from 'react';
import cn from 'classnames';
import styles from './header.module.css';
import Logo from '../ui/logo/logo';

export default function Header(): JSX.Element {
    return (
        <header className={cn('container', styles.header)}>
            <Link className={styles.header__link} href={'/'}>.my_blog</Link>
            <Logo />
            <Link className={styles.header__github} href={'https://github.com/timofeev-28/purpleSchool-NextJs-homework'} target='_blank'></Link>
        </header>
    );
}
