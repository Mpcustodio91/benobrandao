<script>
import AppLayout from '@/Layouts/AppLayout.vue';
import { Link } from "@inertiajs/inertia-vue3";
import { defineComponent } from 'vue';
import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';

export default defineComponent({
  components: {
    AppLayout,
    Link,
    DecoupledEditor
  },
  data() {
    return {
      editor: DecoupledEditor,
      companies: [],
      editorConfig: {},
      form: this.$inertia.form({
        companie_id: '',
        description: ''
      })
    };
  },
  methods: {
    save() {
      this.form.post("/contracts");
    },
    onReady(editor) {
      // Insert the toolbar before the editable area.
      editor.ui.getEditableElement().parentElement.insertBefore(
        editor.ui.view.toolbar.element,
        editor.ui.getEditableElement()
      );
    }
  },
  mounted() {
    this.data.forEach(item => {
      this.companies.push({
        value: item.id,
        text: item.name
      })
    })
  },
  props: {
    data: Object
  }
})

</script>
        
<template>
  <AppLayout title="Criar Empresa">
    <template #header>
      <h2 class="font-semibold text-xl text-gray-800 leading-tight">
        Criar Contrato
      </h2>
    </template>
    <div class="container py-8 w-full">
      <div class="card">
        <form>
          <div class="card-body">
            <div class="row">
              <div class="form-group">
                <b-form-group id="input-group-3" label="Selecione a empresa:" label-for="input-3">
                  <b-form-select id="input-3" v-model="form.companie_id" :options="companies"></b-form-select>
                </b-form-group>
              </div>
              <span>
                Nos campos onde é necessário colocar os dados do colaborador colocar os seguintes codigos
                <ul>
                  <li><strong>Nome: </strong> -name-</li>
                  <li><strong>RG: </strong> -rg-</li>
                  <li><strong>CPF: </strong> -cpf-</li>
                  <li><strong>Endereço: </strong> -address-</li>
                  <li><strong>Numero: </strong> -number-</li>
                  <li><strong>Cidade: </strong> -city-</li>
                  <li><strong>Estado: </strong> -state-</li>
                  <li><strong>Bairro: </strong> -district-</li>
                </ul>
              </span>
              <div class="form-group mt-2">
                <label class="mb-2"><b>Contrato:</b></label>
                <ckeditor :editor="editor" v-model="form.description" @ready="onReady"></ckeditor>
              </div>
              <div class="col-6">
                <div class="mt-3 btn-group">
                  <Link :href="`/contracts`" class="btn btn-sm btn-danger">Voltar</Link>
                  <button type="button" class="btn btn-sm btn-primary" @click.prevent="save()">Salvar</button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </AppLayout>
</template>
        