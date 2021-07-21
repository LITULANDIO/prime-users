<template src="./Home.html"></template>

<script>
import Table from "@/components/Table/Table.vue";
import { ref, onBeforeMount } from '@vue/runtime-core';

export default {
    name: 'Home',
    components:{
        Table,
    },
    setup(){

        const headersRefList = ref(null);
        const rowsRefList = ref(null);

        onBeforeMount(() =>{
            getHeaders();

        });

        const getHeaders = () =>{
            headersRefList.value = ['Género', 'Nombre', 'Nacionalidad', 'Fecha de Nacimiento', 'Fecha de registro'];
        }


        return{
            headersRefList,
            rowsRefList
        }
    }

}
</script>

<style lang="scss" src="./Home.scss" scoped></style>