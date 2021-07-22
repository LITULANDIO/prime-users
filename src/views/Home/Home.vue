<template src="./Home.html"></template>

<script>
import { getDataUsers, fetchGenderMale, fetchGenderFemale } from "@/computation/users.js";

import Table from "@/components/Table/Table.vue";
import RadioButton from "@/components/radio-button/RadioButton.vue";
import { ref, onBeforeMount } from '@vue/runtime-core';
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
    name: 'Home',
    components:{
        Table,
        RadioButton
    },
    setup(){
        const store = useStore();
        const router = useRouter();
        const headersRefList = ref(null);
        const rowsRefList = ref(null);
        const dataDetail = ref(null);
        const genderRefStr = ref("");
        const showRefFilters = ref(false);

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

        const onGoMyFavorites = () =>{
            router.push("/my-favorites")
        }

        const onShowUsers = () =>{
            getRows();
        }

        const onGoFilters = () =>{
            rowsRefList.value = fetchGenderMale()
        }

        const onSelectedMale = (value) =>{
            genderRefStr.value = value;
            rowsRefList.value = fetchGenderMale()
        }

        const onSelectedFemale = (value) =>{
            genderRefStr.value = value;
           rowsRefList.value = fetchGenderFemale();
        }

        const onShowFilters = () =>{
            console.log('eiiiiiii')
            showRefFilters.value = !showRefFilters.value
        }




        return{
            headersRefList,
            rowsRefList,
            dataDetail,
            genderRefStr,
            showRefFilters,
            onGoDetail,
            onShowUsers,
            onGoMyFavorites,
            onGoFilters,
            onSelectedMale,
            onSelectedFemale,
            onShowFilters
        }
    }

}
</script>

<style lang="scss" src="./Home.scss" scoped></style>