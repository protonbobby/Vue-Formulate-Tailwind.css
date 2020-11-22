<template>
  <div class="bg-white border shadow rounded-lg overflow-hidden p-4 m-4">
    <div
      class="text-3xl"
      @click="toggle"
    >
      Select
    </div>
    <div v-if="active">
      <div class="flex items-center justify-between">
        <div class="w-1/3">
          <FormulateInput   
            v-model="select.value"
            type="select"
            :options="{first: 'First', second: 'Second', third: 'Third', fourth: 'Fourth'}"
            label="select Label"
            placeholder="Placeholder"
            help="Ayudame!!"
            validation="required"
            validation-name="Validation"
            error-behavior="live"
            :outer-class="select.outerClass"
            :input-class="select.inputClass"
            :label-class="select.labelClass"
            :help-class="select.helpClass"
            :error-class="select.errorClass"
          />
        </div>
        <div class="max-w-md mx-auto">
          {{ select.value }}
        </div>
      </div>
      <FormulateInput   
        v-model="select.outerClass"
        type="textarea"
        label="outer"
        input-class="w-full bg-gray-900 text-white rounded p-2"
      />
      <FormulateInput   
        v-model="select.inputClass"
        type="textarea"
        label="input"
        input-class="w-full bg-gray-900 text-white rounded p-2"
      />
      <FormulateInput   
        v-model="select.labelClass"
        type="textarea"
        label="label"
        input-class="w-full bg-gray-900 text-white rounded p-2"
      />
      <FormulateInput   
        v-model="select.helpClass"
        type="textarea"
        label="help"
        input-class="w-full bg-gray-900 text-white rounded p-2"
      />
      <FormulateInput   
        v-model="select.errorClass"
        type="textarea"
        label="error"
        input-class="w-full bg-gray-900 text-white rounded p-2"
      />
      <code>
        {{ select }}
      </code>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      active: false,
      select: {
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
