import { LanguageCodeEnum } from '../../interface/enums'
import { PageUuids } from './pages'
import { v4 } from 'uuid'

interface DocumentsSeedDataType {
  id: string
  page_id: string
  header: string
  primary_text: string
  secondary_text?: string
  subtitle?: string
  language: LanguageCodeEnum
  has_effect?: boolean
  is_personal_bio?: boolean
  image_url: string
}

const prefix = 'https://raw.githubusercontent.com/solebellsBEACH/showMeAssets/main/assets'

const testIcon = `${prefix}/stacks/testIcon.svg`

const perfilImage = `${prefix}/perfilImage.jpg`

const backImage = `${prefix}/home/backImage.svg`

const frontImage = `${prefix}/home/frontImage.svg`

const hobbiesPrefix = `${prefix}/hobbies`

const guitarra = `${hobbiesPrefix}/guitarra.jpg`
const skate = `${hobbiesPrefix}/skate.jpg`
const surf = `${hobbiesPrefix}/surf.jpg`

export const DocumentsSeedData: DocumentsSeedDataType[] = [
  {
    page_id: PageUuids.home,
    language: LanguageCodeEnum.english,
    id: v4(),
    header: 'Front-end Development',
    primary_text:
      'The professional front-end developer is responsible for putting into practice, through codes, the design of a website or interface. While web design designs the look of a website, front-end development implements that design through code such as HTML, CSS and JavaScript',
    secondary_text:
      'During my period as a front-end developer I worked with projects of different natures, always focusing on ReactJs and frameworks like NextJs',
    image_url: frontImage,
  },
  {
    page_id: PageUuids.home,
    language: LanguageCodeEnum.english,
    id: v4(),
    header: 'Back-end Development',
    primary_text:
      'As the name suggests, the back-end developer works at the “back” of the home. He is responsible, in general terms, for the implementation of the business rule. In a web home, this developer, when focused, does not touch the visual part of the home. ',
    secondary_text:
      'With back-end development I learned a lot in the first years of the profession, and because I worked in a software factory I worked on several projects, from the most common ones with simple CRUDs to projects with a complex business rule and external integrations',
    image_url: backImage,
  },
  {
    page_id: PageUuids.home,
    language: LanguageCodeEnum.english,
    id: v4(),
    header: 'Test driven programming',
    primary_text:
      'It consists of a short cycle of repetitions where the developer writes automated test cases that can both validate a requirement and implement a new functionality. Using TDD during software development, the routine adopted by most programmers changes a little. ',
    secondary_text:
      'During my career the need for testing was very constant, as I work on several projects, automated and unit tests help to validate flows such as a form with several fields for example',
    image_url: testIcon,
  },
  {
    page_id: PageUuids.home,
    language: LanguageCodeEnum.english,
    id: v4(),
    header: 'FullStack Developer',
    primary_text:
      'I have been programming since 2019, when I started my logic classes at Ifes. I am a very communicative person and I find it easy to work in contact with the customer, raising requirements, without difficulties to work in a team. I currently work as a Full Stack developer, focusing on Front-End at AdGrowth Company.',
    secondary_text:
      'During this period I worked on several projects with an extra attention to React Js, TypeScript and NodeJS, I am currently working entirely on a mobile project, working with React Native, which has been my focus in recent months.',
    image_url: perfilImage,
    has_effect: true,
    is_personal_bio: true,
  },

  // =-09-90-09-90-
  {
    page_id: PageUuids.home,
    language: LanguageCodeEnum.portuguese,
    id: v4(),
    header: 'FullStack Developer',
    primary_text:
      'Programo desde 2019, onde iniciei minhas aulas de lógica no Ifes. Sou uma pessoa bem comunicativa e tenho facilidade para trabalhar no contato ao cliente levantando requisitos, sem dificuldades para trabalhar em time. Trabalho atualmente de desenvolvedor Full Stack, com foco em Front-End na Empresa AdGrowth. ',
    secondary_text:
      'Durante esse período atuei em diversos projetos com uma atenção a mais em React Js, TypeScript e NodeJS, atualmente estou integralmente em um projeto mobile, trabalhando com React Native, oque tem sido o meu foco nos últimos meses.',
    image_url: perfilImage,
    has_effect: true,
    is_personal_bio: true,
  },
  {
    page_id: PageUuids.home,
    language: LanguageCodeEnum.portuguese,
    id: v4(),
    header: 'FullStack Developer',
    primary_text:
      'Programo desde 2019, onde iniciei minhas aulas de lógica no Ifes. Sou uma pessoa bem comunicativa e tenho facilidade para trabalhar no contato ao cliente levantando requisitos, sem dificuldades para trabalhar em time. Trabalho atualmente de desenvolvedor Full Stack, com foco em Front-End na Empresa AdGrowth. ',
    secondary_text:
      'Durante esse período atuei em diversos projetos com uma atenção a mais em React Js, TypeScript e NodeJS, atualmente estou integralmente em um projeto mobile, trabalhando com React Native, oque tem sido o meu foco nos últimos meses.',
    image_url: perfilImage,
  },
  {
    page_id: PageUuids.home,
    language: LanguageCodeEnum.portuguese,
    id: v4(),
    header: 'Desenvolvimento Front-end',
    primary_text:
      'O profissional desenvolvedor front-end é o responsável por colocar em prática, através de códigos, o design de um site ou interface. Enquanto o web design projeta o visual de um site, o desenvolvimento front-end implementa esse design através de códigos, como HTML, CSS e JavaScript',
    secondary_text:
      'Durante meu periodo como desenvolvedor front-end trabalhei com projetos de diversas naturezas, sempre com foco em ReactJs e frameworks como NextJs',
    image_url: frontImage,
  },
  {
    page_id: PageUuids.home,
    language: LanguageCodeEnum.portuguese,
    id: v4(),
    header: 'Desenvolvimento Back-end',
    primary_text:
      'Como o nome sugere, o desenvolvedor back-end trabalha na parte de “trás" da aplicação. Ele é o responsável, em termos gerais, pela implementação da regra de negócio. Em uma aplicação web, este desenvolvedor, quando focado, não toca na parte visual da aplicação. ',
    secondary_text:
      'Com desenvolvimento back-end aprendi muito nos primeiros anos de profissão, e por trabalhar em uma fábrica de software atuei em vários projetos, desde os mais comuns com simples CRUDs a projetos com uma complexa regra de negócio e integrações externas',
    image_url: backImage,
  },
  {
    page_id: PageUuids.home,
    language: LanguageCodeEnum.portuguese,
    id: v4(),
    header: 'Programação orientada a testes',
    primary_text:
      'Ela consiste em um ciclo curto de repetições onde o desenvolvedor escreve casos de testes automatizados que possam tanto validar um requisito quanto implementar uma nova funcionalidade. Utilizando TDD durante o desenvolvimento de um software a rotina adotada pela maioria dos programadores muda um pouco. ',
    secondary_text:
      'Durante minha carreira a necessidade de testes foi muito constante, por trabalhar em diversos projetos os testes automatizados e unitários ajudam a validar fluxos como um formulário com diversos campos por exemplo.',
    image_url: testIcon,
  },
  // // HOBBIES
  {
    page_id: PageUuids.hobbies,
    language: LanguageCodeEnum.portuguese,
    id: v4(),
    image_url: surf,
    subtitle: 'Isso não é um esporte, é um estilo de vida.',
    header: 'Surf',
    primary_text:
      'O surf começou na minha vida quando saí do interior e vim para o litoral por influência do meu pai, que surfava desde 1989. Comecei a 2 anos para curtir um dia de praia e acabei me viciando. ',
    secondary_text:
      'A origem do surfe é disputada entre os povos peruanos e polinésios. A prática de deslizar sobre as ondas há muito tempo já era conhecida pelos povos polinésios, que povoaram grande parte das ilhas do Oceano Pacífico, além do litoral pacífico das Américas. Os primeiros relatos do surfe dizem que este foi introduzido no Havaí pelo rei polinésio Tahíto. Outros relatos dão conta de que, muito antes dos havaianos, antigos povos peruanos já utilizavam uma espécie de canoa confeccionada de junco para deslizar sobre as ondas. O primeiro relato escrito da observação de pessoas a fazerem surfe, foi feito pelo navegador inglês James Cook que gostou do esporte por se tratar de uma forma de relaxamento.',
  },
  {
    page_id: PageUuids.hobbies,
    language: LanguageCodeEnum.portuguese,
    id: v4(),
    image_url: skate,
    subtitle: 'O melhor meio de transporte já inventado.',
    header: 'Skate',
    primary_text:
      'Comecei andar de skate aos 12 anos, influenciado por amigos e pela banda Charlie Brown Jr, o skate veio pra mim por conta de ser muito ruim no futebol.',
    secondary_text:
      'Não se sabe ao certo do quê surgiu o skate, mas muitos falam que vieram do surf; outros de patins quebrados, que com suas partes se montavam um skate em um pedaço de madeira. No início da década de 1960, os surfistas da Califórnia mais ou menos na cidade de Los Angeles queriam fazer das pranchas um divertimento também nas ruas, em uma época de marés baixas e secas na região. Inicialmente, a nova "maneira de surfar" foi chamada de sidewalk surfing. Em 1965, surgiram os primeiros campeonatos, mas o skate só ficou mais reconhecido uma década depois.',
  },
  {
    page_id: PageUuids.hobbies,
    language: LanguageCodeEnum.portuguese,
    id: v4(),
    image_url: guitarra,
    subtitle: 'Ouvir é bom, tocar é bem melhor.',
    header: 'Guitarra',
    primary_text:
      'Quando tinha 12 anos ganhei um simples violão de nylon, no qual não me interessei muito. Até o dia que conheci o Rolling Stones, depois disso ao conhecer Guns n Roses, comecei estudar horas e horas diariamente e também ao conhecer  Yngwie Malmsteen, que os estudos duravam o dia todo. ',
    secondary_text:
      "Saul Hudson, conhecido pelo seu nome artístico Slash, é um guitarrista anglo-americano mundialmente famoso como integrante da formação clássica da banda Guns N' Roses, com quem alcançou sucesso mundial no final da década de 1980 e início dos anos 90. Em sua carreira posterior, Slash integrou algumas outras bandas de diversos estilos, bem sucedidas em sua maioria, e em 2011 iniciou uma carreira solo, em que até agora lançou cinco discos. Yngwie Malmsteen, nome artístico de Lars Johan Yngve Lannerbäck é um virtuoso guitarrista sueco, considerado um dos melhores de seu estilo. Influenciado pela música barroca de Bach e Vivaldi, Malmsteen é conhecido por ser um dos precursores do chamado metal neoclássico, que envolve heavy metal com elementos de música clássica.",
  },
  {
    page_id: PageUuids.hobbies,
    language: LanguageCodeEnum.english,
    id: v4(),
    image_url: surf,
    subtitle: "This is not a sport, it's a lifestyle.",
    header: 'Surf',
    primary_text:
      'Surfing started in my life when I left the countryside and came to the coast under the influence of my father, who had been surfing since 1989. I started 2 years ago to enjoy a day at the beach and ended up becoming addicted.',
    secondary_text:
      'The origin of surfing is disputed between the Peruvian and Polynesian peoples. The practice of gliding on the waves has long been known by the Polynesian peoples, who populated most of the islands of the Pacific Ocean, in addition to the Pacific coast of the Americas. The first accounts of surfing say that it was introduced in Hawaii by the Polynesian king Tahíto. Written from observing people surfing, it was made by the English navigator James Cook who liked the sport because it was a form of relaxation.',
  },
  {
    page_id: PageUuids.hobbies,
    language: LanguageCodeEnum.english,
    id: v4(),
    image_url: skate,
    header: 'Skate',
    subtitle: 'The best form of transportation ever invented.',
    primary_text:
      'I started skateboarding at age 12, influenced by friends and the band Charlie Brown Jr, skateboarding came to me because I was really bad at football.',
    secondary_text:
      'It is not known for sure what skateboarding came from, but many say that it came from surfing; others of broken skates, which with their parts made a skateboard on a piece of wood. In the early 1960s, California surfers in and around the city of Los Angeles wanted to make surfboards fun on the streets as well, at a time of low and dry tides in the region. Initially, the new "way of surfing" was called sidewalk surfing. In 1965, the first championships appeared, but skateboarding only became more recognized a decade later.',
  },
  {
    page_id: PageUuids.hobbies,
    language: LanguageCodeEnum.english,
    id: v4(),
    image_url: guitarra,
    header: 'Eletric Guitar',
    subtitle: 'Listening is good, touching is much better.',
    primary_text:
      'When I was 12 I got a simple nylon guitar, which I wasnt very interested in. Until the day I met the Rolling Stones, after that when I met Guns n Roses, I started studying hours and hours daily and also when I met Yngwie Malmsteen, who studied for the whole day.',
    secondary_text:
      "Saul Hudson, known by his stage name Slash, is an English-American guitarist who is world famous as a member of the classic lineup of the band Guns N' Roses, with whom he achieved worldwide success in the late 1980s and early 1990s. In his later career, Slash joined some other bands of different styles, mostly successful, and in 2011 he started a solo career, in which he has released five albums so far. Yngwie Malmsteen, stage name of Lars Johan Yngve Lannerbäck is a virtuoso guitarist Swedish, considered one of the best of his style. Influenced by the baroque music of Bach and Vivaldi, Malmsteen is known for being one of the forerunners of the so-called neoclassical metal, which involves heavy metal with elements of classical music.",
  },
]
