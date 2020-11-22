<template>
  <div class="bg-white border shadow rounded-lg overflow-hidden p-4 m-4">
    <div
      class="text-3xl"
      @click="toggle"
    >
      Textarea
    </div>
    <div v-if="active">
      <div class="flex items-center justify-between ">
        <div class="w-1/3">
          <FormulateInput   
            v-model="textarea.value"
            type="textarea"
            label="Textarea Label"
            placeholder="Placeholder"
            validation="required|max:50,length"
            validation-name="lolz"
            error-behavior="live"
            :help="`${textarea.value.length}/50`"
            :outer-class="textarea.outerClass"
            :input-class="textarea.inputClass"
            :label-class="textarea.labelClass"
            :help-class="textarea.helpClass"
            :error-class="textarea.errorClass"
          />
        </div>
        <div class="max-w-md mx-auto">
          {{ textarea.value }}
        </div>
      </div>
      <FormulateInput   
        v-model="textarea.outerClass"
        type="textarea"
        label="outer"
        input-class="w-full bg-gray-900 text-white rounded p-2"
      />
      <FormulateInput   
        v-model="textarea.inputClass"
        type="textarea"
        label="input"
        input-class="w-full bg-gray-900 text-white rounded p-2"
      />
      <FormulateInput   
        v-model="textarea.labelClass"
        type="textarea"
        label="label"
        input-class="w-full bg-gray-900 text-white rounded p-2"
      />
      <FormulateInput   
        v-model="textarea.helpClass"
        type="textarea"
        label="help"
        input-class="w-full bg-gray-900 text-white rounded p-2"
      />
      <FormulateInput   
        v-model="textarea.errorClass"
        type="textarea"
        label="error"
        input-class="w-full bg-gray-900 text-white rounded p-2"
      />
      <code>
        {{ textarea }}
      </code>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      active: false,
      textarea: {
          value: '',
          outerClass: '',
          inputClass: 'w-1/3 text-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-600 focus:border-transparent border border-gray-500 rounded py-2 px-4 block w-full leading-normal placeholder-gray-400',
          labelClass: 'text-blue-900 text-xs',
          helpClass: 'text-xs py-1 text-gray-900 flex justify-end',
          errorClass: 'text-green-400 text-xs',
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
