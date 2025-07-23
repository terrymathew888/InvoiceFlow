<template>
  <header class="flex">
    <div class="branding flex">
      <img src="@/assets/logo.png" alt="" />
    </div>
  </header>
</template>

<script>
/* eslint-disable vue/multi-word-component-names */
export default {
  name: "navigation",
};
</script>

<style lang="scss" scoped>
header {
    z-index: 99;
    flex-direction: row;
    background-color: #1e2139;
    @media(min-width: 900px) {
        min-height: 100%;
        min-width: 90px;
        flex-direction: column;
        border-radius: 0 20px 20px 0;
    }

    .branding {
        border-radius: 0 20px 20px 0;
        background-color: #7c5dfa;
        justify-content: center;
        padding: 24px;
        @media(min-width: 900px) {
            width: 100%;
        }

        img {
            width: 50px;
            height: 50px;
        }
    }
}
</style>
