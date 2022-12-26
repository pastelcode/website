interface SocialMedia {
  url: string
  name: string
  icon: JSX.Element
  color?: string
}

export const socialMedia: SocialMedia[] = [
  {
    url: 'https://github.com/pastelcode',
    name: 'Github',
    icon: <i className="ri-github-line ri-2x" />,
  },
]
