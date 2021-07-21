<template src="./Table.html"></template>

<script>
export default {
    name: 'Table',
    props:{
        headers: {
            type: Array,
            required: true
    },
        rows: {
            type: Array,
            required: true
    },

    },
    setup(){

        return{

        }
    }

}
</script>

<style lang="scss" src="./Table.scss" scoped></style>