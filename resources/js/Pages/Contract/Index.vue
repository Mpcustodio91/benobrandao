<script>
import AppLayout from '@/Layouts/AppLayout.vue';
import { Link } from "@inertiajs/inertia-vue3";
import { defineComponent } from 'vue';
import Pagination from '../../Components/Pagination.vue';
import JetDialogModal from '@/Jetstream/DialogModal.vue';
import JetSecondaryButton from '@/Jetstream/SecondaryButton.vue';

export default defineComponent({
  components: {
    AppLayout,
    Link,
    Pagination,
    JetDialogModal,
    JetSecondaryButton
  },
  data() {
    return {
      value: "",
      editDialog: false,
      preview: null,
      image: null,
      form: {
        id: '',
        name: '',
        image: '',
        file: null
      }
    };
  },
  methods: {
    search() {
      if (!this.value) {
        this.$inertia.get('/companies', {}, { replace: true, preserveState: true })
        return;
      }
      this.$inertia.get('/companies', { value: this.value }, { replace: true, preserveState: true })
    },
    editCompanie(id, name, image) {
      this.editDialog = true
      this.form.id = id
      this.form.name = name
      this.form.image = image
    },
    previewImage(e) {
      const file = e.target.files[0];
      this.preview = URL.createObjectURL(file);
    },
    // previewImage(event) {
    //   var input = event.target;
    //   if (input.files) {
    //     var reader = new FileReader();
    //     reader.onload = (e) => {
    //       this.preview = e.target.result;
    //     }
    //     this.image = input.files[0];
    //     reader.readAsDataURL(input.files[0]);
    //     // this.form.file = this.$refs.image.files[0];
    //   }
    // },
    update() {
      if (this.$refs.image) {
        this.form.file = this.$refs.image.files[0];
      }
      console.log(this.form);
      axios.patch(`/companies/${this.form.id}`,this.form);
      // this.$inertia.put(`/companies/${this.form.id}`, { value: this.form },{
      //   preserveState: true,
      //   onSuccess: () => {
      //     this.form.reset();
      //     this.editDialog = false
      //   }
      // });
    }
  },
  props: {
    contracts: Object
  }
})
</script>
    
<template>
  <AppLayout title="Contratos">
    <template #header>
      <h2 class="font-semibold text-xl text-gray-800 leading-tight">
        Contratos
      </h2>
    </template>

    <div class="col-xs-12 col-sm-12 col-lg-12">
      <div class="card">
        <div class="card-body">
          <div class="col-2">
            <Link href="/contracts/create" class="btn btn-sm btn-primary">
                <i class="fas fa-user-plus"></i> Adicionar Contrato
            </Link>
          </div>
          <div class="row mt-3">
            <div class="col-12">
              <div class="card-header">
                <div class="card-tools">
                  <div class="input-group input-group-sm" style="width: 150px">
                    <input type="text" v-model="value" class="form-control" placeholder="Buscar" />
                    <div class="input-group-append">
                      <button type="submit" class="btn btn-default" @click="search()">
                        <i class="fas fa-search"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <pagination :links="contracts.links" />
              <div class="card-body table-responsive p-0 mt-2">
                <table class="table table-hover text-nowrap table-striped table-bordered">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Cliente</th>                      
                      <th>Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(contract,key) in contracts.data" :key="contract.id">
                      <td>{{ key+1 }}</td>
                      <td>{{ contract.companie.name }}</td>
                      <td>
                        <div class="btn-group btn-group-sm">
                          <Link :href="`/contracts/${contract.id}/edit`" type="button" class="btn btn-primary">
                            <i class="fas fa-edit"></i>
                          </Link>
                          <button type="button" class="btn btn-danger" @click="editDialog = true"><i
                              class="fas fa-trash"></i></button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <JetDialogModal :show="editDialog" @close="editDialog = false">
      <template #title>
        Editar Empresa
      </template>

      <template #content>
        <form method="patch" enctype="multipart/form-data" >
          <div class="card-body">
            <div class="row">
              <div class="col-12">
                <div class="form-group">
                  <label>Nome da Empresa:</label>
                  <input type="text" class="form-control" v-model="form.name">
                </div>
                <div class="form-group mt-2">
                  <label>Imagem:</label>
                  <input type="file" ref="image" class="form-control" accept="image/*" @change="previewImage">
                </div>
              </div>
              <div class="col-6 mt-2">
                <template v-if="form.image && !preview">
                  <img :src="`/storage/ImgesCompanies/${form.image}`" class="img-fluid" />
                </template>
                <template v-if="preview">
                  <img :src="preview" class="img-fluid" />
                </template>
              </div>
            </div>
          </div>
        </form>
      </template>

      <template #footer>
        <JetSecondaryButton @click="editDialog = false, this.form.reset(), preview = null">
          Fechar
        </JetSecondaryButton>
        <button type="button" class="btn btn-sm btn-primary ml-2" @click.prevent="update()">Salvar</button>
      </template>
    </JetDialogModal>
  </AppLayout>
</template>
    