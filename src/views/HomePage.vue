<template>
  <v-card text="Login">
      <v-form>
        <v-container>
          <v-row>
            <v-col
                cols="12"
                md="4"
            >
              <v-text-field
                  v-model="state.email"
                  label="Email"
                  :class="{errorField: v$.email.$error}"
                  required
              ></v-text-field>
              <span v-if="v$.email.$error" class="red" >
                {{v$.email.$errors[0].$message}}
              </span>
            </v-col>
            <v-col
                cols="12"
                md="4"
            >

              <v-text-field
                  v-model="state.password"
                  counter="6"
                  label="Password"
                  required
              ></v-text-field>
              <span v-if="v$.password.$error" class="red">
                {{v$.password.$errors[0].$message}}
              </span>
            </v-col>
          </v-row>
        </v-container>
        <v-btn type="submit" block class="mt-2" @click="submitForm">Submit</v-btn>
      </v-form>
  </v-card>
</template>

<script>

import useVuelidate from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'
import {reactive, computed} from "vue";
import router from "@/router";

export default {
  setup(){
    const state = reactive({
      password: '',
      email: ''
    })

    const rules = computed(()=> {return {
      email: {required, email},
      password: {
        required, minLength: minLength(6)
      }
      }})
    const v$ = useVuelidate(rules, state)
    return {
      state, v$
    }
  },
  methods: {
    submitForm() {
      this.v$.$validate()
      if(!this.v$.$error){
        router.push({name: 'game'})
      }
    }
  }


}
</script>

<style >
.red {
  color: red;
}
.errorField input{
  border-color: red;
}
</style>