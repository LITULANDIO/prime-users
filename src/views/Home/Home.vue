<template src="./Home.html"></template>

<script>
import { getDataUsers } from "@/computation/users.js";

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
            getRows();

        });

        const getHeaders = () =>{
            headersRefList.value = ['Género', 'Nombre', 'Email', 'Nacionalidad', 'Fecha de Nacimiento', 'Fecha de registro'];
        }

        const getRows = async () =>{
            rowsRefList.value = await getDataUsers();
        }


        return{
            headersRefList,
            rowsRefList
        }
    }

}
</script>

<style lang="scss" src="./Home.scss" scoped></style>