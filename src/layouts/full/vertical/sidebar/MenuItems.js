import {
  IconAward,
  IconBoxMultiple,
  IconPoint,
  IconBan,
  IconStar,
  IconMoodSmile,
  IconAperture,
  IconUserCircle,
  IconApiApp,
  IconApps,
  IconHome
} from '@tabler/icons';

import { uniqueId } from 'lodash';

const Menuitems = [
  {
    navlabel: true,
    subheader: 'Home',
  },
  {
    id: uniqueId(),
    title: 'Home',
    icon: <IconHome size="20" />,
    href: '/sample-page',
    chip: 'New',
    chipColor: 'secondary',
  },
  {
    id: uniqueId(),
    title: 'Menu Level',
    icon: IconBoxMultiple,
    href: 'other',
    children: [
      {
        id: uniqueId(),
        title: 'Level 1',
        icon: IconPoint,
        href: '/profile-page',
      },
      {
        id: uniqueId(),
        title: 'Level 1',
        icon: IconPoint,
        href: '/product-page',
      },
      {
        id: uniqueId(),
        title: 'Level 1.1',
        icon: IconPoint,
        href: '/l1.1',
        children: [
          {
            id: uniqueId(),
            title: 'Level 2',
            icon: IconPoint,
            href: '/l2',
          },
          {
            id: uniqueId(),
            title: 'Level 2.1',
            icon: IconPoint,
            href: '/l2.1',
            children: [
              {
                id: uniqueId(),
                title: 'Level 3',
                icon: IconPoint,
                href: '/l3',
              },
              {
                id: uniqueId(),
                title: 'Level 3.1',
                icon: IconPoint,
                href: '/l3.1',
              },
            ],
          },
        ],
      },
    ],
  },
];

export default Menuitems;
