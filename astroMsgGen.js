// 1. CREATING USERASTRO AND CLEAN
const cleanUserInput = (userInput) => {
    const userInputCleaned = userInput.toLowerCase().trim();
    
    if (userInputCleaned === 'aries' ||userInputCleaned === 'taurus' || userInputCleaned === 'gemini' ||userInputCleaned === 'cancer' ||userInputCleaned === 'leo' ||userInputCleaned === 'virgo' ||userInputCleaned === 'libra' ||userInputCleaned === 'scorpio' ||userInputCleaned === 'sagittarius' ||userInputCleaned === 'capricorn' ||userInputCleaned === 'aquarius' ||userInputCleaned === 'pisces') { 
        return userInputCleaned ;
    } else {return 'hmmm....not an astro sign!'}
};

const userAstro = cleanUserInput('virgo'); // ‼️ INPUT SIGN HERE ONCE
console.log(`User's sign is: ` + userAstro);

// function to get random + can be reused
const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

// PART 1 
const part1dtb = [
    `As a ${userAstro}, `,
    `Being a ${userAstro}, `,
    `${userAstro}, `,
    `If you're a ${userAstro}, `,
    `For a ${userAstro} like you, `
  ];

const part1 = getRandom(part1dtb);

// PART 2
const part2dtb = [
    `you often crave `,
    `you’re drawn to `,
    `you tend to avoid `,
    `you secretly desire `,
    `you naturally seek `,
    `you habitually question `,
    `you intuitively move toward `,
    `you sometimes resist `,
    `you often find comfort in `,
    `you’re learning to embrace `
  ]

const part2 = getRandom(part2dtb);

const part4dtb = [
    ` which helps you `,
    ` as you try to `,
    ` and it pushes you to `,
    ` making it easier to `,
    ` so you can `,
    ` and through this, you `,
    ` guiding you to `,
    ` while teaching you to `,
    ` which reminds you to `,
    ` in a way that allows you to `
  ];

const part4 = getRandom(part4dtb);

const part5dtb = [
    `build deeper connections.`,
    `stay grounded in chaos.`,
    `trust your intuition more.`,
    `take meaningful risks.`,
    `feel safe in uncertainty.`,
    `show up as your true self.`,
    `let go of old patterns.`,
    `communicate with clarity.`,
    `reclaim your power.`,
    `move with more ease.`
  ];

const part5 = getRandom(part5dtb);


const part3dtb = {
    aries: [
      `excitement`,
      `bold action`,
      `unfiltered truth`,
      `instant gratification`,
      `competitive drive`,
      `momentum`,
      `fearless initiation`,
      `self-reliance`,
      `passion`,
      `living on impulse`
    ],
    taurus: [
      `comfort`,
      `material stability`,
      `sensory pleasure`,
      `slow growth`,
      `emotional consistency`,
      `grounded presence`,
      `rituals and routines`,
      `inner peace`,
      `resilience`,
      `security`
    ],
    gemini: [
      `mental stimulation`,
      `fresh ideas`,
      `playful conversation`,
      `spontaneous interaction`,
      `multiple perspectives`,
      `social flow`,
      `curiosity`,
      `verbal expression`,
      `variety`,
      `change of scenery`
    ],
    cancer: [
      `emotional safety`,
      `deep care`,
      `family connection`,
      `nurturing energy`,
      `empathy`,
      `homebound comfort`,
      `protective instincts`,
      `emotional truth`,
      `inner softness`,
      `belonging`
    ],
    leo: [
      `creative self-expression`,
      `admiration`,
      `playful leadership`,
      `bold confidence`,
      `heart-centered presence`,
      `warm recognition`,
      `loyalty`,
      `radiance`,
      `emotional drama`,
      `personal pride`
    ],
    virgo: [
      `inner order`,
      `practical clarity`,
      `useful contribution`,
      `structured growth`,
      `self-improvement`,
      `quiet discipline`,
      `precision`,
      `service to others`,
      `clean focus`,
      `humble pride`
    ],
    libra: [
      `emotional balance`,
      `mutual harmony`,
      `beautiful surroundings`,
      `graceful connection`,
      `ideal partnership`,
      `social elegance`,
      `diplomatic flow`,
      `shared decision-making`,
      `empathy in conversation`,
      `internal equilibrium`
    ],
    scorpio: [
      `emotional depth`,
      `transformation`,
      `private power`,
      `magnetic intensity`,
      `truth beneath the surface`,
      `sacred bonds`,
      `emotional control`,
      `mystery`,
      `loyal devotion`,
      `inner shadows`
    ],
    sagittarius: [
      `freedom`,
      `new horizons`,
      `truth-seeking`,
      `philosophical wonder`,
      `spontaneity`,
      `cosmic optimism`,
      `adventure`,
      `broad perspective`,
      `playful rebellion`,
      `limitless possibility`
    ],
    capricorn: [
      `long-term vision`,
      `quiet strength`,
      `ambition`,
      `emotional restraint`,
      `personal achievement`,
      `steadfast loyalty`,
      `realistic thinking`,
      `self-discipline`,
      `authority and respect`,
      `stability through action`
    ],
    aquarius: [
      `individuality`,
      `unconventional thought`,
      `future visions`,
      `emotional detachment`,
      `collective change`,
      `progressive ideals`,
      `friendship`,
      `mental clarity`,
      `radical honesty`,
      `freedom through rebellion`
    ],
    pisces: [
      `emotional flow`,
      `cosmic dreams`,
      `spiritual softness`,
      `creative longing`,
      `compassion`,
      `escapist fantasy`,
      `mystical stillness`,
      `intuitive knowing`,
      `artful illusion`,
      `boundless empathy`
    ]
  };

const part3 = getRandom(part3dtb[userAstro]); 
console.log(part1 + part2 + part3 + part4 + part5);

  