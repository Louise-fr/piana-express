<template>
    <div>
      <div class="col-md-4">
          <div class="form-group">
              <label for="message">
                  Message</label>
              <textarea name="message" id="message" class="form-control" rows="9" cols="25" required="required"
                  placeholder="Votre message (vous pouvez également y indiquer un numéro de téléphone si vous le souhaitez)" :disabled="isDisabledMessage" v-model="message" @input="$emit('visitor-message', message)"></textarea>
          </div>
      </div>
      <div class="col-md-4">
          <div class="form-group">
              <label for="subject">Dates de réservation</label>	 	
              <div class="input-group input-daterange" data-provide="datepicker"  >
                  <input type="text" class="form-control" id="datepicker1" :disabled="isDisabledDate" :required="isRequired">
                  <div class="input-group-addon">au</div>
                  <input type="text" class="form-control" id="datepicker2" :disabled="isDisabledDate" :required="isRequired">
              </div>
          </div>
      </div>
  </div>
</template>


<script>

export default {
    name: 'FormChoiceFields',
    props: ['choice', 'end_date'],
    data: function () {
    return {
        message: '',
    }
  },
  computed: {
    isDisabledMessage: function(){
        if ((this.choice == 'dates') || (this.choice == 'infos')){
            return false
        }
        return true
    },
    isDisabledDate: function(){
        if (this.choice == 'dates'){
            return false
        }
        return true
    },
    isRequired: function(){
        if (this.choice == 'dates'){
            return true
        }
        return false
    },
  },
  methods: {
  },
};
</script>


<style >

</style>
