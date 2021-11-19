import Link from 'next/link';
import LogoIcon from './icons/LogoIcon';

const Logo = ({ color }) => (
  <Link href="/" passHref>
    <button
      type="button"
      name="Home"
      aria-label="Home"
      className="cursor-pointer float-right"
      style={{ color: color || '#ffddab' }}
    >
      <LogoIcon />
    </button>
  </Link>
);

export default Logo;
