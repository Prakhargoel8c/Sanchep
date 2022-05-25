<template>
  <div class="faq-container">
    <!-- faq search section -->
    <section id="faq-search-filter">
      <b-card no-body class="faq-search" :style="{ backgroundImage: `url(${require('@/assets/images/banner.png')})` }">
        <b-card-body class="text-center">
          <h2 class="text-primary">Let's answer some questions</h2>
          <!-- <b-card-text class="mb-2"> or choose a category to quickly find the help you need </b-card-text> -->

          <!-- form -->
          <b-form class="faq-search-input">
            <b-form-group label-for="faq-search-input">
              <b-input-group class="input-group-merge">
                <b-input-group-prepend is-text>
                  <feather-icon icon="SearchIcon" />
                </b-input-group-prepend>
                <b-form-input id="searchbar" v-model="faqSearchQuery" placeholder="Ask a question..." />
              </b-input-group>
            </b-form-group>
          </b-form>
          <b-button v-ripple.400="'rgba(255, 255, 255, 0.15)'" variant="primary" @click="fetchFaqData">
            <feather-icon class="mr-50" icon="SearchIcon" /> Search
          </b-button>
        </b-card-body>
      </b-card>
    </section>
    <b-row v-if="faqData">
      <b-col cols="12">
        <b-card-actions :title="faqData.answer" action-collapse>
          <b-card-text>
            <span>{{ faqData.context }}</span>
          </b-card-text>
        </b-card-actions>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import {
  BCard,
  BCardBody,
  BForm,
  BInputGroup,
  BFormInput,
  BCardText,
  BInputGroupPrepend,
  BTabs,
  BTab,
  BImg,
  BRow,
  BCol,
  BAvatar,
  BButton,
  BFormGroup,
} from 'bootstrap-vue';
import BCardActions from '@core/components/b-card-actions/BCardActions.vue';
import { getResponse } from '@/@core/api/Samples';

export default {
  components: {
    BForm,
    BCard,
    BRow,
    BCol,
    BAvatar,
    BCardBody,
    BInputGroup,
    BFormInput,
    BCardText,
    BInputGroupPrepend,
    BTabs,
    BTab,
    BImg,
    BCardActions,
    BButton,
    BFormGroup,
  },
  data() {
    return {
      faqSearchQuery: '',
      faqData: null,
    };
  },
  methods: {
    fetchFaqData() {
      console.log('fetching faq data');
      const data = getResponse(this.faqSearchQuery);
      this.faqData = data;
    },
  },
};
</script>

<style lang="scss">
@import '@core/scss/vue/pages/page-faq.scss';
</style>
