import Link from 'next/link';
import styles from './logo.module.css';
import Image from 'next/image';
import { JSX } from 'react';

export default function Logo(): JSX.Element {
    return (
        <Link className={styles.logo} href={'https://purpleschool.ru/'} target='_blank' >
            <Image src={'/logo.svg'} alt='Логотип' width={200} height={61} />
        </Link>
    );
}
