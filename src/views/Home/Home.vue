<template src="./Home.html"></template>

<script>
import { getDataUsers } from "@/computation/users.js";

import Table from "@/components/Table/Table.vue";
import { ref, onBeforeMount } from '@vue/runtime-core';
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
    name: 'Home',
    components:{
        Table,
    },
    setup(){
        const store = useStore();
        const router = useRouter();
        const headersRefList = ref(null);
        const rowsRefList = ref(null);
        const dataDetail = ref(null);

        onBeforeMount(() =>{
            getHeaders();
            getExistRows();
        });       

        const getHeaders = () =>{
            headersRefList.value = ['Género', 'Nombre', 'Email', 'Nacionalidad', 'Fecha de Nacimiento', 'Fecha de registro'];
        }

        const getRows = async () =>{
            store.commit('SET_USERS', await getDataUsers())
            rowsRefList.value = store.getters["GET_USERS"]
            console.log(store)
        }

        const getExistRows = () =>{
            if(store.getters["GET_USERS"] != []){
                rowsRefList.value = store.getters["GET_USERS"] 
            }
        }

       
        const onGoDetail = (id) =>{
            store.commit('SET_PARAM', id.id);
            router.push(`/detail-user/${id.id}`)
        }

        const onShowUsers = () =>{
            getRows();
        }


        return{
            headersRefList,
            rowsRefList,
            dataDetail,
            onGoDetail,
            onShowUsers
        }
    }

}
</script>

<style lang="scss" src="./Home.scss" scoped></style>