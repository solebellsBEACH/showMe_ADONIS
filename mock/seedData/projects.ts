import { LanguageCodeEnum } from '../../interface/enums'
import { Project } from '../../interface'
import { v4 } from 'uuid'

const prefix =
  'https://raw.githubusercontent.com/solebellsBEACH/showMeAssets/main/assets/stacks/projects/'

const afpesp = `${prefix}/afpesp/logo_afpesp.png`

const ranking = `${prefix}/ranking/logo_ranking.png`

const azo = `${prefix}/azo/logo_azo.png`
const prevent = `${prefix}/prevent/logo_prevent.png`
const kolping = `${prefix}/kolping/logo_kolping.png`

interface ProjectsSeedDataType extends Project {
  id: string
  language: LanguageCodeEnum
}

export const ProjectsSeedData: ProjectsSeedDataType[] = [
  {
    id: v4(),
    language: LanguageCodeEnum.portuguese,
    header: 'AFPESP',
    primary_text:
      'nesse projeto atuei na criação de uma aplicação mobile, nela atuei no fluxo de serviços na qual criei todo crud de compra de refeições, cardápio digital, pontos de venda, além de ter atuado na criação da autenticação via digital e fáceis e na tela de notificações.',
    secondary_text: '',
    image_url: afpesp,
    has_effect: false,
    tecnologies: JSON.stringify(['React Native', 'Styled Components', 'Typescript ', 'Expo CLI']),
  },
  {
    id: v4(),
    language: LanguageCodeEnum.portuguese,
    header: 'Ranking dos políticos',
    primary_text:
      'Esse foi um projeto muito interessante, na qual se tratava de um ranking de políticos que eram avaliados baseado em seus votos de projetos de lei.',
    secondary_text:
      'Nesse projeto atuei na criação do próprio ranking, além do blog de notícias sobre os candidatos.',
    image_url: ranking,
    has_effect: false,
    tecnologies: JSON.stringify(['NextJs', 'Redux Saga', 'Styled Components ']),
  },

  {
    id: v4(),
    language: LanguageCodeEnum.portuguese,
    header: 'Prevent Sênior',
    primary_text:
      'Nessa frente, atuei na criação de algumas features do portal admin que o paciente tinha seus dados e informações vitais, como batimentos, pressão arterial, entre outros..',
    secondary_text:
      'Ele comunicava com uma API que era alimentada por um smartwatch que ficava como paciente, e caso tivesse algo de perigoso a saúde do mesmo, alertava seus responsáveis.',
    image_url: prevent,
    has_effect: false,
    tecnologies: JSON.stringify(['NextJs', 'Typescript ', 'SASS', 'Context API']),
  },
  {
    id: v4(),
    language: LanguageCodeEnum.portuguese,
    header: 'Kolping',
    primary_text:
      'Nesse projeto atuei no back end de uma solução que contava com muitas integrações de pagamento diferentes.',
    secondary_text:
      'A principal delas era com o IuguJS, além disso, fui o responsável por criar o fluxo de usuários e por configurar todas permissões de cada um, implementando uma solução baseada em enums atrelados a uma tabela de roles.',
    image_url: kolping,
    has_effect: false,
    tecnologies: JSON.stringify(['ExpressJs ', 'Typescript', 'PostgreSQL', 'TypeORM']),
  },
  {
    id: v4(),
    language: LanguageCodeEnum.portuguese,
    header: 'AZO APP',
    primary_text:
      'Nesse projeto atuei na criação de uma página na qual o usuário admin podia ver uma lista de profissionais e suas informações, um widget de calendário em que o profissional poderia ver seus horários, um gráfico que filtrava por período e por tipo as consultas daquele profissional e corrigi um bug na autenticação pelo Google.',
    secondary_text: '',
    image_url: azo,
    has_effect: false,
    tecnologies: JSON.stringify([
      'React Js',
      'Bootstrap ',
      'Styled Components',
      'Axios ',
      'Redux toolkit',
    ]),
  },
  {
    id: v4(),
    language: LanguageCodeEnum.english,
    header: 'AFPESP',
    primary_text:
      'in this project I worked on the creation of a mobile home, in which I worked on the flow of services in which I created all the crud for purchasing meals, digital menu, points of sale, in addition to having worked on creating authentication via digital and easy and on notification screen.',
    secondary_text: '',
    image_url: afpesp,
    has_effect: false,
    tecnologies: JSON.stringify(['React Native', 'Styled Components', 'Typescript ', 'Expo CLI']),
  },
  {
    id: v4(),
    language: LanguageCodeEnum.english,
    header: 'Ranking dos Políticos',
    primary_text:
      'This was a very interesting project, in which it was a ranking of politicians who were evaluated based on their votes for bills.',
    secondary_text:
      'In this project I worked on the creation of the ranking itself, in addition to the blog with news about the candidates.',
    image_url: ranking,
    has_effect: false,
    tecnologies: JSON.stringify(['NextJs', 'Redux Saga', 'Styled Components ']),
  },

  {
    id: v4(),
    language: LanguageCodeEnum.english,
    header: 'Prevent Senior',
    tecnologies: JSON.stringify(['NextJs', 'Typescript ', 'SASS', 'Context API']),
    primary_text:
      'On this front, I worked on creating some features of the admin portal that the patient had his data and vital information, such as heartbeats, blood pressure, among others...',
    secondary_text:
      "It communicated with an API that was powered by a smartwatch that stayed as a patient, and if there was something dangerous to the patient's health, it would alert those responsible.",
    image_url: prevent,
    has_effect: false,
  },
  {
    id: v4(),
    language: LanguageCodeEnum.english,
    header: 'Kolping',
    primary_text:
      'In this project I worked on the back end of a solution that had many different payment integrations.',
    secondary_text:
      'The main one was with IuguJS, in addition, I was responsible for creating the user flow and for configuring all permissions for each one, implementing a solution based on enums linked to a table of roles.',
    image_url: kolping,
    has_effect: false,
    tecnologies: JSON.stringify(['NextJs', 'Typescript ', 'SASS', 'Context API']),
  },
  {
    id: v4(),
    language: LanguageCodeEnum.english,
    header: 'AZO APP',
    primary_text:
      'In this project I worked on creating a page where the admin user could see a list of professionals and their information, a calendar widget where the professional could see their schedules, a graph that filtered consultations by period and type from that professional and fixed a bug in Google authentication.',
    secondary_text: '',
    image_url: azo,
    has_effect: false,
    tecnologies: JSON.stringify(['ExpressJs ', 'Typescript', 'PostgreSQL', 'TypeORM']),
  },
]
