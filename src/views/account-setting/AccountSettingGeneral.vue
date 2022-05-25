<template>
  <b-card>
    <!-- media -->

    <!--/ media -->

    <!-- form -->
    <b-form class="mt-2">
      <b-row>
        <b-col sm="6">
          <b-form-group label="Username" label-for="account-username">
            <b-form-input v-model="optionsLocal.name" placeholder="Username" name="username" />
          </b-form-group>
        </b-col>

        <b-col sm="6">
          <b-form-group label="E-mail" label-for="account-e-mail">
            <b-form-input v-model="optionsLocal.email" name="email" placeholder="Email" />
          </b-form-group>
        </b-col>
        <!-- <b-col sm="6">
          <b-form-group label="Company" label-for="account-company">
            <b-form-input v-model="optionsLocal.company" name="company" placeholder="Company name" />
          </b-form-group>
        </b-col> -->

        <!-- alert -->

        <!--/ alert -->

        <b-col cols="12">
          <b-button v-ripple.400="'rgba(255, 255, 255, 0.15)'" variant="primary" class="mt-2 mr-1"> Save changes </b-button>
          <b-button v-ripple.400="'rgba(186, 191, 199, 0.15)'" variant="outline-secondary" type="reset" class="mt-2" @click.prevent="resetForm">
            Reset
          </b-button>
        </b-col>
      </b-row>
    </b-form>
  </b-card>
</template>

<script>
import {
  BFormFile,
  BButton,
  BForm,
  BFormGroup,
  BFormInput,
  BRow,
  BCol,
  BAlert,
  BCard,
  BCardText,
  BMedia,
  BMediaAside,
  BMediaBody,
  BLink,
  BImg,
} from 'bootstrap-vue';
import Ripple from 'vue-ripple-directive';

export default {
  components: {
    BButton,
    BForm,
    BImg,
    BFormFile,
    BFormGroup,
    BFormInput,
    BRow,
    BCol,
    BAlert,
    BCard,
    BCardText,
    BMedia,
    BMediaAside,
    BMediaBody,
    BLink,
  },
  directives: {
    Ripple,
  },
  props: {
    generalData: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      optionsLocal: JSON.parse(localStorage.getItem('userData')),
      profileFile: null,
    };
  },
  methods: {
    resetForm() {
      this.optionsLocal = JSON.parse(localStorage.getItem('userData'));
    },
  },
};
</script>
