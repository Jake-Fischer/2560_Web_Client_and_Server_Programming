<template>
    <div>
        <div class="card student-list m-2 p-2">
            <h4 class="card-title">Student List</h4>
            <div id="student-table">
                <table class="table">
                    <div class='edit-table-toggle form-check'>
                        <input id='edit-table' type='checkbox' class='form-check-input' v-model="editTable">
                        <label for='edit-label' class='form-check-label'>Edit label?</label>
                    </div>
                    <tr>
                        <th>Name</th>
                        <th>StarID</th>
                        <th>Present?</th>
                        <th v-show='editTable'>Delete</th>
                    </tr>

                   <!-- create table rows 
                   Each row will have a checkbox, bound to the app's data 
                   When the checkbox is checked/unchecked, the student will be signed in/out -->

                   <StudentRow
                        v-for="student in students"
                        v-bind:student="student" v-bind:key="student.starID"
                        v-bind:edit='editTable'
                        v-on:student-arrived-or-left="arrivedOrLeft"
                        v-on:delete-student="deleteStudent"
                        >
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
    data() {
        return {
            editTable: false
        }
    },
    methods: {
        arrivedOrLeft(student, present) {
            // emit message to parent
            this.$emit('student-arrived-or-left', student, present)
        },
        deleteStudent(student){
            this.$emit('delete-student', student)
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