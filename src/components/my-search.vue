<template>
  <div class="bg-white border shadow rounded-lg overflow-hidden p-4 m-4">
    <div
      class="text-3xl"
      @click="toggle"
    >
      Search
    </div>
    <div v-if="active">
      <div class="flex items-center justify-between">
        <div class="w-1/3">
          <FormulateInput   
            v-model="search.value"
            type="search"
            label="Search Label"
            placeholder="Placeholder"
            help="This one contains clearable."
            validation="required"
            validation-name="Validation"
            error-behavior="live"
            :outer-class="search.outerClass"
            :input-class="search.inputClass"
            :label-class="search.labelClass"
            :help-class="search.helpClass"
            :error-class="search.errorClass"
          />
        </div>
        <div class="max-w-md mx-auto">
          {{ search.value }}
        </div>
      </div>
      <FormulateInput   
        v-model="search.outerClass"
        type="textarea"
        label="outer"
        input-class="w-full bg-gray-900 text-white rounded p-2"
      />
      <FormulateInput   
        v-model="search.inputClass"
        type="textarea"
        label="input"
        input-class="w-full bg-gray-900 text-white rounded p-2"
      />
      <FormulateInput   
        v-model="search.labelClass"
        type="textarea"
        label="label"
        input-class="w-full bg-gray-900 text-white rounded p-2"
      />
      <FormulateInput   
        v-model="search.helpClass"
        type="textarea"
        label="help"
        input-class="w-full bg-gray-900 text-white rounded p-2"
      />
      <FormulateInput   
        v-model="search.errorClass"
        type="textarea"
        label="error"
        input-class="w-full bg-gray-900 text-white rounded p-2"
      />
      <code>
        {{ search }}
      </code>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      active: false,
      search: {
        value: '',
        outerClass: '',
        inputClass: 'w-1/3 text-gray-900 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-transparent border border-gray-500 rounded py-2 px-4 block w-full leading-normal placeholder-gray-400',
        labelClass: '',
        helpClass: '',
        errorClass: '',
      },
    }
  },
  methods:{
    toggle() {
      this.active = !this.active
    }
  }
}
</script>
