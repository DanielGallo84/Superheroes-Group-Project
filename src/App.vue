<script setup>
import { RouterView } from 'vue-router'
import Header from './general/Header.vue';
import Footer from './general/Footer.vue';
import { useApiCharactersStore } from './stores/ApiCharactersStore';
import { useFavouriteCharactersStore } from './stores/FavouriteCharactersStore';
import { useNewCharacterStore } from './stores/NewCharacterStore';

const favStore = useFavouriteCharactersStore()
const store = useApiCharactersStore()
const newCharStore = useNewCharacterStore()
const settingCharacters = async () => { await store.setCharacters() }
settingCharacters()

</script>

<template>
  <Header />
  <RouterView />
  <Footer />
</template>

<style scoped>

</style>
