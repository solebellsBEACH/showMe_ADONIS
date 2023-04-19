import { Pages } from '../../interface/enums'

export const PageUuids = {
  home: '1b671a64-40d5-491e-99b0-da01ff1f3341',
  stacks: 'ad6ef308-e910-46ba-9a34-b0d15bd45a50',
  hobbies: '5b2c98cf-a68d-4388-a80a-c4b036062adb',
}

type PagesSeedDataType = {
  id: string
  name: Pages
}

export const PagesSeedData: PagesSeedDataType[] = [
  {
    id: PageUuids[Pages.home],
    name: Pages.home,
  },
  {
    id: PageUuids[Pages.stacks],
    name: Pages.stacks,
  },
  {
    id: PageUuids[Pages.hobbies],
    name: Pages.hobbies,
  },
]
