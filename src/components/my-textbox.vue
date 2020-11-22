<template>
  <div class="bg-white border shadow rounded-lg overflow-hidden p-4 m-4">
    <div
      class="text-3xl"
      @click="toggle"
    >
      Textbox
    </div>
    <div v-if="active">
      <div class="flex items-center justify-between ">
        <div class="w-1/3">
          <FormulateInput   
            v-model="textbox.value"
            type="text"
            label="Textbox Label"
            placeholder="Placeholder"
            help="Help, I need somebody."
            validation="required"
            error-behavior="live"
            :outer-class="textbox.outerClass"
            :input-class="textbox.inputClass"
            :label-class="textbox.labelClass"
            :help-class="textbox.helpClass"
            :error-class="textbox.errorClass"
          />
        </div>
        <div class="max-w-md mx-auto">
          {{ textbox.value }}
        </div>
      </div>
      <FormulateInput   
        v-model="textbox.outerClass"
        type="textarea"
        label="outer"
        input-class="w-full bg-gray-900 text-white rounded p-2"
      />
      <FormulateInput   
        v-model="textbox.inputClass"
        type="textarea"
        label="input"
        input-class="w-full bg-gray-900 text-white rounded p-2"
      />
      <FormulateInput   
        v-model="textbox.labelClass"
        type="textarea"
        label="label"
        input-class="w-full bg-gray-900 text-white rounded p-2"
      />
      <FormulateInput   
        v-model="textbox.helpClass"
        type="textarea"
        label="help"
        input-class="w-full bg-gray-900 text-white rounded p-2"
      />
      <FormulateInput   
        v-model="textbox.errorClass"
        type="textarea"
        label="error"
        input-class="w-full bg-gray-900 text-white rounded p-2"
      />
      <code>
        {{ textbox }}
      </code>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      active: false,
      textbox: {
          value: '',
          outerClass: '',
          inputClass: 'w-1/3 text-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-600 focus:border-transparent border border-gray-500 rounded py-2 px-4 block w-full leading-normal placeholder-gray-400',
          labelClass: 'text-blue-900 text-xs',
          helpClass: 'text-xs py-1 text-purple-400',
          errorClass: 'text-red-400 text-xs',
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
