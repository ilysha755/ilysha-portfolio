<template>
    <section class="nf">
        <div class="nf__container container">
                <photo-box/>
                <div class="nf__text">
                    Oops! Page not found o_0
                    <router-link class="btn--long" to="/">Go back!</router-link>
                </div>
        </div>
    </section>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
@import "@/styles/general";
@import "@/styles/variables";
@import "@/styles/ui/button";
@import "@/styles/notfound";
</style>