<template>
    <div class="scroll-top btn" @click="scrollTop" :class="{'active': isActive}"><i class="fas fa-chevron-up"></i></div>  
</template>

<script>
export default {
    name: "ScrollTop",
    props: {
        breakPoint: Number,
        srcolledTop: Number
    },
    data: () => ({
        isActive: false
    }),
    watch: {
        srcolledTop() {
            if (this.srcolledTop > this.breakPoint)
                return this.isActive = true;

            return this.isActive = false;
        }
    },
    methods: {
        scrollTop() {
            window.scrollTo({ top: 0 });
        }
    }
}
</script>

<style scoped>
    .scroll-top {
        font-size: 20px;
        width: 40px;
        text-align: center;
        cursor: pointer;
        border-radius: 50%;
        background: var(--bg-light-blue);
        color: var(--bg-white);
        position: fixed;
        left: 50%;
        bottom: 3%;
        z-index: 10;
        opacity: 0;
        visibility: hidden;
        transform: translateY(15px) translate(-50%, 0);
        transition: all .2s ease;
    }
    .scroll-top i {
        padding: 10px 0;
    } 
    .active {
        opacity: 1;
        visibility: visible;
        transform: translateY(0) translate(-50%, 0);
    }
</style>