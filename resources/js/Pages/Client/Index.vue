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
      image: null
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
    update() {
      
    }
  },
  props: {
    clients: Object
  }
})
</script>
    
<template>
  <AppLayout title="Clientes">
    <template #header>
      <h2 class="font-semibold text-xl text-gray-800 leading-tight">
        Clientes
      </h2>
    </template>

    <div class="col-xs-12 col-sm-12 col-lg-12">
      <div class="card">
        <div class="card-body">
          <div class="col-2">
            <!-- <Link href="/companies/create" class="btn btn-sm btn-primary">
            <i class="fas fa-user-plus"></i> Adicionar Empresa
            </Link> -->
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
              <pagination :links="clients.links" />
              <div class="card-body table-responsive p-0 mt-2">
                <table class="table table-hover text-nowrap table-striped table-bordered">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Cliente</th>
                      <th>E-mail</th>
                      <th>Status</th>
                      <th>Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(client,key) in clients.data" :key="client.id">
                      <td>{{ key+1 }}</td>
                      <td>{{ client.name }}</td>
                      <td>{{ client.email }}</td>
                      <td>{{ client.status }}</td>
                      <td>
                        <div class="btn-group btn-group-sm">
                          <Link :href="`/clients/${client.id}/edit`" type="button" class="btn btn-primary">
                            <i class="fas fa-edit"></i>
                          </Link>
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
    