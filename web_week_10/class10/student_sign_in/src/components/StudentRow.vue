<template>
    <tr v-bind:class=' { present: student.present, absent: !student.present } '>
        <td>{{student.name}}</td>
        <td>{{student.starID}}</td>
        <td>
            <input
            type='checkbox' 
            v-bind:checked='student.present' 
            v-on:change='arrivedOrLeft(student, $event.srcElement.checked)'>
        </td>
        <td v-show='edit'> <img class='delete-icon' v-on:click='deleteStudent' src='@/assets/delete.png'> </td>
    </tr>
</template>
<script>
export default {
    name: 'StudentRow',
    props: {
        student: Object,
        edit: Boolean
    },
    methods:{
        arrivedOrLeft(student, present) {
            this.$emit('student-arrived-or-left', student, present)
        },
        deleteStudent() {
            if (confirm(`Delete ${this.student.name}?`)) {
                this.$emit('delete-student', this.student)
            }
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

/* Cannot figure out how to resize this icon */
img {
    height: 25px;
}
</style>
