<template>
    <div>
        <div class="card student-list m-2 p-2">
            <h4 class="card-title">Student List</h4>
            <div id="student-table">
                <table class="table">
                    <tr>
                        <th>Name</th>
                        <th>StarID</th>
                        <th>Present?</th>
                    </tr>

                   <!-- create table rows 
                   Each row will have a checkbox, bound to the app's data 
                   When the checkbox is checked/unchecked, the student will be signed in/out -->

                   <StudentRow
                        v-for="student in students"
                        v-bind:student="student" v-bind:key="student.starID"
                        v-on:student-arrived-or-left="arrivedOrLeft">
                   </StudentRow>
                </table>
            </div>
        </div>
    </div>
</template>

<script>

import StudentRow from '@/components/StudentRow.vue'

export default {
    name:'StudentTable',
    components: {
        StudentRow
    },
    props: {
        students: Array
    },
    methods: {
        arrivedOrLeft(student, present) {
            // emit message to parent
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