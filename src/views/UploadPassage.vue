<template>
  <div class="faq-container">
    <!-- faq search section -->
    <section id="faq-search-filter">
      <b-card no-body class="faq-search" :style="{ backgroundImage: `url(${require('@/assets/images/banner.png')})` }">
        <b-card-body class="text-center" v-if="fileUploaded"> <h2 class="text-primary">Passage Uploaded Successfully</h2> </b-card-body>
        <b-card-body class="text-center" v-else>
          <h2 class="text-primary">Upload passage to ask question</h2>
          <!-- <b-card-text class="mb-2"> or choose a category to quickly find the help you need </b-card-text> -->

          <!-- form -->
          <b-form class="faq-search-input">
            <b-form-group label-for="faq-search-input">
              <b-form-file v-model="file" placeholder="Choose a file or drop it here..." drop-placeholder="Drop file here..." />
            </b-form-group>
          </b-form>
          <b-button v-ripple.400="'rgba(255, 255, 255, 0.15)'" variant="primary" @click="uploadFile">
            <feather-icon class="mr-50" icon="UploadIcon" /> Upload
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
  BFormFile,
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

export default {
  components: {
    BFormFile,
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
    BButton,
    BFormGroup,
  },
  data() {
    return {
      file: null,
      file2: null,
      fileUploaded: false,
    };
  },
  methods: {
    uploadFile() {
      this.fileUploaded = true;
    },
  },
};
</script>
<style lang="scss">
@import '@core/scss/vue/pages/page-faq.scss';
</style>
