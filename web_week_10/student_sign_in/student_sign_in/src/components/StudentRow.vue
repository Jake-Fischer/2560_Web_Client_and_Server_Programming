<template>
    <tr v-bind:class=' { present: student.present, absent: !student.present } '>
        <td>{{student.name}}</td>
        <td>{{student.starID}}</td>
        <td>
            <input type='checkbox' v-bind:checked='student.present' v-on:change='arrivedOrLeft(student, $event.srcElement.checked)'>
        </td>
    </tr>
</template>
<script>
export default {
    name: 'StudentRow',
    props: {
        student: Object
    },
    methods:{
        arrivedOrLeft(student, present) {
            this.$emit('student-arrived-or-left', student, present)
        }
    }
}
</script>
<style scoped>
.present {
    color: grey;
    font-style: italic;
}
.absent {
    color: black;
    font-weight: bold;
}
</style>
