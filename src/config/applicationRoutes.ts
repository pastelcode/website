import { IconType } from 'react-icons'
import { BiAt, BiHome, BiTask } from 'react-icons/bi'

export interface Route {
  path: string
  name: string
  icon: IconType
}

const applicationRoutes: Route[] = [
  {
    path: '/',
    name: 'Home',
    icon: BiHome,
  },
  {
    path: '/projects',
    name: 'Projects',
    icon: BiTask,
  },
  {
    path: '/contact',
    name: 'Contact',
    icon: BiAt,
  },
]

export default applicationRoutes
