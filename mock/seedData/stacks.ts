import { v1 } from 'uuid'
import { LanguageCodeEnum } from '../../interface/enums'

export type StacksSeedDataType = {
  id: string
  language: LanguageCodeEnum
  image_url: string
  title: string
  description: string
  my_xp: string
}

const prefix = 'https://raw.githubusercontent.com/solebellsBEACH/showMeAssets/main/assets/stacks'

const adonisjs = `${prefix}/adonis.svg`
const express = `${prefix}/express.svg`
const nestjs = `${prefix}/nestjs.svg`
const nextjs = `${prefix}/nextjs.svg`
const nodejs = `${prefix}/nodejs.svg`
const reactjs = `${prefix}/react.svg`
const reactnative = `${prefix}/reactnative.svg`
const typescript = `${prefix}/typescript.svg`

export const StacksSeedData: StacksSeedDataType[] = [
  {
    id: v1(),
    language: LanguageCodeEnum.portuguese,
    image_url: reactjs,
    title: 'React Js',
    description:
      'O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.',
    my_xp:
      'Trabalhei com esta biblioteca ao longo de toda minha carreira de desenvolvedor,trabalhando em vários projetos de escopos diferentes.',
  },
  {
    id: v1(),
    language: LanguageCodeEnum.portuguese,
    image_url: reactnative,
    title: 'React Native',
    description:
      'React Native é uma biblioteca Javascript criada pelo Facebook. É usada para desenvolver aplicativos para os sistemas Android e iOS de forma nativa.',
    my_xp:
      'Trabalhei com esta biblioteca ao longo de toda minha carreira de desenvolvedor,trabalhando em vários projetos de escopos diferentes.',
  },
  {
    id: v1(),
    language: LanguageCodeEnum.portuguese,
    image_url: nextjs,
    title: 'NextJS',
    description:
      'Next.js é uma estrutura da web de desenvolvimento front-end React de código aberto criada por Vercel que permite funcionalidades como renderização do lado do servidor e geração de sites estáticos para aplicativos da web baseados em React.',
    my_xp: 'Uma excelente tecnologia para usar em projetos com grande número de renderizações.',
  },
  {
    id: v1(),
    language: LanguageCodeEnum.portuguese,
    image_url: typescript,
    title: 'TypeScript',
    description:
      'TypeScript é uma linguagem de programação de código aberto desenvolvida pela Microsoft. É um superconjunto sintático estrito de JavaScript e adiciona tipagem estática opcional à linguagem.',
    my_xp:
      'Tecnologia super importante quando utilizada para implementar os princípios de orientação a objetos em seu código Javascript.',
  },
  {
    id: v1(),
    language: LanguageCodeEnum.portuguese,
    image_url: adonisjs,
    title: 'Adonis JS',
    description:
      'O AdonisJS é um framerwork Node. js que surgiu para trazer facilidades ao desenvolvedor incluindo padrões de estruturação do projeto.',
    my_xp:
      'Por causa disso, o Adonis é conhecido por ser um framework opinado, isto é, ele segue um padrão de desenvolvimento e "força" o desenvolvedor a segui-lo.',
  },
  {
    id: v1(),
    language: LanguageCodeEnum.portuguese,
    image_url: express,
    title: 'ExpressJS',
    description:
      'Express.js é um framework para Node.js que fornece recursos mínimos para construção de servidores web. Foi lançado como software livre e de código aberto sob a Licença MIT. ',
    my_xp: 'É um dos mais populares frameworks para servidores em Node.js',
  },
  {
    id: v1(),
    language: LanguageCodeEnum.portuguese,
    image_url: nestjs,
    title: 'NestJS',
    description:
      'NestJS é um framework Node.js de código aberto destinado ao desenvolvimento de aplicativos do lado do servidor. Foi criado por Kamil Mysliwiec e lançado em 2017. Sob o capô, por padrão, o NestJS faz uso do framework Express.js, sendo também compatível com o Fastify.',
    my_xp: 'Sua arquitetura é fortemente inspirada no Angular.',
  },
  {
    id: v1(),
    language: LanguageCodeEnum.portuguese,
    image_url: nodejs,
    title: 'NodeJS',
    description:
      'Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript.',
    my_xp:
      'Uma das principais tecnologias usadas para criação de APIs Rest, na qual trabalhei principalmente com o auxílio do ExpressJS',
  },

  {
    id: v1(),
    language: LanguageCodeEnum.english,
    image_url: reactjs,
    title: 'React Js',
    description:
      'React is an open source JavaScript front-end library focused on creating user interfaces on web pages.',
    my_xp:
      "I've worked with this library throughout my developer career,working on several projects of different scopes.",
  },
  {
    id: v1(),
    language: LanguageCodeEnum.english,
    image_url: reactnative,
    title: 'React Native',
    description:
      'React Native is a Javascript library created by Facebook. It is used to develop apps for Android and iOS systems natively.',
    my_xp:
      "I've worked with this library throughout my developer career,working on several projects of different scopes.",
  },
  {
    id: v1(),
    language: LanguageCodeEnum.english,
    image_url: nextjs,
    title: 'NextJS',
    description:
      'Next.js is an open source React front-end development web framework created by Vercel that enables functionality such as server-side rendering and static website generation for React-based web homes.',
    my_xp: 'An excellent technology to use in projects with a large number of renders.',
  },
  {
    id: v1(),
    language: LanguageCodeEnum.english,
    image_url: nodejs,
    title: 'NodeJS',
    description:
      "Node.js is open-source, cross-platform software based on Google's V8 interpreter that allows you to run JavaScript code outside of a web browser.The main feature of Node.js is its asynchronous and event- driven architecture.",
    my_xp:
      'One of the main technologies used for creating Rest APIs, in which I worked mainly with the help of ExpressJS',
  },
  {
    id: v1(),
    language: LanguageCodeEnum.english,
    image_url: typescript,
    title: 'TypeScript',
    description:
      'TypeScript is an open source programming language developed by Microsoft. It is a strict syntactic superset of JavaScript and adds optional static typing to the language.',
    my_xp:
      'Super important technology when used to implement object-oriented principles in your Javascript code.',
  },
  {
    id: v1(),
    language: LanguageCodeEnum.english,
    image_url: adonisjs,
    title: 'Adonis JS',
    description:
      'AdonisJS is a framerwork Node. js that came up to bring facilities to the developer including project structuring standards.',
    my_xp:
      'Because of this, Adonis is known to be an opinionated framework, that is, it follows a development pattern and "forces" the developer to follow it.',
  },
  {
    id: v1(),
    language: LanguageCodeEnum.english,
    image_url: express,
    title: 'ExpressJS',
    description:
      'Express.js is a framework for Node.js that provides minimal resources for building web servers. It was released as free and open source software under the MIT License.',
    my_xp: "It's one of the most popular server frameworks on Node.js",
  },
  {
    id: v1(),
    language: LanguageCodeEnum.english,
    image_url: nestjs,
    title: 'NestJS',
    description:
      'NestJS is an open source Node.js framework intended for server-side home development. It was created by Kamil Mysliwiec and released in 2017. Under the hood, by default, NestJS makes use of the Express.js framework and is also compatible with Fastify.',
    my_xp: 'Its architecture is heavily inspired by Angular.',
  },
]
