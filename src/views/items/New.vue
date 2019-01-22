<template>
  <v-flex>
    <h2>New Item</h2>
    <v-alert :value="true" type="success" v-if="item != null">
      Your item has been created! <router-link :to="{name: 'ItemShow', params: {id: item.id} }">{{item.title}}</router-link>
    </v-alert>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-container>
        <v-layout>
          <v-flex xs12>
            <v-text-field
              v-model="formData.title"
              :rules="titleRules"
              :counter="10"
              label="Post Title"
              required
            ></v-text-field>
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex xs12>
            <v-text-field
              v-model="formData.body"
              :rules="bodyRules"
              :counter="50"
              label="Post Body"
              required
            ></v-text-field>
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex xs12>
            <v-btn color="primary" @click="submit">submit</v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-form>
  </v-flex>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'ItemsNew',
    data: () => ({
      valid: false,
      formData: {
        title: '',
        body: ''
      },
      titleRules: [
        v => !!v || 'Title is required',
        v => v.length <= 10 || 'Name must be less than 10 characters'
      ],
      bodyRules: [
        v => !!v || 'Body is required',
        v => v.length <= 50 || 'Name must be less than 50 characters'
      ],
    }),
    computed: {
      ...mapGetters({
        item: 'items/item'
      })
    },
    methods: {
      submit () {
        if (this.$refs.form.validate()) {
          this.$store.dispatch('items/createItem', this.formData)
          this.formData = {title: '', body: ''}
          this.$refs.form.resetValidation()
        }
      }
    },
    mounted() {
      this.$store.dispatch('global/updateLoading', false)
    }
  };
</script>
