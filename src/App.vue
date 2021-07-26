<template>

  <aside class="top-bar bg-gray">
    <div class="container flex">
      <h2 class="site-logo no-select">.Portfolio</h2>
        <div class="top-bar-btn-row">
          <div class="changeTheme" @click="changeTheme"><i class="fas fa-adjust"></i></div>
          <a class="changeLng no-select" @click="changeLng('en')" v-if="$i18n.locale === 'ru'">RU / EN</a>
          <a class="changeLng no-select" @click="changeLng('ru')" v-else>EN / RU</a>
        </div>

    </div>
  </aside>

  <div class="rainbow-overflow extra-bold gradient" :data-title="$t('default.site-title')"/>

  <header class="bg-gray" id="header" ref="header" :style="{top: -headerOffsetTop + 'px'}">
    <section class="header-wrapper" :style="headerScaleDown">
      <h1 class="header-title extra-bold">{{$t('default.header.title')}}<br>
        <div class="rainbow-wrapper">
          <span class="rainbow-text">
            {{$t('default.site-title')}}
          </span>
        </div>
      </h1>
      <p class="header-body" v-html="$t('default.header.body')"/>
        <div class="header-btns-group">
          <a class="header-btn btn-black" @click="scrollTo('main')">{{$t('default.header.btns.left')}}</a>
          <a class="header-btn" @click="scrollTo('footer')">{{$t('default.header.btns.right')}}</a>
        </div>

      <article class="skills-group border-top">
        <div class="skills-body">
          <p class="skill-item" v-for="(skill, index) in skills" :key="index">{{ skill }}</p>
        </div>
        <h3 class="skills-subtitle">{{$t('default.header.skills-subtitle')}}</h3>
      </article>
    </section>
  </header>

  <ScrollTop :breakPoint="750" :srcolledTop="scrolled"/>

  <main class="box-shadow" id="main" v-show="animationPassed">
      <h2 class="main-title extra-bold">{{$t('default.main.title')}}</h2>
      <p class="main-subtitle">{{$t('default.main.subtitle')}}</p>
    <section class="main-section container">
      <MainArticle  v-for="(item, index) in mainWorks[$i18n.locale]" :key="index"
                    :article="item"
                    :index="index"
                    :scrolledTop="scrolled"/>
    </section>
  </main>

  <footer class="bg-gray" id="footer" v-show="animationPassed" :style="{bottom: -footerOffsetBottom + 'px'}">
    <h2 class="footer-title rainbow-text">{{$t('default.footer.title')}}</h2>
    <div class="footer-btns-group">
        <a href="https://t.me/Octupus_Prime" class="footer-btn">Telegram</a>
        <a href="https://discordapp.com/users/413386522113343489" class="footer-btn">Discord</a>
        <a href="https://github.com/OctupusPrime" class="footer-btn">GitHub</a>
        <a href="https://join.skype.com/invite/EKze61xJsqav" class="footer-btn">Skype</a>
    </div>
    <div class="footer-info">
        <a href="tel:+380958553178" class="footer-info-bnt">095 855 3178</a>
        <a href="mailto:rasiapypkin2014@gmail.com" class="footer-info-bnt">rasiapypkin2014@gmail.com</a>
    </div>
    <div class="footer-body">
      <p class="footer-body-item">© 2021 .Portfolio </p>
      <p class="footer-body-item">{{$t('default.footer.designed')}}</p>
      <p class="footer-body-item">{{$t('default.footer.developed')}}</p>
    </div>
  </footer>

</template>

<script>
import MainArticle from "@/components/MainArticle.vue"
import ScrollTop from "@/components/ScrollTop.vue"

export default {
  components: {
    MainArticle,
    ScrollTop
  },
  data: () => ({
    scrolled: 0,
    headerOffsetTop: 0,
    footerOffsetBottom: 0,
    animationPassed: false,
    isDarkTheme: false,
    skills: ['HTML 5', 'CSS, LESS', 'Vue, Nuxt', 'Javascript', 'gulp', 'Figma', 'node.js'],
    mainWorks: {
      "en": [
        {
          title: '.Todos',
          body: 'The rest api application with registration and authentication and a client is built like Trello with its own functions and full responsiveness.',
          appLink: 'https://vue-todos-nuxt.herokuapp.com',
          gitLink: 'https://github.com/OctupusPrime/todos-v2',
          imgPath: 'work1.png',
          isMobile: true
        },{
          title: '.MyKeep',
          body: 'An application for creating notes in the form of a responsive spreadsheet like Google keep with saving elements using vuex.',
          appLink: 'https://my-keep-v2.herokuapp.com',
          gitLink: 'https://github.com/OctupusPrime/my-keep-v2',
          imgPath: 'work2.png',
          isMobile: true
        },{
          title: '.MyPaint',
          body: 'Simple drawing app with play and save features in vuex.',
          appLink: 'https://my-paint.herokuapp.com',
          gitLink: 'https://github.com/OctupusPrime/my-paint',
          imgPath: 'work3.png',
          isMobile: false
        },{
          title: 'Digital art',
          body: 'Landing page digital art with full responsiveness.',
          appLink: 'https://octupusprime.github.io/digital-art-markup',
          imgPath: 'work4.png',
          isMobile: true    
        },{
          title: 'Digg',
          body: 'A simple landing page with full responsiveness and a working mobile menu.',
          appLink: 'https://dying-fuel.000webhostapp.com',
          imgPath: 'work5.png',
          isMobile: true      
        }
      ],
      "ru": [
        {
          title: '.Todos',
          body: 'Приложение состоит из rest api с регистрацией и аутентификацией и клиента который построен как Trello со своими функциями и полным адаптивом.',
          appLink: 'https://vue-todos-nuxt.herokuapp.com',
          gitLink: 'https://github.com/OctupusPrime/todos-v2',
          imgPath: 'work1.png',
          isMobile: true  
        },{
          title: '.MyKeep',
          body: 'Приложение для создания заметок в видe адаптивной таблицы как Google keep с сохранение элементов c помочью vuex.',
          appLink: 'https://my-keep-v2.herokuapp.com',
          gitLink: 'https://github.com/OctupusPrime/my-keep-v2',
          imgPath: 'work2.png',
          isMobile: true
        },{
          title: '.MyPaint',
          body: 'Простое приложение для рисования с функциями воспроизведения и сохранения в vuex.',
          appLink: 'https://my-paint.herokuapp.com',
          gitLink: 'https://github.com/OctupusPrime/my-paint',
          imgPath: 'work3.png',
          isMobile: false
        },{
          title: 'Digital art',
          body: 'Целевая страница digital art с полным адаптивом.',
          appLink: 'https://octupusprime.github.io/digital-art-markup',
          imgPath: 'work4.png',
          isMobile: true     
        },{
          title: 'Digg',
          body: 'Простоя целевая страница с полным адаптивом и с рабочим мобильным меню.',
          appLink: 'https://dying-fuel.000webhostapp.com',
          imgPath: 'work5.png',
          isMobile: true     
        }
      ]
    }
  }),
  watch: {
    'isDarkTheme'() {
      document.body.classList.remove('dark')
      if (this.isDarkTheme)
        document.body.classList.add('dark')
    }
  },
  computed: {
    headerScaleDown() {
      let scale = (100 - (this.scrolled - this.headerOffsetTop) / 40) / 100
      if (scale > 1)
        return {
          transform: 'scale(1)',
          opacity: 1
        }
      return {
        transform: `scale(${scale})`,
        opacity: (100 - (this.scrolled - this.headerOffsetTop) / 10) / 100
      }
    }
  },
  methods: {
    changeLng(lang) {
      this.$store.commit('changeLocale', lang)
      this.$i18n.locale = lang
      this.resized()
    },
    changeTheme() {
      this.isDarkTheme = !this.isDarkTheme
      this.$store.commit('changeTheme', this.isDarkTheme)
    },
    scrollTo(blockId) {
      const block = document.getElementById(blockId).getBoundingClientRect()
      switch(blockId) {
        case('footer'): 
          window.scrollTo({top: document.body.scrollHeight - block.height})
          break;
        default:
          window.scrollTo({top: block.y - document.querySelector('.top-bar').offsetHeight})
          break;
      }
    },
    resized() {
      setTimeout(function(){//load animation
        this.headerOffsetTop = Math.abs(window.innerHeight - document.getElementById('header').offsetHeight)
        this.footerOffsetBottom = Math.abs(window.innerHeight - document.getElementById('footer').offsetHeight - document.querySelector('.top-bar').offsetHeight)
      }.bind(this), 10)
    }
  },
  created() {
    this.isDarkTheme = this.$store.state.isDartTheme
    this.$i18n.locale = this.$store.state.locales
  },
  mounted() {
    const header = document.getElementById('header')

    this.$nextTick(() => {
      const rainbowText = document.querySelector('.rainbow-text').getBoundingClientRect()
      document.querySelector('.rainbow-overflow').style = `top: ${rainbowText.y + rainbowText.height/2}px;`
    })
    
    setTimeout(function(){//load animation
      document.querySelector('.rainbow-overflow').classList.add('scale-down')
      setTimeout(function(){
        header.classList.add('auto-height')
        this.animationPassed = true
        this.resized()
      }.bind(this), 1000)
    }.bind(this), 450)
  
    window.addEventListener('scroll', function() {
        this.scrolled = window.scrollY;

        if (window.scrollY > header.offsetHeight) 
          header.classList.add('hidden')
        else  
          header.classList.remove('hidden') 
    }.bind(this))

    window.addEventListener('resize', function() {
      this.resized()
    }.bind(this), true);

  }
}
</script>

<style>
  .hidden {
    opacity: 0;
    visibility: hidden;
  }

  .top-bar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
  }
  .top-bar .flex {
    align-items: center;
  }

  header {
    overflow: hidden;
    position: sticky;
    height: 100vh;
    z-index: 2;
  }
  .auto-height {
    min-height: 100vh;
    height: auto !important;
  }
  .header-wrapper {
    max-width: 700px;
    width: 95%;
    margin: 0 auto;
    position: relative;
  }

/* Typography */

  .top-bar h2 {
    padding: 1em 0;
  }
  .top-bar-btn-row {
    display: flex;
    align-items: center;
  }
  .top-bar .changeLng {
    font-size: 1rem;
    padding: 0;
  }
  .top-bar .changeTheme {
    font-size: 18px;
    margin-right: 20px;
    border-radius: 50%;
    background: var(--text-black);
    color: var(--bg-white);
    cursor: pointer;
  }
  .top-bar .changeTheme i {
    padding: 10px;
  }

  .header-title {
    padding-top: 25vh;
    text-align: center;
    font-size: 3.375rem;
  }
  .rainbow-text {
    background: linear-gradient(265.2deg, var(--bg-light-purple-blue) -2.62%, var(--bg-extra-light-blue) 102.34%);
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .header-body {
    font-size: 1.5rem;
    margin-top: 7%;
  }
  .header-btn + .header-btn {
    margin-left: 15%;
  }

  .skill-item {
    width: 30%;
    flex-grow: 1;
    font-family: "Ubuntu Mono", monospace;
    font-size: 1.5rem;
    text-align: center;
  }
  .skills-subtitle {
    text-transform: uppercase;
    margin-top: 1.2em;
    font-weight: 700;
    text-align: center;
  }

  .main-title,
  .main-subtitle {
    text-align: center;
  }
  .main-title {
    font-size: 3rem;
    position: sticky;
    top: 77px;
    background: var(--bg-white);
    padding: 1.5vh 0;
    z-index: 2;
  }
  .main-subtitle {
    font-size: 1.2rem;
  }

  .footer-title {
    padding-top: 30vh;
    font-size: 3rem;
  }
  .footer-title::before {
    content: '🤘';
    clear: right;
    display: block;
    -webkit-text-fill-color: initial;
  }
  .footer-btn {
    margin: 0 7px;
    margin-top: 3%;
    font-weight: 600;
    color: var(--text-dark-gray);
    background: var(--bg-dark-gray);
    padding: .5em .7em;
    border-radius: 20px;
  }
  .footer-info-bnt {
    display: block;
    font-size: 1.4rem;
    color: var(--text-dark-gray);
  }

/* Layout */

  .rainbow-wrapper {
    position: relative;
  }
  .rainbow-overflow{
    display: block;
    width: 300vh;
    height: 300vh;
    position: fixed;
    left: 50%;
    transition: all .9s ease;
    overflow: hidden;
    transform: translate(-50%, -50%);
    z-index: 10;
    border-radius: 100%;
  }
  .rainbow-overflow::after {
    content: attr(data-title);
    display: inline-block;
    font-size: 3.375rem;
    color: var(--text-black);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .scale-down{
    width: 0;
    height: 0;
  }

  .header-btns-group {
    text-align: center;
    margin-top: 7%;
  }

  .skills-group {
    margin-top: 13%;
    padding-bottom: 47px;
  }
  .skills-body {
    max-width: 500px;
    width: 100%;
    margin: 0 auto;
    margin-top: 20px;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: center;
  }
  
  main {
    background: var(--bg-white);
    position: sticky;
    z-index: 3;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
    padding: 70px 0;
  }

  footer {
    min-height: 100vh;
    text-align: center;
    position: sticky;
    bottom: 0;
    z-index: 1;
  } 
  .footer-body {
    padding-top: 7vh;
    padding-bottom: 12vh;
  }
  .footer-info {
    margin-top: 30px;
  }
  .footer-body-item {
    font-size: 1.2rem;
    color: var(--text-light-gray);
    margin-bottom: .5em;
  }

/* Transition */

  .top-bar, header, main, footer {
    transition: background .2s ease;
  }

  .skills-group {
    transition: border .2s ease
  }

/* Media */

  @media (max-width: 600px) {
    .header-title {
      padding-top: 25vh;
    }
    .header-btn + .header-btn {
      margin: 0;
      margin-top: .5em;
    }

    .skill-item {
      width: 50%;
    }
    
    main {
      padding: 50px 0;
    }

    .footer-title {
      padding-top: 25vh;
    }
    .footer-btns-group {
      margin-top: 1em;
    }
  }

@media (max-width: 400px) {
  .main-title {
    top: 65.5px;
  }
}
</style>
