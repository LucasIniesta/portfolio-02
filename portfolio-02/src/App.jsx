import { useState } from 'react'
import './App.css'
import Header from './components/sections/Header'
import Projects from './components/sections/Projects'
import About from './components/sections/About'
import Techs from './components/sections/Techs'
import Skills from './components/sections/Skills'
import Contact from './components/sections/Contact'
import trilhaProgramador from './assets/projects/trilhaProgramador.jpg'
import DNCWeather from './assets/projects/DNCWeather.jpg'
import lpArquitetura from './assets/projects/lpArquitetura.jpg'

function App() {
  const projectsList = 
  [
    {
      id: 1,
      title: 'Trilha do desenvolvedor',
      description: 'Este projeto é uma página web criada para praticar os conceitos de HTML, CSS e JavaScript. Ele guia o usuário através de perguntas para recomendar a melhor linguagem de programação com base nos interesses do usuário.',
      img: trilhaProgramador,
      tags:['html', 'css', 'JavaScript'],
      link: 'https://trilha-desenvolvedor-iniciante.netlify.app/'
    },
    {
      id:2,
      title: 'DNCWeather',
      description: 'Este projeto é uma página web que permite ao usuário inserir seu CEP, latitude e longitude para obter informações sobre o nome da rua, bairro, estado e a temperatura atual das coordenadas geográficas fornecidas.',
      img: DNCWeather,
      tags:['html', 'css', 'JavaScript'],
      link: 'https://dncweather-consulta-clima-e-cep.netlify.app/'
    },
    {
      id:3,
      title: 'Landing Page para um site de Arquitetura',
      description: 'Projeto criado para o desenvolvimento de uma Landing Page de um grupo de Arquitetura fictício, visando a prática de HTML e CSS. Tarefa proposta pela Escola DNC',
      img: lpArquitetura,
      tags:['html', 'css'],
      link: 'https://testelandingpagearquitetura.netlify.app/'
    }
  ]

  return (
    <div>
      <Header name={'Lucas Iniesta Simões'} stack={'Front-end.web(developer)'}/>
      <Projects projects={projectsList}/>
      <About 
        name={'Lucas Iniesta Simões'} 
        description={'Sou um Desenvolvedor Front-End com experiência em HTML, CSS, JavaScript e React. Minhas habilidades incluem a criação de interfaces de usuário interativas e responsivas, além do consumo eficiente de APIs para integrar funcionalidades externas. Estou sempre em busca de novos desafios para aplicar e expandir minhas habilidades em projetos inovadores.'}
        insta={'https://www.instagram.com/iniesta_lucas/'}
        git={'https://github.com/LucasIniesta'}
        mail={"mailto:l.iniesta.94@gmail.com?subject=Interesse em Colaboração/ProjetoContato&body=Eu visitei seu portfólio e estou interessado em discutir uma possível colaboração ou saber mais sobre seus projetos.  Por favor, entre em contato comigo para que possamos conversar melhor."}
      />
      <Techs/>
      <Skills/>
      <Contact
        linkedin={'https://www.linkedin.com/in/lucas-iniesta-simoes/'}
        insta={'https://www.instagram.com/iniesta_lucas/'}
        git={'https://github.com/LucasIniesta'}
      />
    </div>
  )
}

export default App
