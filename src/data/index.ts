import { projectsImages } from 'assets/images';

export const navItems = [
    { name: 'Домой', link: '/' },
    { name: 'Проекты', link: '#projects' },
    // { name: 'Отзывы', link: '#testimonials' },
    { name: 'Контакты', link: '#contact' },
];

export const gridItems = [
    {
        id: 1,
        title: 'Самая главная вещь при разработке программ — ясно представлять конечную цель',
        description: '',
        className: 'lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]',
        imgClassName: 'w-full h-full',
        titleClassName: 'justify-end',
        img: '/b1.svg',
        spareImg: '',
    },
    {
        id: 2,
        title: 'Серьезно отношусь к поставленным срокам',
        description: '',
        className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
        imgClassName: '',
        titleClassName: 'justify-start',
        img: '',
        spareImg: '',
    },
    {
        id: 3,
        title: 'Мой технологический стек',
        description: 'Я постоянно совершенствуюсь.',
        className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
        imgClassName: '',
        titleClassName: 'justify-center',
        img: '',
        spareImg: '',
    },
    {
        id: 4,
        title: 'Слежу за трендами в сфере разработки',
        description: '',
        className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
        imgClassName: '',
        titleClassName: 'justify-start',
        img: '/grid.svg',
        spareImg: '/b4.svg',
    },

    {
        id: 5,
        title: 'Никакой код не может быть быстрее, чем отсутствие кода',
        description: '',
        className: 'md:col-span-3 md:row-span-2',
        imgClassName: 'absolute right-0 bottom-0 md:w-96 w-60',
        titleClassName: 'justify-center md:justify-start lg:justify-center',
        img: '/b5.svg',
        spareImg: '/grid.svg',
    },
    {
        id: 6,
        title: 'Хотите начать совместный проект?',
        description: '',
        className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
        imgClassName: '',
        titleClassName: 'justify-center md:max-w-full max-w-60 text-center',
        img: '',
        spareImg: '',
        link: 'https://t.me/ahhiweb',
    },
];

export const projects = [
    {
        id: 1,
        title: 'Лендинг покупки скинов CS2',
        des: 'Покупай скины в CS2 в один клик. ',
        img: projectsImages.cs2,
        iconLists: ['/re.svg', '/tail.svg', '/ts.svg'],
        link: 'example.com',
    },
    {
        id: 2,
        title: 'Накрутка рефералов Hamster',
        des: 'Покупай рефералов быстро и безопасно. ',
        img: projectsImages.hamster,
        iconLists: ['/re.svg', '/tail.svg', '/ts.svg', '/fm.svg'],
        link: 'example.com',
    },
    {
        id: 3,
        title: 'Tip-Top steam pay',
        des: 'Пополнение Steam баланса ',
        img: projectsImages.steamPay,
        iconLists: ['/re.svg', '/tail.svg', '/ts.svg'],
        link: 'example.com',
    },
    {
        id: 4,
        title: 'GTA Samp',
        des: 'Интерфейс инвентаря персонажа',
        img: projectsImages.steamPay,
        iconLists: ['/re.svg', '/tail.svg', '/ts.svg'],
        link: 'example.com',
    },
];

export const testimonials = [
    {
        quote: 'Сотрудничать с Адрианом было абсолютным удовольствием. Его профессионализм, оперативность и стремление к достижению исключительных результатов были очевидны на протяжении всего нашего проекта. Энтузиазм Адриана в каждом аспекте разработки действительно выделяется. Если вы хотите улучшить свой сайт и возвысить свой бренд, Адриан - идеальный партнер.',
        name: 'Michael Johnson',
        title: 'Director of AlphaStream Technologies',
    },
    {
        quote: 'Сотрудничать с Адрианом было абсолютным удовольствием. Его профессионализм, оперативность и стремление к достижению исключительных результатов были очевидны на протяжении всего нашего проекта. Энтузиазм Адриана в каждом аспекте разработки действительно выделяется. Если вы хотите улучшить свой сайт и возвысить свой бренд, Адриан - идеальный партнер.',
        name: 'Michael Johnson',
        title: 'Director of AlphaStream Technologies',
    },
    {
        quote: 'Сотрудничать с Адрианом было абсолютным удовольствием. Его профессионализм, оперативность и стремление к достижению исключительных результатов были очевидны на протяжении всего нашего проекта. Энтузиазм Адриана в каждом аспекте разработки действительно выделяется. Если вы хотите улучшить свой сайт и возвысить свой бренд, Адриан - идеальный партнер.',
        name: 'Michael Johnson',
        title: 'Director of AlphaStream Technologies',
    },
    {
        quote: 'Сотрудничать с Адрианом было абсолютным удовольствием. Его профессионализм, оперативность и стремление к достижению исключительных результатов были очевидны на протяжении всего нашего проекта. Энтузиазм Адриана в каждом аспекте разработки действительно выделяется. Если вы хотите улучшить свой сайт и возвысить свой бренд, Адриан - идеальный партнер.',
        name: 'Michael Johnson',
        title: 'Director of AlphaStream Technologies',
    },
    {
        quote: 'Сотрудничать с Адрианом было абсолютным удовольствием. Его профессионализм, оперативность и стремление к достижению исключительных результатов были очевидны на протяжении всего нашего проекта. Энтузиазм Адриана в каждом аспекте разработки действительно выделяется. Если вы хотите улучшить свой сайт и возвысить свой бренд, Адриан - идеальный партнер.',
        name: 'Michael Johnson',
        title: 'Director of AlphaStream Technologies',
    },
    {
        quote: 'Сотрудничать с Адрианом было абсолютным удовольствием. Его профессионализм, оперативность и стремление к достижению исключительных результатов были очевидны на протяжении всего нашего проекта. Энтузиазм Адриана в каждом аспекте разработки действительно выделяется. Если вы хотите улучшить свой сайт и возвысить свой бренд, Адриан - идеальный партнер.',
        name: 'Michael Johnson',
        title: 'Director of AlphaStream Technologies',
    },
];

export const workExperience = [
    {
        id: 1,
        title: 'Frontend разработчик',
        desc: 'Помогал в разработке веб-платформы с использованием React.js, повышающей интерактивность.',
        className: 'md:col-span-2',
        thumbnail: '/exp1.svg',
    },
    // {
    //     id: 2,
    //     title: 'Mobile App Dev - JSM Tech',
    //     desc: 'Designed and developed mobile app for both iOS & Android platforms using React Native.',
    //     className: 'md:col-span-2', // change to md:col-span-2
    //     thumbnail: '/exp2.svg',
    // },
    {
        id: 3,
        title: 'Внештатный проект по разработке приложений',
        desc: 'Руководил разработкой приложения для клиента, начиная с первоначальной концепции.',
        className: 'md:col-span-2', // change to md:col-span-2
        thumbnail: '/exp3.svg',
    },
    {
        id: 4,
        title: 'Ведущий фронтенд-разработчик',
        desc: 'Разрабатывал и поддерживал пользовательские функции, используя современные фронтенд-технологии.',
        className: 'md:col-span-2',
        thumbnail: '/exp4.svg',
    },
];

export const socialMedia = [
    {
        id: 1,
        img: '/git.svg',
    },
    {
        id: 2,
        img: '/twit.svg',
    },
    {
        id: 3,
        img: '/link.svg',
    },
];
