import { Menu } from '@mui/icons-material';
import {
  IconAperture,
  IconPoint,
  IconBoxMultiple,
  IconUser,
  IconApps,
  IconHome2,
  IconHome,
  IconBaseline,
} from '@tabler/icons';
import { uniqueId } from 'lodash';

const Menuitems = [
  {
    id: uniqueId(),
    // title: 'Lainnya',
    icon: Menu,
    href: '/menulevel/',
    children: [
      {
        id: uniqueId(),
        title: 'Product',
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
