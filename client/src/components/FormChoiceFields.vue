<template>
    <div>
      <div class="col-md-4">
          <div class="form-group">
              <label for="name">
                  Message</label>
              <textarea name="message" id="message" class="form-control" rows="9" cols="25" required="required"
                  placeholder="Message" v-bind:disabled="disabledMessage"></textarea>
          </div>
      </div>
      <div class="col-md-4">
          <div class="form-group">
              <label for="subject">Dates de réservation</label>	 	
              <div class="input-group input-daterange" data-provide="datepicker">
                  <input type="text" class="form-control" id="datepicker" v-bind:disabled="disabledDates">
                  <div class="input-group-addon">au</div>
                  <input type="text" class="form-control" id="datepicker2" v-bind:disabled="disabledDates">
              </div>
          </div>
      </div>
  </div>
</template>


<script>
export default {
  name: 'FormChoiceFields',
  props: ['choice'],
  data: function(){
      return {
          disabledMessage: true,
          disabledDates: true
      }
  },
  computed: {
    update: function(){
        if ((this.choice == 'dates') || (this.choice == 'infos')){
            this.disabledMessage= false
        }
        if (this.choice == 'dates'){
            this.disabledDates= false
        }
        if (this.choice != 'dates'){
            this.disabledDates= true
        }
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

</style>
