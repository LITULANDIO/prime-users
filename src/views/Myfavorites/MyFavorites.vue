<template src="./MyFavorites.html"></template>

<script>
import Table from "@/components/Table/Table.vue";
import GoBack from "@/components/go-back/GoBack.vue";
import { DataProvider } from "@/data-providers/index.js";
import { ref, onBeforeMount, onBeforeUpdate } from '@vue/runtime-core';
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
    name: 'MyFavorites',
    components:{
        Table,
        GoBack
    },
    setup(){
        const store = useStore();
        const router = useRouter();
        const headersRefList = ref(null);
        const rowsRefList = ref(null);

         onBeforeMount(() =>{
            getHeaders();
            getExistRows();
        }); 

        onBeforeUpdate(() =>{

        });

         const getHeaders = () =>{
            headersRefList.value = ['Género', 'Nombre', 'Email', 'Nacionalidad', 'Fecha de Nacimiento', 'Fecha de registro'];
        }

         const getExistRows = () =>{
            if(store.getters["GET_FAVORITES"] != []){
                rowsRefList.value = store.getters["GET_FAVORITES"] 
            }
        }

        const onGoDetail = (id) =>{
            store.commit('SET_PARAM', id.id);
            router.push(`/detail-user/${id.id}`)
        }

        const onExportCsv = async () =>{
            let request = null;
            try{
                request = await DataProvider("USERS_PROFILE", "GET_CSV")

            }catch(error){
                console.error(`Error not export csv ${error}`)
            }
            return request;
        }

        return {
            headersRefList,
            rowsRefList,
            onGoDetail,
            onExportCsv   

        }
    }

}
</script>

<style lang="scss" src="./MyFavorites.scss"></style>