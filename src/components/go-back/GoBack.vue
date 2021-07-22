<template src="./GoBack.html"></template>

<script>
import { useRouter } from "vue-router";

export default {
    name: "GoBack",
    setup(){

        const router = useRouter();

        const onGoBack = () =>{
            router.go(-1);
        }

        return{
            onGoBack
        }
    }

}
</script>

<style lang="scss" src="./GoBack.scss" scoped></style>