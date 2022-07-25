import { BsGithub, BsInstagram, BsYoutube } from 'react-icons/bs'
import { IconType } from 'react-icons/lib'

interface SocialMedia {
  url: string
  name: string
  icon: IconType
  color?: string
}

export const socialMedia: SocialMedia[] = [
  {
    url: 'https://github.com/pastelcode',
    name: 'Github',
    icon: BsGithub,
  },
  {
    url: 'https://www.instagram.com/pastelcode.dev',
    name: 'Instagram',
    icon: BsInstagram,
  },
  {
    url: 'https://www.youtube.com/channel/UCOsYvHAtI6xtPcN3NORiU2Q',
    name: 'YouTube',
    icon: BsYoutube,
  },
]
