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
        this.$inertia.get('/letter-of-attorneys', {}, { replace: true, preserveState: true })
        return;
      }
      this.$inertia.get('/letter-of-attorneys', { value: this.value }, { replace: true, preserveState: true })
    },
  },
  props: {
    letter: Object
  }
})
</script>
    
<template>
  <AppLayout title="Contratos">
    <template #header>
      <h2 class="font-semibold text-xl text-gray-800 leading-tight">
        Procurações
      </h2>
    </template>

    <div class="col-xs-12 col-sm-12 col-lg-12">
      <div class="card">
        <div class="card-body">
          <div class="col-2">
            <Link href="/letter-of-attorneys/create" class="btn btn-sm btn-primary">
                <i class="fas fa-user-plus"></i> Adicionar Procuração
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
              <pagination :links="letter.links" />
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
                    <tr v-for="(contract,key) in letter.data" :key="contract.id">
                      <td>{{ key+1 }}</td>
                      <td>{{ contract.companie.name }}</td>
                      <td>
                        <div class="btn-group btn-group-sm">
                          <Link :href="`/letter-of-attorneys/${contract.id}/edit`" type="button" class="btn btn-primary">
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
  </AppLayout>
</template>
    