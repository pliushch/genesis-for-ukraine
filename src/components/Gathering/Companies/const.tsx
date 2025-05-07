import { ReactComponent as Headway } from 'src/assets/images/gathering/company/headway.svg';
import { ReactComponent as HeadwayMobile } from 'src/assets/images/gathering/company/headway_mobile.svg';
import { ReactComponent as Genesis } from 'src/assets/images/gathering/company/genesis.svg';
import { ReactComponent as Appflame } from 'src/assets/images/gathering/company/appflame.svg';
import { ReactComponent as AppflameMobile } from 'src/assets/images/gathering/company/appflame_mobile.svg';
import { ReactComponent as Legit } from 'src/assets/images/gathering/company/legit.svg';
import { ReactComponent as LegitMobile } from 'src/assets/images/gathering/company/legit_mobile.svg';
import { ReactComponent as Quarks } from 'src/assets/images/gathering/company/quarks.svg';
import { ReactComponent as Soligate } from 'src/assets/images/gathering/company/soligate.svg';
import { ReactComponent as SoligateMobile } from 'src/assets/images/gathering/company/solidgate_mobile.svg';
import { ReactComponent as Universe } from 'src/assets/images/gathering/company/universe.svg';

interface CompanyLink {
  name: string;
  logo: any;
  code: string;
  paymentLink: string;
  apiLink: string;
  reportingLink: string;
  variant: 'light' | 'grey';
  bgPosition: 'left' | 'right';
  amount: number;
}

export const companiesLinks : CompanyLink[] = [
  {
    name: 'Genesis',
    logo: Genesis,
    code: 'rokit_Genesis',
    paymentLink: 'https://payment-page.solidgate.com/charity/comebackalive/dZNqJgD?traffic_source=rokit_Genesis',
    apiLink: 'project[]=rokit_Genesis',
    reportingLink: 'https://savelife.in.ua/reporting/?reportingType=%22income%22&project=%5B%22rokit_Genesis%22%5D',
    variant: 'grey',
    bgPosition: 'left',
    amount: 1814327,
  },
  {
    name: 'appflame',
    logo: Appflame,
    code: 'rokit_appflame',
    paymentLink: 'https://payment-page.solidgate.com/charity/comebackalive/dZNqJgD?traffic_source=rokit_appflame',
    apiLink: 'project[]=rokit_appflame',
    reportingLink: 'https://savelife.in.ua/reporting/?reportingType=%22income%22&project=%5B%22rokit_appflame%22%5D',
    variant: 'grey',
    bgPosition: 'right',
    amount: 3650162,
  },
  {
    name: 'Solidgate',
    logo: Soligate,
    code: 'rokit_Solidgate',
    paymentLink: 'https://payment-page.solidgate.com/charity/comebackalive/dZNqJgD?traffic_source=rokit_Solidgate',
    apiLink: 'project[]=rokit_Solidgate',
    reportingLink: 'https://savelife.in.ua/reporting/?reportingType=%22income%22&project=%5B%22rokit_Solidgate%22%5D',
    variant: 'light',
    bgPosition: 'left',
    amount: 1374640,
  },
  {
    name: 'Headway',
    logo: Headway,
    code: 'rokit_Headway',
    paymentLink: 'https://payment-page.solidgate.com/charity/comebackalive/dZNqJgD?traffic_source=rokit_Headway',
    apiLink: 'project[]=rokit_Headway',
    reportingLink: 'https://savelife.in.ua/reporting/?reportingType=%22income%22&project=%5B%22rokit_Headway%22%5D',
    variant: 'light',
    bgPosition: 'left',
    amount: 1104220,
  },
  {
    name: 'Quarks',
    logo: Quarks,
    code: 'rokit_Quarks',
    paymentLink: 'https://payment-page.solidgate.com/charity/comebackalive/dZNqJgD?traffic_source=rokit_Quarks',
    apiLink: 'project[]=rokit_Quarks',
    reportingLink: 'https://savelife.in.ua/reporting/?reportingType=%22income%22&project=%5B%22rokit_Quarks%22%5D',
    variant: 'grey',
    bgPosition: 'left',
    amount: 1020000,
  },
  {
    name: 'Universe',
    logo: Universe,
    code: 'rokit_Universe',
    paymentLink: 'https://payment-page.solidgate.com/charity/comebackalive/dZNqJgD?traffic_source=rokit_Universe',
    apiLink: 'project[]=rokit_Universe',
    reportingLink: 'https://savelife.in.ua/reporting/?reportingType=%22income%22&project=%5B%22rokit_Universe%22%5D',
    variant: 'grey',
    bgPosition: 'right',
    amount: 268333,
  },
  {
    name: 'Legit',
    logo: Legit,
    code: 'rokit_Legit',
    paymentLink: 'https://payment-page.solidgate.com/charity/comebackalive/dZNqJgD?traffic_source=rokit_Legit',
    apiLink: 'project[]=rokit_Legit',
    reportingLink: 'https://savelife.in.ua/reporting/?reportingType=%22income%22&project=%5B%22rokit_Legit%22%5D',
    variant: 'light',
    bgPosition: 'left',
    amount: 71754,
  },
]

export const companiesMobileLinks : CompanyLink[] = [
  {
    name: 'Genesis',
    logo: Genesis,
    code: 'rokit_Genesis',
    paymentLink: 'https://payment-page.solidgate.com/charity/comebackalive/dZNqJgD?traffic_source=rokit_Genesis',
    apiLink: 'project[]=rokit_Genesis',
    reportingLink: 'https://savelife.in.ua/reporting/?reportingType=%22income%22&project=%5B%22rokit_Genesis%22%5D',
    variant: 'grey',
    bgPosition: 'left',
    amount: 1814327,
  },
  {
    name: 'appflame',
    logo: AppflameMobile,
    code: 'rokit_appflame',
    paymentLink: 'https://payment-page.solidgate.com/charity/comebackalive/dZNqJgD?traffic_source=rokit_appflame',
    apiLink: 'project[]=rokit_appflame',
    reportingLink: 'https://savelife.in.ua/reporting/?reportingType=%22income%22&project=%5B%22rokit_appflame%22%5D',
    variant: 'light',
    bgPosition: 'right',
    amount: 3650162,
  },
  {
    name: 'Solidgate',
    logo: SoligateMobile,
    code: 'rokit_Solidgate',
    paymentLink: 'https://payment-page.solidgate.com/charity/comebackalive/dZNqJgD?traffic_source=rokit_Solidgate',
    apiLink: 'project[]=rokit_Solidgate',
    reportingLink: 'https://savelife.in.ua/reporting/?reportingType=%22income%22&project=%5B%22rokit_Solidgate%22%5D',
    variant: 'grey',
    bgPosition: 'left',
    amount: 1374640,
  },
  {
    name: 'Headway',
    logo: HeadwayMobile,
    code: 'rokit_Headway',
    paymentLink: 'https://payment-page.solidgate.com/charity/comebackalive/dZNqJgD?traffic_source=rokit_Headway',
    apiLink: 'project[]=rokit_Headway',
    reportingLink: 'https://savelife.in.ua/reporting/?reportingType=%22income%22&project=%5B%22rokit_Headway%22%5D',
    variant: 'light',
    bgPosition: 'right',
    amount: 1104220,
  },
  {
    name: 'Quarks',
    logo: Quarks,
    code: 'rokit_Quarks',
    paymentLink: 'https://payment-page.solidgate.com/charity/comebackalive/dZNqJgD?traffic_source=rokit_Quarks',
    apiLink: 'project[]=rokit_Quarks',
    reportingLink: 'https://savelife.in.ua/reporting/?reportingType=%22income%22&project=%5B%22rokit_Quarks%22%5D',
    variant: 'grey',
    bgPosition: 'left',
    amount: 1020000,
  },
  {
    name: 'Universe',
    logo: Universe,
    code: 'rokit_Universe',
    paymentLink: 'https://payment-page.solidgate.com/charity/comebackalive/dZNqJgD?traffic_source=rokit_Universe',
    apiLink: 'project[]=rokit_Universe',
    reportingLink: 'https://savelife.in.ua/reporting/?reportingType=%22income%22&project=%5B%22rokit_Universe%22%5D',
    variant: 'light',
    bgPosition: 'left',
    amount: 268333,
  },
  {
    name: 'Legit',
    logo: LegitMobile,
    code: 'rokit_Legit',
    paymentLink: 'https://payment-page.solidgate.com/charity/comebackalive/dZNqJgD?traffic_source=rokit_Legit',
    apiLink: 'project[]=rokit_Legit',
    reportingLink: 'https://savelife.in.ua/reporting/?reportingType=%22income%22&project=%5B%22rokit_Legit%22%5D',
    variant: 'grey',
    bgPosition: 'left',
    amount: 71754,
  },
]