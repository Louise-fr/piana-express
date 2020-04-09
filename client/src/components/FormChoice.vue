<template>
    <div> 
        <label for="subject">Objet</label>
        <select v-model="choice" id="subject" name="subject" class="form-control" required="required" @change="$emit('visitor-choice', choice)">
            <option value="" selected disabled hidden>Choisir une demande</option>
            <option value="dates">Je souhaite réserver des dates</option>
            <option value="infos">Je souhaite avoir plus d'informations</option>
        </select>
    </div>
</template>


<script>
export default {
  name: 'FormChoice',
  data: function () {
    return {
        choice: ''
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

</style>
