<template src="./DetailUser.html"></template>

<script>
import GoBack from "@/components/go-back/GoBack.vue";
import { getDataUserDetail } from "@/computation/users.js";
import { ref, onBeforeMount, onBeforeUpdate } from '@vue/runtime-core';
import { useStore } from "vuex";

export default {
    name: 'DetailUser',
    components:{
        GoBack,
    },
    setup(){
        const store = useStore();
        const dataRefUserDetailObj = ref(null);
        const centerRefObj = ref(null);
        const makerRefObj = ref(null);
        const showLike = ref(true);
        const dontLike = ref(false);

        onBeforeMount(() =>{
            getUser();
        });

        onBeforeUpdate(() =>{
            getCoordinatesMap();
        });


        const getUser = async () =>{
               dataRefUserDetailObj.value = await getDataUserDetail({id: store.getters["GET_PARAM"]});
        }

        const getCoordinatesMap = () =>{
                if(dataRefUserDetailObj.value){
                    centerRefObj.value = { lat: dataRefUserDetailObj.value.coordinates.lat, lng: dataRefUserDetailObj.value.coordinates.long }
                    makerRefObj.value = [{
                        position: {
                            lat: dataRefUserDetailObj.value.coordinates.lat, lng: dataRefUserDetailObj.value.coordinates.long
                        },
                    }]
                }
        }

        const onLikeFavorite = () =>{
           store.commit('SET_LIKE_FAVORITES', dataRefUserDetailObj.value)
           showLike.value = true;
           dontLike.value = false;
        }

        const onDontLikeFavorite = () =>{
            store.commit('SET_DONT_LIKE_FAVORITES', dataRefUserDetailObj.value)
            showLike.value = false;
            dontLike.value = true;
        }



        return{
            dataRefUserDetailObj,
            centerRefObj,
            makerRefObj,
            onLikeFavorite,
            onDontLikeFavorite,
            showLike,
            dontLike

        }
    }

}
</script>

<style lang="scss" src="./DetailUser.scss" scoped></style>