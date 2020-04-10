<template>
    <div> 
        <label for="subject">Objet</label>
        <select v-model="choice" id="subject" name="subject" class="form-control" required="required" @change="$emit('visitor-choice', choice)">
            <option value="" selected disabled hidden>Choisir une demande</option>
            <option v-for="subject in subjects" :key="subject.id" :value="subject.value">
              {{ subject.text }}
            </option>
            </select>
    </div>
</template>


<script>
export default {
  name: 'FormChoice',
  data: function () {
    return {
        choice: '',
        subjects: [
          {id: 0, value: "dates", text: "Je souhaite réserver des dates"},
          {id: 1, value: "infos", text: "Je souhaite avoir plus d'informations"}
        ]
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

</style>
