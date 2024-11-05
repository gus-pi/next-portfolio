import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

type SocialProps = {
  containerStyles: string;
  iconStyles: string;
};

const socials = [
  { icon: <FaGithub />, path: 'https://github.com/gus-pi' },
  {
    icon: <FaLinkedin />,
    path: 'https://www.linkedin.com/in/gustavo-pinedo-b320108a/',
  },
];

const Social = ({ containerStyles, iconStyles }: SocialProps) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link
          key={index}
          href={item.path}
          className={iconStyles}
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;
