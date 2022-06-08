// image imports
import image1 from '../assets/pergunta 1.png'
import image2 from '../assets/pergunta 2.jpg'
import image3 from '../assets/pergunta 3.jpg'
import image4 from '../assets/pergunta 4.jpg'
import image5 from '../assets/pergunta 5.jpg'
import image6 from '../assets/pergunta 6.jpg'
import image7 from '../assets/pergunta 7.jpg'

// questions
export const questions = [
  {
    index: 0,
    title: 'PERGUNTA 1',
    question: 'Sobre povos e comunidades ciganas, é correto afirmar que:',
    alternatives: [
      {
        correct: true,
        text: 'Ciganos são povos itinerantes, que prezam pela liberdade e valorizam a própria cultura.'
      },
      {
        correct: false,
        text: 'A língua nativa dos ciganos é o português, com algumas variedades linguísticas.'
      },
      {
        correct: false,
        text: 'Os povos ciganos pisaram no Brasil no ano de 1574 e se mantiveram na região nordeste do país.'
      },
      {
        correct: false,
        text: 'Ciganos são povos homogêneos, de mesma origem e língua.'
      }
    ],
    image: image1,
    message: 'Liberdade e respeito pelos costumes são característica do povo cigano.'
  },
  {
    index: 1,
    title: 'PERGUNTA 2',
    question: 'Sobre a infância nos povos e nas comunidades tradicionais ciganas, é incorreto afirmar que:',
    alternatives: [
      {
        correct: false,
        text: 'As crianças ciganas acompanham, desde cedo, as tarefas executadas pelos adultos para que possam dar continuidade às práticas e tradições de seu povo.'
      },
      {
        correct: false,
        text: 'Desde cedo, as crianças aprendem as línguas ciganas e a cantar e dançar as músicas próprias do povo cigano.'
      },
      {
        correct: false,
        text: 'Ao nascer, a criança passa por momentos de proteção, aprendizagem e preparação para ingressar na fase adulta, o que acontece com o casamento.'
      },
      {
        correct: true,
        text: 'Crianças ciganas não costumam frequentar a escola devido ao estilo de vida itinerante da comunidade. '
      }
    ],
    image: image2,
    message:
      'Mesmo com um estilo de vida itinerante, as crianças ciganas devem ir para a escola. As comunidades se mantêm fixas durante os períodos letivos e se deslocam nas férias.'
  },
  {
    index: 2,
    title: 'PERGUNTA 3',
    question: 'Sobre a infância nos povos e nas comunidades tradicionais indígenas, é incorreto afirmar que:',
    alternatives: [
      {
        correct: false,
        text: 'A terra e o território têm papel essencial para a sobrevivência dos povos indígenas.'
      },
      {
        correct: true,
        text: 'Os símbolos, os rituais, as crenças, as datas simbólicas, as festas, as línguas, assim como outros elementos, são praticamente os mesmos em todas as etnias. '
      },
      {
        correct: false,
        text: 'Têm em comum a relação com a terra e a natureza, elementos fundamentais para a reprodução de seus ciclos e modos de vida.'
      },
      {
        correct: false,
        text: 'Quando uma criança nasce, ela é cuidada e educada por toda a comunidade, sendo que seu aprendizado se dá por meio da participação nas atividades e nos rituais realizados pelo grupo. Nesse ciclo, a criança aprende primeiramente a língua materna, e, muitas vezes, suas mães não falam português.'
      }
    ],
    image: image3,
    message:
      'No Brasil existem cerca de 300 etnias indígenas diferentes, com crenças, costumes e línguas distintas uns dos outros. Diversidade é a marca!'
  },
  {
    index: 3,
    title: 'PERGUNTA 4',
    question:
      'Assinale a alternativa correta em relação aos povos indígenas que caracterizam bem a infância nesses povos:',
    alternatives: [
      {
        correct: false,
        text: 'Crianças indígenas possuem autonomia ou capacidade de decisão na primeira infância.'
      },
      {
        correct: false,
        text: 'O reconhecimento das diferentes habilidades das crianças perante os adultos, suas práticas e suas produções são valorizadas. Além disso, a educação indígena leva em consideração a saúde e o cuidado com o corpo.'
      },
      {
        correct: false,
        text: 'A criança é considerada como mediadora das várias esferas cosmológicas e cumpre um importante papel na construção e na reprodução da organização social e como mediadora dos diversos grupos sociais no âmbito da comunidade.'
      },
      {
        correct: true,
        text: 'Todas as alternativas estão corretas.'
      }
    ],
    image: image4,
    message: 'Essas são características-chave da infância em comunidades indígenas.'
  },
  {
    index: 4,
    title: 'PERGUNTA 5',
    question: 'Sobre a infância nos povos e nas comunidades quilombolas, é incorreto afirmar que:',
    alternatives: [
      {
        correct: false,
        text: 'Os quilombos se constituíram como espaços de refúgio para negros que negavam a condição de escravizados e fugiam das senzalas no período colonial.'
      },
      {
        correct: true,
        text: 'As famílias quilombolas cuidam do espaço familiar e utilizam o território compartilhado apenas para praticar seus rituais culturais.'
      },
      {
        correct: false,
        text: 'As famílias quilombolas ainda preservam práticas do curandeirismo – que têm relação com as religiões de matrizes africanas – e das parteiras. Dessa forma, muitas crianças quilombolas ainda nascem em seus territórios.'
      },
      {
        correct: false,
        text: 'Crianças quilombolas costumam produzir brinquedos com tecidos, chitas e sementes.'
      }
    ],
    image: image5,
    message: 'Comunidades quilombolas utilizam os espaços de maneira coletiva e comunitária.'
  },
  {
    index: 5,
    title: 'PERGUNTA 6',
    question: 'Sobre a infância nos povos e nas comunidades quilombolas, é possível afirmar:',
    alternatives: [
      {
        correct: false,
        text: 'As famílias quilombolas costumam ser bem pequenas, e as crianças convivem mais com crianças de fora da comunidade, na escola.'
      },
      {
        correct: true,
        text: 'Crianças quilombolas circulam entre florestas, rios, cachoeiras, plantações, centros comunitários e as casas das famílias pertencentes à comunidade.'
      },
      {
        correct: false,
        text: 'Crianças costuma ajudar nas colheitas e no cuidado dos animais, mas não participam dos cultos religiosos ou da produção de produtos artesanais.'
      },
      {
        correct: false,
        text: 'Crianças não costumam frequentar escolas, visto que não existem escolas dentro dos territórios. '
      }
    ],
    image: image6,
    message: 'A natureza é muito presente na infância em comunidades quilombolas.'
  },
  {
    index: 6,
    title: 'PERGUNTA 7',
    question: 'Sobre povos de terreiro, é incorreto afirmar:',
    alternatives: [
      {
        correct: false,
        text: 'Povos de terreiro são aqueles que praticam religiões de matrizes africanas, as quais possuem uma forte ligação com a natureza, sendo que suas divindades representam elementos deste universo.'
      },
      {
        correct: false,
        text: 'Os praticantes de um mesmo terreiro, mesmo não sendo irmãos de sangue, são “irmãos de santo”, e os líderes são chamados de mãe ou pai de santo, por compartilharem o mesmo espaço do sagrado e terem se iniciado espiritualmente na mesma casa.'
      },
      {
        correct: false,
        text: 'Parte considerável de seus praticantes já nasceram dentro do terreiro e estão dando continuidade a uma prática familiar e ancestral.'
      },
      {
        correct: true,
        text: 'Povos de terreiro estão principalmente localizados em contextos urbanos nas grandes cidades. '
      }
    ],
    image: image7,
    message:
      'Existem terreiros localizados em áreas rurais e em grandes cidades, mas mesmo em contextos urbanos, os rituais buscam conexão com a terra e utilizam alimentos que a natureza oferece.'
  },
  {
    index: 7,
    title: 'PERGUNTA 8',
    question: 'Sobre a infância nos povos de terreiro, é incorreto afirmar:',
    alternatives: [
      {
        correct: false,
        text: 'As crianças crescem aprendendo as cantigas e a tocar os tambores, participando da preparação das festas e inseridas nos rituais.'
      },
      {
        correct: true,
        text: 'A oralidade é uma marca forte dos terreiros. Há muitos contos, desde os criacionistas até as histórias particulares de cada divindade e sua intervenção no mundo. Os contos, porém, são somente entretenimento, não possuem muito papel na formação e criação das crianças.'
      },
      {
        correct: false,
        text: 'Embora as crianças estejam presentes, nem sempre passaram por rituais de iniciação. Algumas famílias preferem esperar os filhos crescerem, outras iniciam quando ainda são pequenas.'
      },
      {
        correct: false,
        text: 'Os terreiros costumam ter muito espaço para a participação e o protagonismo das crianças, e os mais velhos são responsáveis por cuidar, zelar e garantir a segurança de todas as crianças da comunidade.'
      }
    ],
    image: image1,
    message:
      'Os contos nas comunidades de terreiro possuem papel importante na formação e criação das crianças, ajudando e reforçando os costumes e as crenças desses povos.'
  }
]
