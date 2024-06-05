import Image from 'next/image';
import earthLogo from '@/images/earth.png';

export default function Navbar() {
  return (
    <nav>
      <Image src={earthLogo} alt="a logo of the earth" />
      <p>Travel Journal</p>
    </nav>
  );
}
