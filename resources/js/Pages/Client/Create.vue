<script>
import AppLayout from '@/Layouts/AppLayout.vue';
import { Link } from "@inertiajs/inertia-vue3";
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    AppLayout,
    Link,
  },
  data() {
    return {
      preview: null,
      image: null,
      preview_list: [],
      image_list: [],
      form: this.$inertia.form({
        name:'',
        file: ''
      })
    };
  },
  methods: {
    save(){
      if (this.$refs.image) {
        this.form.file = this.$refs.image.files[0];
      }
      this.form.post("/companies");
    },
    previewImage(event) {
      var input = event.target;
      if (input.files) {
        var reader = new FileReader();
        reader.onload = (e) => {
          this.preview = e.target.result;
        }
        this.image = input.files[0];
        reader.readAsDataURL(input.files[0]);
      }
    },
    previewMultiImage(event) {
      var input = event.target;
      var count = input.files.length;
      var index = 0;
      if (input.files) {
        while (count--) {
          var reader = new FileReader();
          reader.onload = (e) => {
            this.preview_list.push(e.target.result);
          }
          this.image_list.push(input.files[index]);
          reader.readAsDataURL(input.files[index]);
          index++;
        }
      }
    },
    reset() {
      this.image = null;
      this.preview = null;
      this.image_list = [];
      this.preview_list = [];
    }
  }
})

</script>
        
<template>
  <AppLayout title="Criar Empresa">
    <template #header>
      <h2 class="font-semibold text-xl text-gray-800 leading-tight">
        Criar empresa
      </h2>
    </template>
    <div class="container py-8 w-full">
      <div class="card">
        <form>
          <div class="card-body">
            <div class="row">
              <div class="col-6">
                <div class="form-group">
                  <label>Nome da Empresa:</label>
                  <input type="text" class="form-control" v-model="form.name">
                </div>
                <div class="form-group mt-2">
                  <label>Imagem:</label>
                  <input type="file" ref="image" class="form-control" accept="image/*" @change="previewImage">
                </div>
                <div class="mt-3 btn-group">
                  <Link :href="`/companies`" class="btn btn-sm btn-danger">Voltar</Link>
                  <button type="button" class="btn btn-sm btn-primary" @click.prevent="save()">Salvar</button>
                </div>
              </div>
              <div class="col-6">
                <template v-if="preview">
                  <img :src="preview" class="img-fluid" />                  
                </template>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </AppLayout>
</template>
        