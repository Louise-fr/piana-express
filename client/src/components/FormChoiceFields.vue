<template>
    <div>
      <div class="col-md-4">
          <div class="form-group">
              <label for="name">
                  Message</label>
              <textarea name="message" id="message" class="form-control" rows="9" cols="25" required="required"
                  placeholder="Message" :disabled="isDisabledMessage"></textarea>
          </div>
      </div>
      <div class="col-md-4">
          <div class="form-group">
              <label for="subject">Dates de réservation</label>	 	
              <div class="input-group input-daterange" data-provide="datepicker">
                  <input type="text" class="form-control" id="datepicker" :disabled="isDisabledDate">
                  <div class="input-group-addon">au</div>
                  <input type="text" class="form-control" id="datepicker2" :disabled="isDisabledDate">
              </div>
          </div>
      </div>
  </div>
</template>


<script>
export default {
  name: 'FormChoiceFields',
  props: ['choice'],
  computed: {
    isDisabledMessage: function(){
        if ((this.choice == 'dates') || (this.choice == 'infos')){
            return false
        }
        else return true
    },
    isDisabledDate: function(){
        if (this.choice == 'dates'){
            return false
        }
        else return true
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

</style>
