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
        title:{
            type: String
        }

    },
    setup(props, {emit}){

        const onGoDetail = (event) =>{
            emit('onGoDetail', {id: event.target.id})
        }

        return{
            onGoDetail
        }
    }

}
</script>

<style lang="scss" src="./Table.scss" scoped></style>