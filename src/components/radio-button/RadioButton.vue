<template src="./RadioButton.html"></template>

<script>
export default {
    name: 'RadioButton',
    props:{
        name:{
            type: String,
        },
        label:{
            type: String,
            required: true
        },
        value:{
            type: [String, Boolean, Number]
        },

    },
    emits:['selected-radio', 'update:checked'],
    
}
</script>

<style lang="scss" src="./RadioButton.scss" scoped></style>