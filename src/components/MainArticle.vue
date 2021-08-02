<template>
    <article class="main-article flex" :class="{'img-left': (index + 1) % 2 === 0}">
        <div class="article-text">
            <div class="article-title">
                <span class="article-index no-select">{{ index + 1 }}</span>
                <h3>{{ article.title }}</h3>
                <span class="article-devices">
                    <i class="fas fa-desktop" />
                    <i class="fas fa-mobile" v-if="article.isMobile"/>
                </span>
            </div>
            <p class="article-body">{{ article.locale[$i18n.locale].body }}</p>
            <div class="steck-group">
                <p class="steck-item" v-for="item in article.steck" :key="item">{{item}}</p>
            </div>
            <div class="article-bnts-group" v-if="article.gitLink">
                <a :href="article.appLink" class="article-btn btn-black" target="_blank">{{$t('default.main.btns.app')}}</a>
                <a :href="article.gitLink" class="article-btn btn-white" target="_blank">GitHub</a>
            </div>
            <div class="article-bnts-group" v-else>
                <a :href="article.appLink" class="article-btn btn-black" target="_blank">{{$t('default.main.btns.demo')}}</a>
            </div>
        </div>
        <div class="article-img img-shadow">
            <img :src="require(`@/assets/img/work${index + 1}.png`)" :alt="article.title">
        </div>
    </article>
</template>

<script>
export default {
    name: "MainArticle",
    props: {
        article: Object,
        index: Number
    }
}
</script>

<style scoped>
    .main-article {
        padding-top: 70px;
        margin: 0 -25px;
    }

/* Typography */

    .article-title h3 {
        font-size: 2rem;
        margin-left: .6em;
        font-weight: 600;
    }
    .article-index {
        font-size: 1.75rem;
        font-weight: 600;
        min-width: 1.4em;
        padding: 0 .2em;
        text-align: center;
        border-radius: .45em;
        border: 3px solid var(--text-black);
    }
    .article-devices {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 22px;
        padding-left: .75em;
        margin-left: auto;
    }
    .article-devices i + i {
        margin-left: .75em;
    }

    .article-body {
        font-size: 1.5rem;
        margin-top: 1em;
    }

    .steck-item {
        display: inline-block;
        font-size: 1.2rem;
        font-weight: 600;
        padding: .25em .5em;
        margin: .5em .5em 0 0;
        color: var(--bg-white);
        background: var(--text-black);
        border-radius: 8px;
    }

    .article-btn {
        margin: 0 7px;
        margin-top: 1em;
        border: 3px solid transparent;
    }

/* Layout */

    .article-text,
    .article-img {
        margin: 0 25px;
    }
    .article-text {
        width: 40%;
    }
    .article-img {
        border-radius: 10px;
    }

    .article-title {
        display: flex;
        align-items: center;
    }
    .article-bnts-group {
        display: inline-block;
        margin: 0 -7px;
    }

    .img-left .article-text {
        order: 2;
    }

/* Media */
  @media (max-width: 1000px) {
    .article-text {
        width: 60%;
    }
  }

  @media (max-width: 800px) {
    .main-article,
    .article-text,
    .article-img {
        margin: 0;
    }

    .flex {
        flex-direction: column;
    }

    .article-text {
        width: 100%;
    }
    .article-bnts-group {
        margin: 0;
        width: 100%;
        text-align: center;
        padding-bottom: 6%;
    }
    .img-left .article-img {
        order: 2;
    }

  }

  @media (max-width: 600px) {
    .main-article {
        padding-top: 50px;
    }
  }
</style>