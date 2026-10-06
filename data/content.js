// EDITE AQUI OS TEXTOS, IMAGENS E LINKS DO SITE.
window.PROF_JOAS_DEFAULT_SITE_DATA = {
  hero: {
    image: "./Nova seleção de fotos/fotos selecionadas/primeira 3.png",
    imageAlt: "Fotografia do professor Joás Alves",
    eyebrow: "EDUCAÇÃO • HUMANIDADES • TECNOLOGIA • INCLUSÃO",
    titlePrefix: "Educação, Humanidades e ",
    highlight: "novas formas de aprender.",
    description:
      "Sou Joás Alves, professor e criador de projetos que aproximam tecnologia, inclusão e aprendizagem.",
    primaryButton: {
      label: "CONHEÇA OS PROJETOS",
      url: "#projetos",
    },
    secondaryButton: {
      label: "SOBRE O PROFESSOR",
      url: "#sobre",
    },
  },
  about: {
    eyebrow: "UM MESMO PROPÓSITO, DIFERENTES CAMINHOS",
    title: "Projetos que conectam educação, tecnologia e Humanidades.",
    description:
      "Cada projeto nasceu de uma necessidade da prática educacional e explora diferentes possibilidades para ensinar, aprender, criar, adaptar e compartilhar conhecimento.",
  },
  projects: [
    {
      id: "montar-para-aprender",
      category: "METODOLOGIA • INTERAÇÃO • INCLUSÃO",
      title: "Montar para Aprender",
      description:
        "Recursos educacionais e atividades pedagógicas interativas que aproximam tecnologia, educação e inclusão. Uma proposta que valoriza diferentes ritmos e possibilidades de participação na aprendizagem.",
      tags: ["Interatividade", "Inclusão", "Autonomia"],
      buttonLabel: "Conhecer o projeto",
      url: "https://www.montarparaaprender.com.br/",
      image: "./images/montar-para-aprender.jpg",
      imageAlt: "Professora e crianças montando peças coloridas em uma mesa de atividades.",
      visualSvg: `
        <svg class="w-full h-full text-brand-gold/80" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="240" fill="#1c2530"/>
          <circle cx="200" cy="120" r="70" stroke="#ab9061" stroke-width="2" stroke-dasharray="6 6"/>
          <rect x="130" y="80" width="60" height="60" rx="8" fill="#ab9061" fill-opacity="0.2" stroke="#ab9061" stroke-width="2"/>
          <rect x="210" y="100" width="60" height="60" rx="8" fill="#ffffff" fill-opacity="0.1" stroke="#ffffff" stroke-width="2"/>
          <path d="M160 110 L210 130" stroke="#ab9061" stroke-width="2"/>
          <path d="M190 70 Q 200 50, 210 70" stroke="#ab9061" stroke-width="2" fill="none"/>
          <text x="200" y="210" text-anchor="middle" fill="#b9b9b8" font-size="12" font-family="sans-serif">INTERATIVIDADE &amp; INCLUSÃO</text>
        </svg>
      `,
    },
    {
      id: "escaninho-digital",
      category: "ACERVO • EDUCAÇÃO • HUMANIDADES",
      title: "Escaninho Digital",
      description:
        "Um espaço para ensinar, aprender e compartilhar. Reúne recursos, experiências, materiais educacionais e produções voltadas especialmente às Humanidades e à prática docente.",
      tags: ["Educação", "Humanidades", "Recursos"],
      buttonLabel: "Explorar o Escaninho",
      url: "https://www.escaninhodigital.com.br/",
      image: "./images/escaninho-digital.jpg",
      imageAlt: "Mesa de estudos com livros de Humanidades, busto clássico, globo, mapa antigo e caderno aberto com óculos.",
      visualSvg: `
        <svg class="w-full h-full text-brand-gold/80" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="240" fill="#242b35"/>
          <rect x="80" y="50" width="240" height="140" rx="4" fill="#1c2530" stroke="#ab9061" stroke-width="1.5"/>
          <line x1="80" y1="95" x2="320" y2="95" stroke="#ab9061" stroke-width="1" stroke-dasharray="4 4"/>
          <line x1="80" y1="140" x2="320" y2="140" stroke="#ab9061" stroke-width="1" stroke-dasharray="4 4"/>
          <rect x="100" y="65" width="40" height="18" rx="2" fill="#ab9061"/>
          <rect x="150" y="65" width="70" height="18" rx="2" fill="#ffffff" fill-opacity="0.1"/>
          <rect x="100" y="110" width="90" height="18" rx="2" fill="#ffffff" fill-opacity="0.1"/>
          <text x="200" y="210" text-anchor="middle" fill="#b9b9b8" font-size="12" font-family="sans-serif">REPOSITÓRIO DE HUMANIDADES</text>
        </svg>
      `,
    },
    {
      id: "saber-em-jogo",
      category: "APRENDIZAGEM • JOGOS • PARTICIPAÇÃO",
      title: "Saber em Jogo",
      description:
        "Um ambiente de atividades educacionais que transforma questões e conteúdos em experiências interativas de aprendizagem, permitindo ao professor criar, organizar e aplicar jogos com seus estudantes.",
      tags: ["Jogos", "Interação", "Aprendizagem"],
      buttonLabel: "Entrar no Saber em Jogo",
      url: "https://saber.professorjoas.com.br/",
      image: "./images/saber-em-jogo.jpg",
      imageAlt: "Ilustração de uma sala de aula em que estudantes usam tablets enquanto o professor aponta para o quadro.",
      visualSvg: `
        <svg class="w-full h-full" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="240" fill="#17202a"/>
          <circle cx="120" cy="110" r="35" fill="#ab9061" fill-opacity="0.2" stroke="#ab9061" stroke-width="2"/>
          <polygon points="120,85 130,115 105,100" fill="#ab9061"/>
          <rect x="200" y="75" width="120" height="80" rx="10" fill="#1c2530" stroke="#ffffff" stroke-opacity="0.2" stroke-width="2"/>
          <circle cx="230" cy="115" r="10" fill="#ab9061"/>
          <circle cx="260" cy="115" r="10" fill="#ffffff" fill-opacity="0.3"/>
          <circle cx="290" cy="115" r="10" fill="#ffffff" fill-opacity="0.3"/>
          <text x="200" y="210" text-anchor="middle" fill="#b9b9b8" font-size="12" font-family="sans-serif">GAMIFICAÇÃO PEDAGÓGICA</text>
        </svg>
      `,
    },
    {
      id: "acervo-visual-educacional",
      category: "HISTÓRIA • FILOSOFIA • CULTURA VISUAL",
      title: "Acervo Visual Educacional",
      description:
        "Um projeto independente dedicado à pesquisa e seleção de obras de arte e documentos visuais para o ensino de História e Filosofia, aproximando acervos culturais, patrimônio e práticas pedagógicas.",
      tags: ["História", "Filosofia", "Acervos"],
      buttonLabel: "Explorar o acervo",
      url: "https://acervo.professorjoas.com.br/",
      image: "./images/acervo-visual.jpg",
      imageAlt: "Colagem em tons de sépia com templos gregos, busto clássico e documentos antigos conectados por linhas luminosas.",
      visualSvg: `
        <svg class="w-full h-full" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="240" fill="#1a232e"/>
          <rect x="130" y="60" width="140" height="12" fill="#ab9061"/>
          <rect x="140" y="72" width="120" height="8" fill="#ffffff" fill-opacity="0.2"/>
          <rect x="150" y="80" width="12" height="80" fill="#ab9061" fill-opacity="0.8"/>
          <rect x="174" y="80" width="12" height="80" fill="#ab9061" fill-opacity="0.8"/>
          <rect x="198" y="80" width="12" height="80" fill="#ab9061" fill-opacity="0.8"/>
          <rect x="222" y="80" width="12" height="80" fill="#ab9061" fill-opacity="0.8"/>
          <rect x="246" y="80" width="12" height="80" fill="#ab9061" fill-opacity="0.8"/>
          <rect x="130" y="160" width="140" height="16" fill="#ab9061"/>
          <text x="200" y="210" text-anchor="middle" fill="#b9b9b8" font-size="12" font-family="sans-serif">PATRIMÔNIO &amp; CULTURA VISUAL</text>
        </svg>
      `,
    },
  ],
  finalSection: {
    eyebrow: "ENSINO • TECNOLOGIA • ACESSIBILIDADE",
    title: "Projetos diferentes. Um mesmo compromisso com a aprendizagem.",
    description:
      "A tecnologia ganha sentido quando amplia possibilidades de participação, investigação, criação e aprendizagem.",
  },
};
