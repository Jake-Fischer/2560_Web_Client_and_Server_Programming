<template>
    <div>
        <div v-if='student.name'>
            <div class='alert alert-success' v-if='student.present'>
                Welcome, {{student.name}}
            </div>
            <div class='alert alert-info' v-else>
                Goodbye, {{student.name}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    //Create componet here
    name: 'StudentMessage',
    props: {
        student: Object
    }
}
</script>

<style scoped> 

</style>